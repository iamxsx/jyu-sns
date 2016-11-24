package org.xsx.jyusns.info.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.xsx.jyusns.info.entity.Info;
import org.xsx.jyusns.info.entity.Post;
import org.xsx.jyusns.info.entity.Reply;
import org.xsx.jyusns.info.service.InfoService;
import org.xsx.jyusns.utils.DateUtil;

/**
 * Created by clouder on 16-11-9.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring/applicationContext.xml"})
public class InfoTest {

    @Autowired
    private InfoService infoService;

    @Test
    public void testInsert() {
        Post info = new Post();
        info.setUserId("5819decf8a848978de339819");
        info.setAvatar("http://www.easyicon.net/api/resizeApi.php?id=1189462&size=96");
        info.setDate(DateUtil.getCurrentDate());
        info.setContent("皇后大道西转皇后大道东，皇后大道东转皇后大道中");
        infoService.insert(info);
    }

    @Test
    public void testAddReply() {
        Reply reply = new Reply();
        reply.setContent("什么意思啊？");
        reply.setDate(DateUtil.getCurrentDate());
        reply.setUserId("581aff938a84891eec9be6e7");
        reply.setAvatar("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3587448715,3279281389&fm=116&gp=0.jpg");
        reply.setReplyTo("58233d2c8a84890cc2282777");
        infoService.addReply(reply);
    }
    @Test
    public void testAtomic() {
        Reply reply = new Reply();
        //reply.setFloorNum();
        reply.setContent("这是回复");

        System.out.println("当前楼层为：" + reply.getFloorNum());
    }


}
