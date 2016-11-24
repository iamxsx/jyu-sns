package org.xsx.jyusns.im.listener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

public class StompDisconnectListener implements ApplicationListener<SessionDisconnectEvent> {

	private static final Logger log = LoggerFactory.getLogger(StompDisconnectListener.class);


	public void onApplicationEvent(SessionDisconnectEvent event) {
		log.debug("连接断开"+event);
		String wsSessionId = event.getSessionId();
	}

}