package org.xsx.jyusns.user.dao;

import org.xsx.jyusns.base.dao.BaseDao;
import org.xsx.jyusns.im.chat.entity.FriendGroup;
import org.xsx.jyusns.im.chat.entity.Group;
import org.xsx.jyusns.im.notice.entity.Notice;
import org.xsx.jyusns.user.entity.Dynamic;
import org.xsx.jyusns.user.entity.User;

import java.util.List;

/**
 * Created by clouder on 16-11-2.
 */
public interface UserDao extends BaseDao<User>{

    public Group findGroupById(String id);

    public User findUserByNameAndPwd(User user);

    void insert(User user);

    void setAvatar(String id,String url);

    void setSign(String id, String s);

    void addFriend(String userId, String friendGroupId);

    void delFriend(String id1, String id2);

    void setStatus(String id, String status);

    void addFriendGroup(String id,String group);

    List<FriendGroup> findFriendGroup(String id);

    List<Group> findGroups(String id);

    void addGroup(Group group);

    void userAddGroup(String id, String groupId);

    User findGroupOwner(String id);

    List<Group> findGroupsWithoutUsers(String userId);

    User findByUsername(String username);

    void updateAvatar(String userId,String avatar);

    void updatePassword(String userId, String newPassword);

    void updateBgImg(String id, String bgImg);

    User getLeftPanelInfo(String userId);

    List<Dynamic> getDynamics(String userId, Integer page, Integer limit);

    List<Notice> getNotices(String userId, Integer page, Integer limit);

    void insertNotice(Notice notice);
}
