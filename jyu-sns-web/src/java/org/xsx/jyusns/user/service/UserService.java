package org.xsx.jyusns.user.service;

import org.xsx.jyusns.exception.CustomException;
import org.xsx.jyusns.im.chat.entity.FriendGroup;
import org.xsx.jyusns.im.chat.entity.Group;
import org.xsx.jyusns.im.notice.entity.Notice;
import org.xsx.jyusns.user.entity.Dynamic;
import org.xsx.jyusns.user.entity.User;

import java.util.List;

/**
 * Created by clouder on 16-11-2.
 */
public interface UserService {

    User login(User user);

    void insert(User user);

    void register(User user);

    User findOne(String id);

    void setAvatar(String id, String s);

    void setSign(String id, String s);

    void addFriend(String userId, String friendGroupId);

    void delFriend(String id1, String id2);

    void setStatus(String id1, String online);

    void addFriendGroup(String id, String group);

    List<FriendGroup> findFriendGroup(String id1);

    List<Group> findGroups(String id);

    void addGroup(Group group);

    void userAddGroup(String id, String groupId);

    User findGroupOwner(String id);

    Group findGroup(String groupId);

    List<Group> findGroupsWithoutUsers(String userId);

    User findByUsername(String username);

    void update(User user);

    void updateAvatar(String userId,String avatar);

    void updatePassword(String oldPassword, String newPassword) throws CustomException;

    void updateBgImg(String bgImg);

    User getLeftPanelInfo(String userId);

    List<Dynamic> getDynamics(String userId, Integer page, Integer limit);

    List<Notice> getNotices(String userId, Integer page, Integer limit);

    void insertNotice(Notice notice);
}
