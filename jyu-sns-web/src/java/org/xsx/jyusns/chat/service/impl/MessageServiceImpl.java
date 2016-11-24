package org.xsx.jyusns.chat.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.xsx.jyusns.chat.dao.MessageDao;
import org.xsx.jyusns.chat.service.MessageService;
import org.xsx.jyusns.im.chat.entity.ChatSession;
import org.xsx.jyusns.im.chat.entity.Message;
import org.xsx.jyusns.user.service.UserService;

import java.util.List;

/**
 * Created by clouder on 16-11-6.
 */
@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private MessageDao messageDao;

    @Autowired
    private UserService userService;


    public void insert(Message message) {
        messageDao.insert(message);
    }

    public ChatSession getChatSession(String userId1, String userId2) {
        return messageDao.getChatSession(userId1,userId2);
    }

    public void insertAll(List<Message> messages) {
        messageDao.insertAll(messages);
    }

    public ChatSession findGroupChatSession(String id) {
        return messageDao.findGroupChatSession(id);
    }
}
