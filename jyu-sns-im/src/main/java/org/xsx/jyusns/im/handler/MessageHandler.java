package org.xsx.jyusns.im.handler;

import com.alibaba.fastjson.JSON;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.xsx.jyusns.im.notice.entity.Notice;

/**
 * Created by clouder on 16-11-22.
 */
public class MessageHandler {

    @Autowired
    private SimpMessagingTemplate template;

    public void handleMessage(String message) {
        Notice notice = JSON.parseObject(message, Notice.class);
        System.out.println(message);
        //todo 给用户推送消息
        // 先判断用户在不在线，不在线，先将消息存储到redis的队列中，
        // 等待用户上线后，再将消息推送
        // 若用户在线，则直接推送

        //todo 怎么判断用户在不在线



        template.convertAndSend("/notice/" + notice.getTo(), message);
    }
}
