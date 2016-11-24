package org.xsx.jyusns.im.chat.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

/**
 * 聊天会话,一个人和一个人或者一个群的会话
 * Created by clouder on 16-11-6.
 */
@Document(collection = "chatSession")
public class ChatSession {
    @Id
    private String id;

    private List<Message> chatMessages;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<Message> getChatMessages() {
        return chatMessages;
    }

    public void setChatMessages(List<Message> chatMessages) {
        this.chatMessages = chatMessages;
    }
}
