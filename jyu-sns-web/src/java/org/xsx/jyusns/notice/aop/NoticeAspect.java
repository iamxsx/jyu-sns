package org.xsx.jyusns.notice.aop;

import com.alibaba.fastjson.JSON;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.xsx.jyusns.im.notice.entity.Notice;
import org.xsx.jyusns.info.entity.Reply;
import org.xsx.jyusns.info.service.InfoService;
import org.xsx.jyusns.redis.service.RedisService;
import org.xsx.jyusns.user.dao.impl.UserDaoImpl;
import org.xsx.jyusns.user.entity.Dynamic;
import org.xsx.jyusns.user.entity.User;
import org.xsx.jyusns.user.service.UserService;
import org.xsx.jyusns.utils.DateUtil;

import java.util.Map;

/**
 * Created by clouder on 16-11-21.
 */
@Component
@Aspect
public class NoticeAspect {

    public static final Logger logger = LoggerFactory.getLogger(NoticeAspect.class);

    @Autowired
    private RabbitTemplate template;
    @Autowired
    private UserService userService;
    @Autowired
    private RedisService redisService;
    @Autowired
    private InfoService infoService;


    /**
     * 　回复通知
     */
    @After("execution(* org.xsx.jyusns.info.service.impl.InfoServiceImpl.addReply(..))")
    public void replyNotice(JoinPoint joinPoint) {
        //TODO 通知IM模块将消息推送到前台
        Reply reply = (Reply) joinPoint.getArgs()[0];
        Notice notice = new Notice();
        //这里应该是提醒发帖人而不是帖子本身
        notice.setTo(reply.getPostUserId());
        notice.setFrom(reply.getUserId());
        notice.setDate(reply.getDate());
        notice.setAction(Notice.Action.REPLY.getMsg());
        notice.setAvatar(reply.getAvatar());
        notice.setUsername(reply.getUsername());
        sendMessage(notice);
    }

    /**
     * 点赞通知
     */
    @After(value = "execution(* org.xsx.jyusns.redis.service.impl.RedisServiceImpl.praise(..))")
    public void praiseNotice(JoinPoint joinPoint) {
        String postId = (String) joinPoint.getArgs()[0];
        String userId = (String) joinPoint.getArgs()[1];
        logger.info("点赞通知");
        //帖子发布人
        String ownerId = infoService.getUserIdByPostId(postId);
        //获取点赞人
        User praiseUser = userService.findOne(userId);
        Notice notice = new Notice();
        notice.setTo(ownerId);
        notice.setUsername(praiseUser.getUsername());
        notice.setFrom(praiseUser.getId());
        notice.setAvatar(praiseUser.getAvatar());
        notice.setAction(Notice.Action.LIKED.getMsg());
        notice.setDate(DateUtil.getCurrentDate());
        sendMessage(notice);
    }

    /**
     * 注册通知
     */
    @Pointcut(value = "execution(* org.xsx.jyusns.user.service.UserService.register(..))")
    public void registerNotice(JoinPoint joinPoint) {
        logger.info("注册通知");
        User user = (User) joinPoint.getArgs()[0];
        Notice notice = new Notice();
        notice.setUsername(user.getUsername());
        notice.setAvatar(notice.getAvatar());
        notice.setDate(DateUtil.getCurrentDate());
        notice.setAction(Notice.Action.JOIN.getMsg());
        notice.setTo(user.getId());
        notice.setFrom(user.getId());
        sendMessage(notice);
    }


    public void sendMessage(Notice notice) {
        template.convertAndSend("notice." + notice.getAction(), JSON.toJSONString(notice));
        userService.insertNotice(notice);
    }


}
