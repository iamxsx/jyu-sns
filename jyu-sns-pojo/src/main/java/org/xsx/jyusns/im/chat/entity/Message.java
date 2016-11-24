package org.xsx.jyusns.im.chat.entity;

/**
 * Created by clouder on 16-10-29.
 */
public class Message {

    //发送者
    private String from;
    //接收者,可能是单个用户的id,也可以能是群id,根据type区分
    private String to;
    //发送的文本
    private String content;
    //发送日期
    private String date;
    private String fromName;
//    private String toName;
    private String fromAvatar;
//    private String toAvatar;

//    public String getToAvatar() {
//        return toAvatar;
//    }
//
//    public void setToAvatar(String toAvatar) {
//        this.toAvatar = toAvatar;
//    }

    public String getFromAvatar() {
        return fromAvatar;
    }

    public void setFromAvatar(String fromAvatar) {
        this.fromAvatar = fromAvatar;
    }

    public String getFromName() {
        return fromName;
    }

    public void setFromName(String fromName) {
        this.fromName = fromName;
    }

//    public String getToName() {
//        return toName;
//    }
//
//    public void setToName(String toName) {
//        this.toName = toName;
//    }

    /**
     * 区分是单发(friend)还是群发(group)
     */
    private String type;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
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
