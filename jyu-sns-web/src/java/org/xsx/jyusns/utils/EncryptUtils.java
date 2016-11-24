package org.xsx.jyusns.utils;


import org.apache.shiro.crypto.RandomNumberGenerator;
import org.apache.shiro.crypto.SecureRandomNumberGenerator;
import org.apache.shiro.crypto.hash.SimpleHash;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by PhychoLee on 9/13/16 3:07 PM.
 * Description:
 */
public class EncryptUtils {

    private static RandomNumberGenerator randomNumberGenerator =  new SecureRandomNumberGenerator();

    //循环61次
    private static Integer hashIterations = 2;

    /**
     * MD5加盐加密
     * 返回盐和加密后密码，注册时使用
     * @param password
     * @return
     */
    public static Map<String, String> encrypt(String password){
        //随机生成盐
        String salt = randomNumberGenerator.nextBytes().toHex();

        SimpleHash simpleHash = new SimpleHash("md5",password, salt, hashIterations);
        String encryptPassword = simpleHash.toHex();


        //随机生成的盐和加密后的密码返回
        Map<String, String> map = new HashMap<>();
        map.put("salt", salt);
        map.put("password", encryptPassword);
        return map;
    }

    /**
     * MD5加盐加密
     * 需要传入盐，用于登陆验证
     * @param salt
     * @param password
     * @return
     */
    public static String encrypt(String salt, String password){
        SimpleHash simpleHash = new SimpleHash("md5",password, salt, hashIterations);
        String encryptPassword = simpleHash.toHex();

        return encryptPassword;
    }
}
