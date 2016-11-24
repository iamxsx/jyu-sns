package org.xsx.jyusns.im.chat.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.xsx.jyusns.user.entity.User;

import java.util.List;

/**
 * 群
 * Created by clouder on 16-11-3.
 */
@Document(collection = "group")
public class Group {
    /**
     * 分组 id
     */
    @Id
    public String id;
    /**
     * 分组名
     */
    private String groupname;
    /**
     * 群主,类型不能为 User ,否则循环引用会造成栈溢出
     * 单方向记住可以避免
     */
    @DBRef
    private User owner;
    /**
     * 群组头像
     */
    private String avatar;
    /**
     * 群内成员
     */
    @DBRef
    private List<User> mumbers;

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

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public List<User> getMumbers() {
        return mumbers;
    }

    public void setMumbers(List<User> mumbers) {
        this.mumbers = mumbers;
    }
}
