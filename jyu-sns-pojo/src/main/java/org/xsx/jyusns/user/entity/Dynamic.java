package org.xsx.jyusns.user.entity;

import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by clouder on 16-11-21.
 * 动态信息
 * 谁谁谁　在某某时刻　干了什么事
 */
@Document(collection = "dynamic")
public class Dynamic {

    private String owner;
    private String username;
    private String userId;
    /**
     * 动作
     */
    private Action action;
    private String avatar;
    private String date;

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Action getAction() {
        return action;
    }

    public void setAction(Action action) {
        this.action = action;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }


    public enum Action {
        //加入
        JOIN("join"),
        //点赞
        LIKED("liked"),
        //回复
        REPLY("reply"),
        //转发
        SHARE("share"),
        //关注
        FOLLOW("follow");

        Action(String msg) {

        }
    }
}
