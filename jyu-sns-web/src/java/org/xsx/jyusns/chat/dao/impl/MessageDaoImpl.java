package org.xsx.jyusns.chat.dao.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;
import org.xsx.jyusns.chat.dao.MessageDao;
import org.xsx.jyusns.im.chat.entity.ChatRecord;
import org.xsx.jyusns.im.chat.entity.ChatSession;
import org.xsx.jyusns.im.chat.entity.Message;

import java.util.List;

/**
 * Created by clouder on 16-11-6.
 */
@Repository
public class MessageDaoImpl implements MessageDao {

    public static final Logger logger = LoggerFactory.getLogger(MessageDaoImpl.class);

    @Autowired
    private MongoTemplate template;


    public Message findOne(String id) {

        return null;
    }

    public void insert(Message message) {
        //先查询聊天双方之前是否存在会话记录,如果存在,直接往会话里插数据
        ChatRecord chatRecord = template.findOne(
                new Query()
                        .addCriteria(new Criteria("userId1").is(message.getFrom()))
                        .addCriteria(new Criteria("userId2").is(message.getTo()))
                , ChatRecord.class
        );
        ChatSession chatSession = null;
        if (chatRecord == null) {
            //如果不存在,先建立会话
            chatSession = new ChatSession();
            template.insert(chatSession);
            //用户关联会话,为方便查询,进行双方关联
            chatRecord = new ChatRecord();
            chatRecord.setUserId1(message.getFrom());
            chatRecord.setUserId2(message.getTo());
            chatRecord.setChatSession(chatSession);
            template.insert(chatRecord);
            //两个用户交换
            chatRecord.setUserId1(message.getTo());
            chatRecord.setUserId2(message.getFrom());
            template.insert(chatRecord);
        } else {
            chatSession = chatRecord.getChatSession();
        }
        //往chatSession里插入聊天记录
        template.upsert(
                new Query().addCriteria(new Criteria("_id").is(chatSession.getId())),
                new Update().addToSet("chatMessages", message),
                ChatSession.class
        );
    }

    public List<Message> findList() {
        return null;
    }

    public void update(Message message) {

    }

    public void delete(String id) {

    }

    /**
     * TODO 分页还未实现
     * @param userId1
     * @param userId2
     * @return
     */
    public ChatSession getChatSession(String userId1, String userId2) {
        ChatRecord chatRecord = template.findOne(
                new Query().addCriteria(new Criteria("userId1").is(userId1))
                        .addCriteria(new Criteria("userId2").is(userId2)),
                ChatRecord.class
        );
        if (chatRecord == null) {
            return null;
        }
        return chatRecord.getChatSession();
    }

    public void insertAll(List<Message> messages) {
        //消息需要分别插入,不能insertAll
        for (Message message : messages) {
            //要区分是群消息还是好友消息
            //TODO 群消息不应该由用户自己同步吧...
            this.insert(message);
        }
    }

    public ChatSession findGroupChatSession(String id) {
        return template.findById(id, ChatSession.class);
    }
}
