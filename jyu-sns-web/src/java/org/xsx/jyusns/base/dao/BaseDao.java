package org.xsx.jyusns.base.dao;

import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.util.List;

/**
 * Created by clouder on 16-11-2.
 */
public interface BaseDao<T> {

    public T findOne(String id);

    public void insert(T t);

    public List<T> findList();

    public void update(T t);

    public void delete(String id);


}
