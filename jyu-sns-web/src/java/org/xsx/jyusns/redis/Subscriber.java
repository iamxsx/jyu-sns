package org.xsx.jyusns.redis;

import redis.clients.jedis.JedisPubSub;

/**
 * Created by clouder on 16-11-17.
 */
public class Subscriber extends JedisPubSub{


    @Override
    public void onMessage(String channel, String message) {
        super.onMessage(channel, message);
    }

    @Override
    public void onSubscribe(String channel, int subscribedChannels) {
        super.onSubscribe(channel, subscribedChannels);
    }

    @Override
    public void onUnsubscribe(String channel, int subscribedChannels) {
        super.onUnsubscribe(channel, subscribedChannels);
    }
}
