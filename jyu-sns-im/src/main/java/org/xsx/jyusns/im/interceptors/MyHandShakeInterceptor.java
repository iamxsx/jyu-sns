package org.xsx.jyusns.im.interceptors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.support.HttpSessionHandshakeInterceptor;

import java.util.Map;

/**
 * Socket　每次建立连接都会进行握手
 * Created by clouder on 16-10-29.
 */
public class MyHandShakeInterceptor extends HttpSessionHandshakeInterceptor{

    public static final Logger logger = LoggerFactory.getLogger(MyHandShakeInterceptor.class);


    /**
     * 握手前
     * @param serverHttpRequest
     * @param serverHttpResponse
     * @param webSocketHandler
     * @param map
     * @return
     * @throws Exception
     */
    public boolean beforeHandshake(ServerHttpRequest serverHttpRequest, ServerHttpResponse serverHttpResponse, WebSocketHandler webSocketHandler, Map<String, Object> map) throws Exception {
        logger.debug("---------beforeHandshake-----------");
        return true;
    }

    /**
     * 握手后
     * @param serverHttpRequest
     * @param serverHttpResponse
     * @param webSocketHandler
     * @param e
     */
    public void afterHandshake(ServerHttpRequest serverHttpRequest, ServerHttpResponse serverHttpResponse, WebSocketHandler webSocketHandler, Exception e) {
        logger.debug("---------afterHandshake-----------");
    }




}
