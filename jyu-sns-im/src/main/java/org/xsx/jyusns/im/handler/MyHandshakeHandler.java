package org.xsx.jyusns.im.handler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeFailureException;
import org.springframework.web.socket.server.HandshakeHandler;

import java.util.Map;

/**
 * 每个连接请求的处理器
 * Created by clouder on 16-10-29.
 */
@Component
public class MyHandshakeHandler implements HandshakeHandler {


    public static final Logger logger = LoggerFactory.getLogger(MyHandshakeHandler.class);


    public boolean doHandshake(ServerHttpRequest serverHttpRequest, ServerHttpResponse serverHttpResponse, WebSocketHandler webSocketHandler, Map<String, Object> map) throws HandshakeFailureException {
        logger.info("---------------------------------------");
        logger.info("doHandshake");
        logger.info("---------------------------------------");
        return false;
    }
}
