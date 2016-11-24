package org.xsx.jyusns.user.dao.impl;

import com.mongodb.BasicDBObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.*;
import org.springframework.stereotype.Repository;
import org.xsx.jyusns.im.chat.entity.FriendGroup;
import org.xsx.jyusns.im.chat.entity.Group;
import org.xsx.jyusns.im.notice.entity.Notice;
import org.xsx.jyusns.user.dao.UserDao;
import org.xsx.jyusns.user.entity.Dynamic;
import org.xsx.jyusns.user.entity.User;

import java.util.List;

/**
 * Created by clouder on 16-11-2.
 */
@Repository
public class UserDaoImpl implements UserDao {

    public static final Logger logger = LoggerFactory.getLogger(UserDaoImpl.class);

    @Autowired
    MongoTemplate template;


    public User findOne(String id) {
        return template.findById(id, User.class);
    }

    public Group findGroupById(String id) {
        return template.findById(id, Group.class);
    }

    public User findUserByNameAndPwd(User user) {
        Query query = new Query();
        query.addCriteria(new Criteria("username").is(user.getUsername()));
        query.addCriteria(new Criteria("password").is(user.getPassword()));
        return this.template.findOne(query, User.class);
    }

    public void insert(User user) {
        template.insert(user);
    }

    /**
     * 设置头像
     *
     * @param id
     * @param url
     */
    public void setAvatar(String id, String url) {
        Query query = new Query();
        query.addCriteria(new Criteria("_id").is(id));
        Update update = new Update();
        update.set("avatar", url);
        template.upsert(query, update, User.class);
    }

    /**
     * 设置个性签名
     *
     * @param id
     * @param s
     */
    public void setSign(String id, String s) {
        template.upsert(
                new Query().addCriteria(new Criteria("_id").is(id)),
                new Update().set("sign", s),
                User.class
        );
    }

    /**
     * 添加好友到分组
     *
     * @param userId
     * @param friendGroupId
     */
    public void addFriend(String userId, String friendGroupId) {
        User user = template.findById(userId, User.class);
        template.upsert(
                new Query().addCriteria(new Criteria("_id").is(friendGroupId)),
                new Update().addToSet("list", user.getId()),
                FriendGroup.class
        );
    }


    /**
     * 删除好友
     *
     * @param id1
     * @param id2
     */
    public void delFriend(String id1, String id2) {
        template.upsert(
                new Query().addCriteria(new Criteria("_id").is(id1)),
                new Update().pull("friend", id2),
                User.class
        );
    }

    /**
     * 设置在线状态
     *
     * @param id
     * @param status
     */
    public void setStatus(String id, String status) {
        template.upsert(
                new Query().addCriteria(new Criteria("_id").is(id)),
                new Update().set("status", status),
                User.class
        );
    }


    /**
     * 添加分组
     *
     * @param userId
     * @param groupName
     */
    public void addFriendGroup(String userId, String groupName) {
        //　先添加分组
        FriendGroup group = new FriendGroup();
        group.setGroupname(groupName);
        template.insert(group);
        //　再将分组绑定到用户上
        template.upsert(
                new Query().addCriteria(new Criteria("_id").is(userId)),
                new Update().addToSet("friend", group.getId()),
                User.class
        );
    }

    /**
     * 查询一个用户的所有分组
     *
     * @param id 用户id
     */
    public List<FriendGroup> findFriendGroup(String id) {
        //指定返回的字段
        Query query = new BasicQuery(new BasicDBObject("_id", id), new BasicDBObject("friend", true));
        //好友分组的 id
        List<String> friendGroupIds = template.findOne(query, User.class).getFriend();
        if (friendGroupIds == null) {
            return null;
        }
        return template.find(
                new Query().addCriteria(new Criteria("_id").in(friendGroupIds)),
                FriendGroup.class
        );
    }

    /**
     * 获得所有的群,并获取群中的用户
     *
     * @param id 用户 id
     * @return
     */
    public List<Group> findGroups(String id) {
        //指定返回的字段
        Query query = new BasicQuery(new BasicDBObject("_id", id), new BasicDBObject("group", true));
        //好友分组的 id
        List<String> groupIds = template.findOne(query, User.class).getGroup();
        if (groupIds == null) {
            return null;
        }
        return template.find(
                new Query().addCriteria(new Criteria("_id").in(groupIds)),
                Group.class
        );
    }

    /**
     * 获得所有的群,但不获取群中的用户,也不获取群主
     *
     * @param id 用户 id
     * @return
     */
    public List<Group> findGroupsWithoutUsers(String id) {
        //指定返回的字段
        Query query = new BasicQuery(new BasicDBObject("_id", id), new BasicDBObject("group", true));
        //好友分组的 id
        List<String> groupIds = template.findOne(query, User.class).getGroup();
        if (groupIds == null) {
            return null;
        }
        Query query2 = new BasicQuery(
                new BasicDBObject(),
                new BasicDBObject("mumbers", false).append("owner", false)
        );
        query2.addCriteria(new Criteria("_id").in(groupIds));
        return template.find(
                query2,
                Group.class
        );
    }

    @Override
    public User findByUsername(String username) {
        return template.findOne(
                new Query().addCriteria(new Criteria("username").is(username)),
                User.class
        );
    }

    @Override
    public void updateAvatar(String userId, String avatar) {
        template.upsert(
                new Query().addCriteria(new Criteria("_id").is(userId)),
                new Update().set("avatar", avatar),
                User.class
        );
    }

    @Override
    public void updatePassword(String userId, String newPassword) {
        template.upsert(
                new Query().addCriteria(new Criteria("_id").is(userId)),
                new Update().set("password", newPassword),
                User.class
        );
    }

    @Override
    public void updateBgImg(String userId, String bgImg) {
        template.upsert(
                new Query().addCriteria(new Criteria("_id").is(userId)),
                new Update().set("bgImg", bgImg),
                User.class
        );
    }

    @Override
    public User getLeftPanelInfo(String userId) {
        Query query = new BasicQuery(
                new BasicDBObject("_id", userId),
                new BasicDBObject("avatar", true)
                        .append("bgImg", true)
        );

        return template.findOne(
                query,
                User.class
        );
    }

    @Override
    public List<Dynamic> getDynamics(String userId, Integer page, Integer limit) {
        int skip = (page - 1) * limit;
        Query query = new Query();
        query.skip(skip).limit(limit).with(new Sort(Sort.Direction.DESC, "date"));
        return template.find(
                query,
                Dynamic.class
        );
    }

    @Override
    public List<Notice> getNotices(String userId, Integer page, Integer limit) {
        int skip = (page - 1) * limit;
        Query query = new Query();
        query.addCriteria(new Criteria("to").is(userId))
                .skip(skip).limit(limit).with(new Sort(Sort.Direction.DESC, "date"));
        return template.find(
                query,
                Notice.class
        );
    }

    @Override
    public void insertNotice(Notice notice) {
        template.insert(notice);
    }

    /**
     * 添加一个群
     *
     * @param group
     */
    public void addGroup(Group group) {
        template.insert(group);
    }

    /**
     * 用户加群
     *
     * @param userId
     * @param groupId
     */
    public void userAddGroup(String userId, String groupId) {
        User user = this.findOne(userId);
        // 先将用户添加到群里
        template.upsert(
                new Query().addCriteria(new Criteria("_id").is(groupId)),
                new Update().addToSet("mumbers", user),
                Group.class
        );
        //再修改用户里的群属性
        template.upsert(
                new Query().addCriteria(new Criteria("_id").is(userId)),
                new Update().addToSet("group", groupId),
                User.class
        );

    }

    public User findGroupOwner(String id) {

        Group group = template.findById(id, Group.class);
        String ownerId = group.getId();
        return template.findById(ownerId, User.class);
    }


    public List<User> findList() {
        return template.findAll(User.class);
    }


    /**
     * 更改用户信息
     *
     * @param user
     */
    public void update(User user) {
        Query query = new Query();
        query.addCriteria(new Criteria("_id").is(user.getId()));
        template.upsert(
                query,
                new Update()
                        .set("username", user.getUsername())
                        .set("sign", user.getSign())
                        .set("email", user.getEmail())
                        .set("phone", user.getPhone())
                        .set("description", user.getDescription())
                        .set("sex", user.getSex()),
                User.class
        );
    }

    public void delete(String id) {
        Query query = new Query();
        query.addCriteria(new Criteria("_id").is(id));
        template.remove(query);
    }


}
