package org.xsx.jyusns.user.controller;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.xsx.jyusns.base.controller.BaseController;
import org.xsx.jyusns.exception.CustomException;
import org.xsx.jyusns.im.notice.entity.Notice;
import org.xsx.jyusns.user.entity.Dynamic;
import org.xsx.jyusns.user.entity.User;
import org.xsx.jyusns.user.service.UserService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

import static org.springframework.http.ResponseEntity.ok;
import static org.springframework.http.ResponseEntity.status;

/**
 * Created by clouder on 16-11-2.
 */
@Controller
@RequestMapping("user")
public class UserAction extends BaseController{

    @Autowired
    UserService userService;

    @RequestMapping(value = "login", method = RequestMethod.POST)
    public ResponseEntity<Void> login(@RequestBody User user, HttpSession session) {
        try {
            UsernamePasswordToken token = new UsernamePasswordToken(user.getUsername(), user.getPassword());
            Subject subject = SecurityUtils.getSubject();
            subject.login(token);
            //TODO 之后可能存在　redis 里面

            return ok().body(null);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);

    }

    @RequestMapping(value = "register", method = RequestMethod.POST)
    public ResponseEntity<Void> register(@RequestBody User user) {
        try {
            userService.register(user);
            return status(HttpStatus.CREATED).build();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status((HttpStatus.INTERNAL_SERVER_ERROR)).body(null);
    }

    @RequestMapping("get-user-info")
    public ResponseEntity<User> getUserInfo() {
        try {
            User user = (User) SecurityUtils.getSubject().getPrincipal();
            if (user != null) {
                user = userService.findOne(user.getId());
                return ok(user);
            } else {
                return status(HttpStatus.NOT_FOUND).body(null);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status((HttpStatus.INTERNAL_SERVER_ERROR)).body(null);
    }

    @RequestMapping("logout")
    public ResponseEntity<Void> logout() {
        try {
            SecurityUtils.getSecurityManager().logout(SecurityUtils.getSubject());
            return ok(null);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status((HttpStatus.INTERNAL_SERVER_ERROR)).body(null);
    }

    @RequestMapping(value = "update-user-info", method = RequestMethod.POST)
    public ResponseEntity<Void> updateUserINfo(@RequestBody User user) {
        try {
            userService.update(user);
            return ok(null);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status((HttpStatus.INTERNAL_SERVER_ERROR)).body(null);
    }


    @RequestMapping(value = "update-avatar", method = RequestMethod.POST)
    public ResponseEntity<Void> updateAvatar(String avatar) {
        try {
            User user = (User) SecurityUtils.getSubject().getPrincipal();
            userService.updateAvatar(user.getId(), avatar);
            return ok(null);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status((HttpStatus.INTERNAL_SERVER_ERROR)).body(null);
    }

    @RequestMapping(value = "update-password", method = RequestMethod.POST)
    public ResponseEntity<Void> updatePassword(String oldPassword, String newPassword) {
        try {
            userService.updatePassword(oldPassword, newPassword);
            return ok(null);
        } catch (CustomException e) {
            return status(HttpStatus.NOT_ACCEPTABLE).body(null);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status((HttpStatus.INTERNAL_SERVER_ERROR)).body(null);
    }


    @RequestMapping(value = "upload-home-bg", method = RequestMethod.POST)
    public ResponseEntity<String> uploadInfo(HttpServletRequest request) {
        try {
            String filePath = uploadFile(request,"img");
            userService.updateBgImg(filePath);
            return ok(filePath);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status((HttpStatus.INTERNAL_SERVER_ERROR)).body(null);
    }

    @RequestMapping("left-info/{userId}")
    public ResponseEntity<User> getLeftPanelInfo(@PathVariable("userId") String userId){
        try {
            User user = userService.getLeftPanelInfo(userId);
            return ok(user);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status((HttpStatus.INTERNAL_SERVER_ERROR)).body(null);
    }

    @RequestMapping("dynamic/{userId}")
    public ResponseEntity<List<Dynamic>> getDynamics(@PathVariable("userId") String userId, @RequestParam(defaultValue = "1") Integer page, @RequestParam(defaultValue = "40") Integer limit){
        try {
            List<Dynamic> dynamics = userService.getDynamics(userId,page,limit);
            return ok(dynamics);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status((HttpStatus.INTERNAL_SERVER_ERROR)).body(null);
    }

    @RequestMapping("notices/{userId}")
    public ResponseEntity<List<Notice>> getNotices(@PathVariable("userId") String userId, @RequestParam(defaultValue = "1") Integer page, @RequestParam(defaultValue = "40") Integer limit){
        try {
            List<Notice> notices = userService.getNotices(userId,page,limit);
            return ok(notices);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status((HttpStatus.INTERNAL_SERVER_ERROR)).body(null);
    }

}
