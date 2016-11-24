package org.xsx.jyusns.info.entity;

import org.springframework.data.mongodb.core.mapping.Document;

/**
 * 一个不萌的回复
 * Created by clouder on 16-11-9.
 */
@Document(collection = "reply")
public class Reply extends Info {

    /**
     * 回复帖子的id
     */
    private String replyTo;

    /**
     * 楼层号
     */
    private int floorNum;
    /**
     * 回复要记录发帖人的id
     */
    private String postUserId;


    public int getFloorNum() {
        return floorNum;
    }

    public void setFloorNum(int floorNum) {
        this.floorNum = floorNum;
    }

    public String getReplyTo() {
        return replyTo;
    }

    public void setReplyTo(String replyTo) {
        this.replyTo = replyTo;
    }

    public String getPostUserId() {
        return postUserId;
    }

    public void setPostUserId(String postUserId) {
        this.postUserId = postUserId;
    }
}
