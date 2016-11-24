package org.xsx.jyusns.info.action;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authz.UnauthenticatedException;
import org.apache.shiro.authz.annotation.RequiresAuthentication;
import org.apache.shiro.util.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.xsx.jyusns.info.entity.Post;
import org.xsx.jyusns.info.entity.Reply;
import org.xsx.jyusns.info.service.InfoService;
import org.xsx.jyusns.redis.service.RedisService;
import org.xsx.jyusns.user.entity.User;

import java.util.List;

import static org.springframework.http.ResponseEntity.ok;
import static org.springframework.http.ResponseEntity.status;

/**
 * Created by clouder on 16-11-11.
 */
@Controller
@RequestMapping("info")
public class InfoAction {

    @Autowired
    private InfoService infoService;
    @Autowired
    private RedisService redisService;

    @RequestMapping(value = "publish", method = RequestMethod.POST)
    public ResponseEntity<Post> publish(@RequestBody Post post) {
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        if (user == null) {
            return status(HttpStatus.UNAUTHORIZED).body(null);
        }
        try {
            infoService.insertPost(post);
            // TODO 发布帖子之后，如果帖子有任何动态，需要推送给发帖子的人
            return ok(post);
        } catch (UnauthenticatedException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }

    @RequestMapping("get-posts")
    public ResponseEntity<List<Post>> getPosts(@RequestParam(defaultValue = "1") Integer page, @RequestParam(defaultValue = "40") Integer limit) {
        try {
            List<Post> posts = infoService.getPosts(page, limit);
            if (!CollectionUtils.isEmpty(posts)) {
                User user = (User) SecurityUtils.getSubject().getPrincipal();
                if (user != null) {
                    //TODO　用户未登陆，则无需检查
                    String userId = user.getId();
                    for (Post post : posts) {
                        //TODO 查询redis，查看当前帖子已被点赞
                        Double score = redisService.isAlreadyPraise(post.getId(), userId);
                        if (score != null) {
                            post.setAlreadyPraise(true);
                        }
                    }
                }

            }
            return ok(posts);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }

    @RequestMapping("get-replies/{postId}")
    public ResponseEntity<List<Reply>> getReplies(@RequestParam(defaultValue = "1") Integer page, @RequestParam(defaultValue = "40") Integer limit, @PathVariable("postId") String postId) {
        try {
            List<Reply> replies = infoService.getReplies(postId, page, limit);
            return ok(replies);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }

    @RequestMapping(value = "reply", method = RequestMethod.POST)
    public ResponseEntity<Reply> reply(@RequestBody Reply reply) {
        try {
            infoService.addReply(reply);
            ok(reply);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }

    @RequestMapping("praise/{postId}")
    public ResponseEntity<Void> praise(@PathVariable("postId") String postId) {
        try {
            infoService.praise(postId);
            //TODO　将点赞的人存入redis
            User user = (User) SecurityUtils.getSubject().getPrincipal();
            if (user != null) {
                //TODO 尚未登陆则属于匿名点赞，数量+1，但不记录
                redisService.praise(postId, user.getId());
            }
            return ok(null);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }

    @RequestMapping("un-praise/{postId}")
    public ResponseEntity<Void> unPraise(@PathVariable("postId") String postId) {
        try {
            infoService.unPraise(postId);
            User user = (User) SecurityUtils.getSubject().getPrincipal();
            if (user != null) {
                //TODO 尚未登陆则属于匿名点赞，数量+1，但不记录
                redisService.unPraise(postId, user.getId());
            }
            return ok(null);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }


    @RequestMapping("recent-posts/{userId}")
    public ResponseEntity<List<Post>> getRecentPosts(@PathVariable("userId") String userId,@RequestParam(defaultValue = "1") Integer page, @RequestParam(defaultValue = "40") Integer limit){
        try {
            List<Post> posts = infoService.getRecentPosts(userId,page,limit);
            return ok(posts);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }


}
