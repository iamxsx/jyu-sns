package org.xsx.jyusns.redis.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.xsx.jyusns.redis.Function;
import org.xsx.jyusns.redis.Subscriber;
import org.xsx.jyusns.redis.service.RedisService;
import org.xsx.jyusns.utils.DateUtil;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.ShardedJedis;
import redis.clients.jedis.ShardedJedisPool;

import javax.annotation.Resource;
import java.util.Set;

/**
 * Created by clouder on 16-11-17.
 */
@Service
public class RedisServiceImpl implements RedisService {

    @Autowired
    private ShardedJedisPool shardedJedisPool;

    @Autowired
    private RedisTemplate<String, String> template;

    public <E> E execute(Function<ShardedJedis, E> function) {
        ShardedJedis jedis = null;
        try {
            jedis = shardedJedisPool.getResource();
            return function.execute(jedis);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (jedis != null) {
                jedis.close();
            }
        }
        return null;
    }

//    public <E> E execute2(Function<Jedis, E> function) {
//        Jedis jedis = null;
//        try {
//            jedis = jedisPool.getResource();
//            return function.execute(jedis);
//        } catch (Exception e) {
//            e.printStackTrace();
//        } finally {
//            if (jedis != null) {
//                jedis.close();
//            }
//        }
//        return null;
//    }

    /**
     * 点赞
     *
     * @param postId
     * @param userId
     */
    @Override
    public void praise(String postId, String userId) {
        this.execute((ShardedJedis jedis) -> {
            String key = "k:" + postId + ":praise";
            return jedis.zadd(key, DateUtil.getCurrentMillis(), userId);
        });
    }

    /**
     * 取消赞
     *
     * @param postId
     * @param userId
     */
    @Override
    public void unPraise(String postId, String userId) {
        this.execute(jedis -> {
            String key = "k:" + postId + ":praise";
            return jedis.zrem(key, userId);
        });
    }

    @Override
    public Double isAlreadyPraise(String postId, String userId) {
        return this.execute(jedis -> {
            String key = "k:" + postId + ":praise";
            return jedis.zscore(key, userId);
        });
    }

    @Override
    public Set<String> getAllPraises(String postId, String userId) {
        return this.execute(jedis -> {
            String key = "k:" + postId + ":praise";
            //获取赞的总数
            long total = jedis.zcard(key);
            return jedis.zrevrange(key, 0, total - 1);
        });
    }

    /**
     * 消息订阅的发送端
     * 发送点赞信息，回复信息等
     * @param channel
     * @param message
     */
    @Override
    public void sendMessage(String channel, String message) {
        template.convertAndSend(channel, message);
    }

    /**
     * 发帖之后订阅跟帖子有关的信息，如点赞，回复
     * @param postId
     * @return
     */
//    public int subscribePost(String postId) {
//        return this.execute2(jedis -> {
//            String channel = "channel:" + postId;
//            jedis.subscribe(subscriber, channel);
//            return 1;
//        });
//    }
//
//    public void unSubscribePost(String postId) {
//        subscriber.unsubscribe();
//    }

}
