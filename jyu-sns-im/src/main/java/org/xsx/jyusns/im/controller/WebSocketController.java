package org.xsx.jyusns.im.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.xsx.jyusns.im.chat.entity.Message;
import org.xsx.jyusns.im.notice.entity.Notice;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by clouder on 16-11-3.
 */
@Controller
public class WebSocketController {

    @Autowired
    private SimpMessagingTemplate template;

    /**
     * 请注意！！！
     * 这里用的注解是　MessageMapping　，是用来响应　webSocket 操作的，
     * 通过　app/test 即可访问该方法
     * app 即为我们在配置文件里配的　application-destination-prefix
     */
    @MessageMapping("test")
    public void test() {
    }

    /**
     * 发信息的中转站,具体的信息处理在客户端上
     * 返回信息的格式
     * username: To.name,
     * avatar: To.avatar,
     * id: To.id,
     * type: To.type,
     * content: autoReplay[Math.random() * 9 | 0],
     * timestamp: new Date().getTime()
     */
//    @MessageMapping("send-to-user")
    public void sendMessageToUser(Message message) {
        //User toUser = userService.findOne(message.getFrom());
        Map<String, Object> resultMsg = new HashMap();
        resultMsg.put("username", message.getFromName());
        resultMsg.put("avatar", message.getFromAvatar());
        //layui需要靠它辨别是谁发的
        resultMsg.put("id", message.getFrom());
        resultMsg.put("type", message.getType());
        resultMsg.put("content", message.getContent());
        resultMsg.put("timestamp", message.getDate());
        resultMsg.put("fromId", message.getFrom());
        resultMsg.put("toId", message.getTo());
        template.convertAndSendToUser(message.getTo(), "/message", resultMsg); //subscribe('/user/' + to + '/message')
    }

    /**
     * 群的成员记住群,
     * 群成员subscribe了群
     * 当群发的时候,群成员自然会收到
     *
     * @param message
     */
    public void sendMessageToGroupUsers(Message message) {
        //先找出群
        //Group group = userService.findGroup(message.getTo());
        //User user = userService.findOne(message.getFrom());
        Map<String, Object> resultMsg = new HashMap();
        resultMsg.put("username", message.getFromName());
        resultMsg.put("avatar", message.getFromAvatar());
        resultMsg.put("id", message.getTo());
        resultMsg.put("type", message.getType());
        resultMsg.put("content", message.getContent());
        resultMsg.put("timestamp", message.getDate());
        //是谁发的要传给客户端判断,避免自己收到自己的消息
        //TODO 会考虑换一种做法,避免用户量太大时效率太低

        resultMsg.put("fromId", message.getFrom());
        template.convertAndSend("/group/" + message.getTo(), resultMsg);
    }

    @MessageMapping("send-msg")
    public void sendMessage(Message message) {
        //先判断是单发的还是群发的
        String type = message.getType();
        if (type != null) {
            if (type.equals("friend")) {
                sendMessageToUser(message);
            } else if (type.equals("group")) {
                sendMessageToGroupUsers(message);
            }
        }
        //通知消息队列存储消息
        //saveChatMessage(message);
    }






}
