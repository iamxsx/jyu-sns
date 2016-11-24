package org.xsx.jyusns.info.dao.impl;

import com.mongodb.BasicDBObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.BasicQuery;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;
import org.xsx.jyusns.info.dao.InfoDao;
import org.xsx.jyusns.info.entity.Info;
import org.xsx.jyusns.info.entity.Post;
import org.xsx.jyusns.info.entity.Reply;
import org.xsx.jyusns.user.entity.User;

import java.util.Collections;
import java.util.List;

/**
 * Created by clouder on 16-11-9.
 */
@Repository
public class InfoDaoImpl implements InfoDao {

    @Autowired
    MongoTemplate template;


    @Override
    public Info findOne(String id) {
        return template.findById(id, Info.class);
    }

    @Override
    public void insert(Info info) {
        template.insert(info);
    }

    @Override
    public void insertPost(Post post) {
        template.insert(post);
    }

    @Override
    public void insertReply(Reply reply) {
        template.insert(reply);
    }

    @Override
    public List<Info> findList() {
        return null;
    }

    @Override
    public void update(Info info) {

    }

    @Override
    public void delete(String id) {

    }

    @Override
    public void addReply(Reply reply) {
        template.updateFirst(
                new Query().addCriteria(new Criteria("_id").is(reply.getReplyTo())),
                new Update().inc("count", 1),
                Post.class
        );
        template.insert(reply);
        template.upsert(
                new Query().addCriteria(new Criteria("_id").is(reply.getReplyTo())),
                new Update().addToSet("replies", reply),
                Post.class
        );

    }

    @Override
    public List<Post> getPosts(Integer page, Integer limit) {
        int skip = (page - 1) * limit;
        return template.find(
                new Query().skip(skip).limit(limit).with(new Sort(Sort.Direction.DESC, "date")),
                Post.class
        );
    }

    @Override
    public List<Reply> getReplies(String postId, Integer page, Integer limit) {
        int skip = (page - 1) * limit;
        Query query = new BasicQuery(new BasicDBObject("_id", postId), new BasicDBObject("replies", true));
        query.skip(skip).limit(limit).with(new Sort(Sort.Direction.DESC, "date"));
        Post post = template.findOne(
                query,
                Post.class
        );
        return post.getReplies();
    }

    @Override
    public void praise(String postId) {
        template.updateFirst(
                new Query().addCriteria(new Criteria("_id").is(postId)),
                new Update().inc("praise", 1),
                Post.class
        );
    }

    @Override
    public void unPraise(String postId) {
        template.updateFirst(
                new Query().addCriteria(new Criteria("_id").is(postId)),
                new Update().inc("praise", -1),
                Post.class
        );
    }

    @Override
    public List<Post> getRecentPosts(String userId, Integer page, Integer limit) {
        int skip = (page - 1) * limit;
        return template.find(
                new Query().addCriteria(new Criteria("userId").is(userId))
                        .skip(skip).limit(limit)
                        .with(new Sort(Sort.Direction.DESC, "date")),
                Post.class
        );
    }

    /**
     * 获得帖子的发布人
     *
     * @param postId
     * @return
     */
    @Override
    public String getUserIdByPostId(String postId) {
        Query query = new BasicQuery(
                new BasicDBObject("_id", postId),
                new BasicDBObject("userId", true)
        );
        Post post = template.findOne(query, Post.class);
        return post.getUserId();
    }
}
