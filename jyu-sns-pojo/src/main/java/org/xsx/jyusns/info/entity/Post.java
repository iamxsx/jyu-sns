package org.xsx.jyusns.info.entity;

import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

/**
 * Created by clouder on 16-11-9.
 * 一个萌萌哒的小帖子
 */
@Document(collection = "Post")
public class Post extends Info{

    /**
     * 回复
     */
    @DBRef
    private List<Reply> replies;
    /**
     * 总回复数，用来生成楼层
     */
    private int count;
    /**
     * 点赞数
     */
    private int praise;

    private boolean isAlreadyPraise;

    public boolean isAlreadyPraise() {
        return isAlreadyPraise;
    }

    public void setAlreadyPraise(boolean alreadyPraise) {
        isAlreadyPraise = alreadyPraise;
    }

    public List<Reply> getReplies() {
        return replies;
    }

    public void setReplies(List<Reply> replies) {
        this.replies = replies;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public int getPraise() {
        return praise;
    }

    public void setPraise(int praise) {
        this.praise = praise;
    }
}
