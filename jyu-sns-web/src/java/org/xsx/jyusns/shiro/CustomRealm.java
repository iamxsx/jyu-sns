package org.xsx.jyusns.shiro;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.realm.Realm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.xsx.jyusns.user.dao.impl.UserDaoImpl;
import org.xsx.jyusns.user.entity.User;
import org.xsx.jyusns.user.service.UserService;

import java.util.LinkedList;
import java.util.List;

/**
 * 自定义授权域
 * Created by clouder on 16-11-15.
 */
public class CustomRealm extends AuthorizingRealm {

    public static final Logger logger = LoggerFactory.getLogger(UserDaoImpl.class);

    @Autowired
    private UserService userService;

    @Override
    public void setName(String name) {
        super.setName("CustomRealm");
    }

    /**
     * 授权
     *
     * @param principalCollection
     * @return
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        logger.info("doGetAuthorizationInfo");
        return new SimpleAuthorizationInfo();
    }

    /**
     * 验证
     *
     * @param authenticationToken
     * @return
     * @throws AuthenticationException
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        logger.info("doGetAuthenticationInfo");
        //获取用户名
        String username = (String) authenticationToken.getPrincipal();
        //查询是否存在该用户
        User user = userService.findByUsername(username);
        if (user == null) {
            return null;
        }
        String password = user.getPassword();
        String salt = user.getSalt();

        //验证密码
        SimpleAuthenticationInfo info = new SimpleAuthenticationInfo(
                user,
                password,
                ByteSource.Util.bytes(salt),
                this.getName()
        );
        return info;
    }
}
