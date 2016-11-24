package org.xsx.jyusns.redis.listener;


import java.io.Serializable;
import java.util.Map;

/**
 * Created by clouder on 16-11-18.
 */
public interface MessageDelegateListener {

    void handleMessage(String message);

    void handleMessage(Map message);

    void handleMessage(byte[] message);

    void handleMessage(Serializable message);

    void handleMessage(Serializable message, String channel);
}
