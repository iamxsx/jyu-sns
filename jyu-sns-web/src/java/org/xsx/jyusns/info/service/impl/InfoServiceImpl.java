package org.xsx.jyusns.info.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.xsx.jyusns.info.entity.Info;
import org.xsx.jyusns.info.entity.Post;
import org.xsx.jyusns.info.entity.Reply;
import org.xsx.jyusns.info.service.InfoService;
import org.xsx.jyusns.info.dao.InfoDao;
import org.xsx.jyusns.user.entity.User;
import org.xsx.jyusns.utils.DateUtil;

import java.util.Collections;
import java.util.List;

/**
 * Created by clouder on 16-11-9.
 */
@Service
public class InfoServiceImpl implements InfoService {

    @Autowired
    private InfoDao infoDao;


    @Override
    public void insert(Info info) {
        info.setDate(DateUtil.getCurrentDate());
        infoDao.insert(info);
    }

    @Override
    public void insertPost(Post post) {
        post.setDate(DateUtil.getCurrentDate());
        infoDao.insertPost(post);
    }

    @Override
    public void insertReply(Reply reply) {
        reply.setDate(DateUtil.getCurrentDate());
        infoDao.insertReply(reply);
    }

    @Override
    public void addReply(Reply reply) {
        reply.setDate(DateUtil.getCurrentDate());
        infoDao.addReply(reply);
    }

    @Override
    public List<Post> getPosts(Integer page, Integer limit) {
        List<Post> posts = infoDao.getPosts(page, limit);
        for (Post post : posts) {
            post.setDate(DateUtil.toTime(post.getDate()));
        }
        return posts;
    }

    @Override
    public List<Reply> getReplies(String postId, Integer page, Integer limit) {
        List<Reply> replies = infoDao.getReplies(postId, page, limit);
        if (replies != null && replies.size() > 0) {
            //倒序
            Collections.reverse(replies);
            for (Reply reply : replies) {
                reply.setDate(DateUtil.toTime(reply.getDate()));
            }
        }
        return replies;
    }

    @Override
    public void praise(String postId) {
        infoDao.praise(postId);
    }

    @Override
    public void unPraise(String postId) {
        infoDao.unPraise(postId);
    }

    @Override
    public List<Post> getRecentPosts(String userId, Integer page, Integer limit) {
        List<Post> posts = infoDao.getRecentPosts(userId, page, limit);
        for (Post post : posts) {
            post.setDate(DateUtil.toTime(post.getDate()));
        }
        return posts;
    }

    @Override
    public String getUserIdByPostId(String postId) {
        return infoDao.getUserIdByPostId(postId);
    }
}
