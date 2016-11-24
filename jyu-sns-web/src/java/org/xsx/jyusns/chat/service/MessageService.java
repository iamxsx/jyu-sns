package org.xsx.jyusns.chat.service;

import org.xsx.jyusns.im.chat.entity.ChatSession;
import org.xsx.jyusns.im.chat.entity.Message;

import java.util.List;

/**
 * Created by clouder on 16-11-6.
 */
public interface MessageService {

    void insert(Message message);

    ChatSession getChatSession(String me, String id);

    void insertAll(List<Message> messages);

    ChatSession findGroupChatSession(String id);
}
