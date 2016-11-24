package org.xsx.jyusns.im.chat.entity;

import org.springframework.data.mongodb.core.mapping.DBRef;

/**
 * 用户1和用户2的聊天记录,两个人只要指向同一份会话记录即可
 * Created by clouder on 16-11-6.
 */
public class ChatRecord {

    private String userId1;

    private String userId2;

    @DBRef
    private ChatSession chatSession;

    public ChatSession getChatSession() {
        return chatSession;
    }

    public void setChatSession(ChatSession chatSession) {
        this.chatSession = chatSession;
    }

    public String getUserId1() {
        return userId1;
    }

    public void setUserId1(String userId1) {
        this.userId1 = userId1;
    }

    public String getUserId2() {
        return userId2;
    }

    public void setUserId2(String userId2) {
        this.userId2 = userId2;
    }
}
