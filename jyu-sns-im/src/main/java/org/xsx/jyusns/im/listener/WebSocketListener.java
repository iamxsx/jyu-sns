package org.xsx.jyusns.im.listener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.messaging.simp.broker.BrokerAvailabilityEvent;
import org.xsx.jyusns.im.handler.MyHandshakeHandler;

/**
 * Created by clouder on 16-11-23.
 */
public class WebSocketListener implements ApplicationListener<BrokerAvailabilityEvent>{

    public static final Logger logger = LoggerFactory.getLogger(WebSocketListener.class);

    public void onApplicationEvent(BrokerAvailabilityEvent brokerAvailabilityEvent) {
        logger.info("---------------------------------------");
        logger.info("onApplicationEvent");
        logger.info("---------------------------------------");
        logger.info(brokerAvailabilityEvent.isBrokerAvailable() + "");
    }
}
