package org.xsx.jyusns.info.service;

import org.xsx.jyusns.info.entity.Info;
import org.xsx.jyusns.info.entity.Post;
import org.xsx.jyusns.info.entity.Reply;
import org.xsx.jyusns.user.entity.User;

import java.util.List;

/**
 * Created by clouder on 16-11-9.
 */
public interface InfoService {
    void insert(Info info);

    void insertPost(Post post);

    void insertReply(Reply reply);

    void addReply(Reply reply);

    List<Post> getPosts(Integer page, Integer limit);

    List<Reply> getReplies(String postId, Integer page, Integer limit);

    void praise(String postId);

    void unPraise(String postId);

    List<Post> getRecentPosts(String userId, Integer page, Integer limit);

    String getUserIdByPostId(String postId);
}
