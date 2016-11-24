package org.xsx.jyusns.im.notice.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.xsx.jyusns.user.entity.Dynamic;

/**
 * 后台向前台发送的通知，
 * １.前台怎么订阅
 * /notice:$userId
 * 前台收到推送后将红点点显示，点击之后将红点去掉
 * ２．后台直接推送应该就行了
 * 后台往用户推送
 * Created by clouder on 16-11-22.
 */
@Document(collection = "notice")
public class Notice {

    @Id
    private String id;
    /**
     * 提醒谁
     */
    private String to;
    /**
     * 发送人的名字
     */
    private String username;
    /**
     * 谁发的
     */
    private String from;
    /**
     * 动作
     */
    private String action;
    /**
     * 发送人头像
     */
    private String avatar;
    /**
     * 发送时间
     */
    private String date;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
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

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public enum Action {
        //加入
        JOIN("加入了Share"),
        //点赞
        LIKED("赞了你的帖子"),
        //回复
        REPLY("回复了你的帖子"),
        //转发
        SHARE("转发了你的文章"),
        //关注
        FOLLOW("关注了你");

        private String msg;

        Action(String msg) {
            this.msg = msg;
        }

        public String getMsg() {
            return msg;
        }

        public void setMsg(String msg) {
            this.msg = msg;
        }
    }
}
