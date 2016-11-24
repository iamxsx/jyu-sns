package org.xsx.jyusns.redis.listener.impl;

import org.xsx.jyusns.redis.listener.MessageDelegateListener;

import java.io.Serializable;
import java.util.Map;

/**
 * Created by clouder on 16-11-18.
 */
public class MessageDelegateListenerImpl implements MessageDelegateListener {

    @Override
    public void handleMessage(String message) {

    }

    @Override
    public void handleMessage(Map message) {

    }

    @Override
    public void handleMessage(byte[] message) {

    }

    @Override
    public void handleMessage(Serializable message) {

    }

    @Override
    public void handleMessage(Serializable message, String channel) {

    }
}
