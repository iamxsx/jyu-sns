package org.xsx.jyusns.chat.controller;

import com.alibaba.fastjson.JSON;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.xsx.jyusns.base.controller.BaseController;
import org.xsx.jyusns.chat.service.MessageService;
import org.xsx.jyusns.im.chat.entity.ChatSession;
import org.xsx.jyusns.im.chat.entity.FriendGroup;
import org.xsx.jyusns.im.chat.entity.Group;
import org.xsx.jyusns.im.chat.entity.Message;
import org.xsx.jyusns.user.entity.User;
import org.xsx.jyusns.user.service.UserService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

/**
 * Created by clouder on 16-11-2.
 * 1.离线信息
 * 发送消息时若对方在线,则直接将消息推送,否则将消息存入 redis 缓存中,
 * 用户再次登陆时,根据用户Id,查找相应的离线消息
 * 好友离线消息
 * 群组离线消息
 * 2.历史聊天记录
 * 群聊天记录
 * 好友聊天记录
 * 怎么存储 ?何时存储 ?
 * 一条存储一次还是攒到一定量再存储
 * TODO 由浏览器存在本地,之后由用户自己同步到云端
 * 3.添加分组
 * 加好友,删好友
 * 4.创建群
 * 邀请成员,踢出成员
 * 5.用户Im状态
 * <p>
 * 考虑到layui的界面定制型较差,所以需要先建立个人中心
 */
@Controller
@RequestMapping("chat")
public class ChatAction extends BaseController {

    @Autowired
    private UserService userService;
    @Autowired
    private MessageService messageService;

    /**
     * 初始化主面板信息
     */
    @RequestMapping("init-main")
    @ResponseBody
    public Map<String, Object> initMainPanel(HttpSession session) {
        Map<String, Object> result = new HashMap();
        Map<String, Object> data = new HashMap();
        try {
            // 我的信息、好友列表、
            Subject subject = SecurityUtils.getSubject();
            User user = (User) subject.getPrincipal();
//            User user = (User) session.getAttribute("currentUser");
            List<FriendGroup> friendGroups = userService.findFriendGroup(user.getId());
            // 获取好友列表
            data.put("friend", friendGroups);
            // 获取群组列表
            List<Group> groups = userService.findGroupsWithoutUsers(user.getId());
            data.put("group", groups);
            // 我的信息
            data.put("mine", user);
            result.put("data", data);
            //代表成功
            result.put("code", 0);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            result.put("code", 1);
            result.put("msg", e.getMessage());
        }
        return result;
    }


    /**
     * 初始化群员接口
     *
     * @param id 群 id
     * @return
     */
    @RequestMapping("init-members")
    @ResponseBody
    public Map<String, Object> initMembers(String id) {
        Map<String, Object> result = new HashMap();
        Map<String, Object> data = new HashMap();
        try {
            result.put("code", 0);
            Group group = userService.findGroup(id);
            User owner = group.getOwner();
            data.put("owner", owner);
            data.put("list", group.getMumbers());
            result.put("data", data);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            result.put("code", 1);
            result.put("msg", e.getMessage());
        }
        return result;
    }


    @RequestMapping(value = "upload-image", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> uploadImage(HttpServletRequest request) {
        return upload(request, "img");
    }

    private Map<String, Object> upload(HttpServletRequest request, String type) {
        Map<String, Object> result = new HashMap();
        Map<String, Object> data = new HashMap();
        try {
            String src = uploadFile(request, type);
            result.put("code", 0);
            data.put("src", src);
            result.put("data", data);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            result.put("code", 1);
            result.put("msg", e.getMessage());
        }
        return result;
    }

    @RequestMapping(value = "upload-file", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> uploadFile(HttpServletRequest request) {
        return upload(request, "file");
    }

    @RequestMapping("add-friend")
    public ResponseEntity<Void> addFriend(String userId, String groupId) {
        try {
            userService.addFriend(userId, groupId);
            return ResponseEntity.ok(null);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }

    @RequestMapping("set-avatar")
    public ResponseEntity<Void> setAvatar(String userId, String url) {
        try {
            userService.setAvatar(userId, url);
            return ResponseEntity.ok(null);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }

    /**
     * 获取聊天记录
     *
     * @param id   好友id 或群id
     * @param type friend 或 group
     */
    @RequestMapping("chat-record")
    public String getChatRecord(Model model, HttpSession session, String id, String type) {
        ChatSession chatSession = null;
        if (type == "friend") {
            User user = (User) session.getAttribute("currentUser");
            String me = user.getId();
            chatSession = messageService.getChatSession(me, id);
        } else if (type == "group") {
            // TODO 对于群聊天,直接查询一份会话即可
            chatSession = messageService.findGroupChatSession(id);
        }

        if (chatSession != null) {
            model.addAttribute("chatMessages", chatSession.getChatMessages());
        }
        return "chat-record";
    }

    /**
     * 同步聊天消息
     *
     * @param messages
     * @return
     */
    @RequestMapping(value = "sync-chat-record", method = RequestMethod.POST)
    public ResponseEntity<Void> syncChatRecord(@RequestBody List<String> messages) {
        try {
            List<Message> messages1 = new LinkedList();
            for (String message : messages) {
                messages1.add(JSON.parseObject(message, Message.class));
            }
            messageService.insertAll(messages1);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }

    @RequestMapping("settings")
    public String toSettings() {
        return "settings";
    }

    @RequestMapping("find")
    public String find() {
        return "find";
    }

}
