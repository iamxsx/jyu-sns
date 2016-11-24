package org.xsx.jyusns.redis;

/**
 * Created by clouder on 16-11-17.
 */
public interface Function<T,E> {

    public E execute(T t);
}
