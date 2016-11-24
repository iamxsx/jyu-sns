package org.xsx.jyusns.im.chat.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.xsx.jyusns.user.entity.User;

import java.util.List;

/**
 * 用户自建管理好友的分组
 * Created by clouder on 16-11-3.
 */
@Document(collection = "friendGroup")
public class FriendGroup {
    /**
     * 好友分组 id
     */
    @Id
    public String id;
    /**
     * 分组名
     */
    private String groupname;
    /**
     * 记录分组下的用户 id
     */
    @DBRef
    private List<User> list;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getGroupname() {
        return groupname;
    }

    public void setGroupname(String groupname) {
        this.groupname = groupname;
    }

    public List<User> getList() {
        return list;
    }

    public void setList(List<User> list) {
        this.list = list;
    }
}
