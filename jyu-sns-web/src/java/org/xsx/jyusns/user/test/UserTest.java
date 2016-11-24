package org.xsx.jyusns.user.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.xsx.jyusns.im.chat.entity.FriendGroup;
import org.xsx.jyusns.im.chat.entity.Group;
import org.xsx.jyusns.user.entity.User;
import org.xsx.jyusns.user.service.UserService;

import java.util.List;

/**
 * Created by clouder on 16-11-2.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring/applicationContext.xml"})
public class UserTest {

    @Autowired
    private UserService userService;



    @Test
    public void testInsert() {
        User user = new User();
        user.setUsername("天香");
        user.setPassword("123");
        userService.insert(user);
        System.out.printf(user.toString());
    }

    @Test
    public void testLogin() {
        User user = new User();
        user.setUsername("kkk");
        user.setPassword("123");
        user.setSalt("52f2867ad69c90bd1fa813edd3367e46");
        System.out.println(userService.login(user));
    }

    @Test
    public void testRegist() {
        User user = new User();
        user.setUsername("kkk");
        user.setPassword("123");
        user.setEmail("1@qq.com");
        user.setPhone("18813973776");
        userService.register(user);
    }

    @Test
    public void testUpdate() {
        String id = "581affbc8a84891f2f7558bf";
        userService.setAvatar(id, "http://h.hiphotos.baidu.com/zhidao/pic/item/0d338744ebf81a4c76f1f91fd22a6059242da620.jpg");

        userService.setSign(id,"龟派气功 波!!!");
    }

    /**
     * 测试添加好友分组
     */
    @Test
    public void testAddFriendGroup() {
        String userId = "581aff938a84891eec9be6e7";
        String group = "李狗蛋的测试群";
        userService.addFriendGroup(userId,group);
    }

    /**
     * 测试添加好友到分组
     */
    @Test
    public void testAddFriend() {
        String userId = "5819decf8a848978de339819";
        String friendGroupId = "581c00318a848914c55ac191";
        userService.addFriend(userId,friendGroupId);
    }

    /**
     * 测试查找所有分组
     */
    @Test
    public void testfindAllGroup() {
        String id1 = "5819decf8a848978de339819";
        List<FriendGroup> groups =  userService.findFriendGroup(id1);
        System.out.println(groups);
    }

    /**
     * 测试删除好友
     */
    @Test
    public void testDelFriend() {
        String id1 = "5819decf8a848978de339819";
        String id2 = "5819e5738a84897c5427f4ae";
        userService.delFriend(id1,id2);
    }

    /**
     * 测试修改在线状态
     */
    @Test
    public void testUpdateStatus() {
        String id1 = "5819decf8a848978de339819";
        userService.setStatus(id1,"hide");
    }

    /**
     * 获取好友列表
     */
    @Test
    public void testFindFriendList() {
        String id1 = "5819decf8a848978de339819";

    }

    /**
     * 新建群
     */
    @Test
    public void testAddGroup() {
        String id = "5819decf8a848978de339819";
        User user = userService.findOne(id);
        Group group = new Group();
        group.setGroupname("今晚上秋名山");
        group.setOwner(user);
        group.setAvatar("http://dealer2.autoimg.cn/dealerdfs/g23/M05/4E/52/620x0_1_q87_autohomedealer__wKjBwFcldLmAHZuJAADzqucks6c476.jpg");
        userService.addGroup(group);

    }

    /**
     * 用户加群
     */
    @Test
    public void testUserAddGroup() {
        String id = "5819decf8a848978de339819";
        String groupId = "581c00318a848914c55ac191";
        userService.userAddGroup(id,groupId);

    }

    @Test
    public void testfindGroupsWithoutUser() {
        String id1 = "5819decf8a848978de339819";
        List<Group> groups =  userService.findGroupsWithoutUsers(id1);
        System.out.println(groups);
    }

    @Test
    public void testFindById(){
        User user = userService.findOne("581aff938a84891eec9be6e7");
        System.out.println(user);
    }


}
