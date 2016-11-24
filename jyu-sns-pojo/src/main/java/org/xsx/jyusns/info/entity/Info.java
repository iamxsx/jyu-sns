package org.xsx.jyusns.info.entity;

import org.springframework.data.annotation.Id;

/**
 * 信息类
 * Created by clouder on 16-11-9.
 */
public class Info {

    @Id
    private String id;
    /**
     * 发布人的 id
     */
    private String userId;
    /**
     * 发布人的名字
     */
    private String username;
    /**
     * 发布人的头像
     */
    private String avatar;
    /**
     * 发布的内容
     */
    private String content;

    private String date;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
