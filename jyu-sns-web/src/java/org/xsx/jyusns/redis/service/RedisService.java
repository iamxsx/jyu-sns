package org.xsx.jyusns.redis.service;

import java.util.Set;

/**
 * Created by clouder on 16-11-17.
 */
public interface RedisService {

    void praise(String postId, String userId);

    void unPraise(String postId, String userId);

    Double isAlreadyPraise(String postId, String userId);

    Set<String> getAllPraises(String postId, String userId);

    void sendMessage(String channel, String message);

}
