package org.xsx.jyusns.chat.dao;

import org.xsx.jyusns.base.dao.BaseDao;
import org.xsx.jyusns.im.chat.entity.ChatSession;
import org.xsx.jyusns.im.chat.entity.Message;

import java.util.List;

/**
 * Created by clouder on 16-11-6.
 */
public interface MessageDao extends BaseDao<Message>{


    ChatSession getChatSession(String userId1, String userId2);

    void insertAll(List<Message> messages);

    ChatSession findGroupChatSession(String id);
}
