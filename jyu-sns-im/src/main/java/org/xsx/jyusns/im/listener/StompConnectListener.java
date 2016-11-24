package org.xsx.jyusns.im.listener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.web.socket.messaging.SessionConnectEvent;

public class StompConnectListener implements ApplicationListener<SessionConnectEvent> {

	private static final Logger log = LoggerFactory.getLogger(StompConnectListener.class);


	public void onApplicationEvent(SessionConnectEvent event) {
		log.debug("连接建立");
		String wsSessionId = event.getMessage().getHeaders().get(SimpMessageHeaderAccessor.SESSION_ID_HEADER, String.class);
	}
}