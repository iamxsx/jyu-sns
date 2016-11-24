package org.xsx.jyusns.user.service.impl;

import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.xsx.jyusns.exception.CustomException;
import org.xsx.jyusns.im.chat.entity.FriendGroup;
import org.xsx.jyusns.im.chat.entity.Group;
import org.xsx.jyusns.im.notice.entity.Notice;
import org.xsx.jyusns.user.dao.UserDao;
import org.xsx.jyusns.user.entity.Dynamic;
import org.xsx.jyusns.user.entity.User;
import org.xsx.jyusns.user.service.UserService;
import org.xsx.jyusns.utils.EncryptUtils;

import java.util.List;
import java.util.Map;

/**
 * Created by clouder on 16-11-2.
 */
@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    public User login(User user) {
        //加密后的密码
        user.setPassword(EncryptUtils.encrypt(user.getPassword(), user.getSalt()));
        return userDao.findUserByNameAndPwd(user);
    }

    public void insert(User user) {
        userDao.insert(user);
    }

    public void register(User user) {
        Map<String, String> map = EncryptUtils.encrypt(user.getPassword());
        user.setPassword(map.get("password"));
        user.setSalt(map.get("salt"));
        userDao.insert(user);
    }

    public User findOne(String id) {
        return userDao.findOne(id);
    }

    public void setAvatar(String id, String s) {
        userDao.setAvatar(id, s);
    }

    public void setSign(String id, String s) {
        userDao.setSign(id, s);
    }

    public void addFriend(String userId, String friendGroupId) {
        userDao.addFriend(userId, friendGroupId);
    }

    public void delFriend(String id1, String id2) {
        userDao.delFriend(id1, id2);
    }

    public void setStatus(String id, String status) {
        userDao.setStatus(id, status);
    }

    public void addFriendGroup(String id, String group) {
        userDao.addFriendGroup(id, group);
    }

    public List<FriendGroup> findFriendGroup(String id) {
        return userDao.findFriendGroup(id);
    }

    public List<Group> findGroups(String id) {
        return userDao.findGroups(id);
    }

    public void addGroup(Group group) {
        userDao.addGroup(group);
    }

    public void userAddGroup(String id, String groupId) {
        userDao.userAddGroup(id, groupId);
    }

    public User findGroupOwner(String id) {
        return userDao.findGroupOwner(id);
    }

    public Group findGroup(String groupId) {
        return userDao.findGroupById(groupId);
    }

    public List<Group> findGroupsWithoutUsers(String userId) {
        return userDao.findGroupsWithoutUsers(userId);
    }

    @Override
    public User findByUsername(String username) {
        return userDao.findByUsername(username);
    }

    @Override
    public void update(User user) {
        userDao.update(user);
    }

    @Override
    public void updateAvatar(String userId,String avatar) {
        userDao.updateAvatar(userId,avatar);
    }

    @Override
    public void updatePassword(String oldPassword, String newPassword) throws CustomException {
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //原密码
        String old = user.getPassword();
        String salt = user.getSalt();
        oldPassword = EncryptUtils.encrypt(salt,oldPassword);
        //比较
        if (!old.equals(oldPassword)){
            throw new CustomException("原密码错误");
        }
        userDao.updatePassword(user.getId(),EncryptUtils.encrypt(salt,newPassword));
    }

    @Override
    public void updateBgImg(String bgImg) {
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        userDao.updateBgImg(user.getId(),bgImg);
    }

    @Override
    public User getLeftPanelInfo(String userId) {
        return userDao.getLeftPanelInfo(userId);
    }

    @Override
    public List<Dynamic> getDynamics(String userId, Integer page, Integer limit) {
        return userDao.getDynamics(userId,page,limit);
    }

    @Override
    public List<Notice> getNotices(String userId, Integer page, Integer limit) {
        return userDao.getNotices(userId,page,limit);
    }

    @Override
    public void insertNotice(Notice notice) {
        userDao.insertNotice(notice);
    }
}
