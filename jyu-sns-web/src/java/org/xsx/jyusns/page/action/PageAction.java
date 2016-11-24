package org.xsx.jyusns.page.action;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.xsx.jyusns.user.entity.User;

import javax.servlet.http.HttpSession;

/**
 * Created by clouder on 16-11-2.
 */
@Controller
@RequestMapping("/")
public class PageAction {

    @RequestMapping("index")
    public String toIndex(HttpSession session) {
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        if (user!=null){
            session.setAttribute("userId",user.getId());
        }
        return "index";
    }

    @RequestMapping("chat")
    public String toChat(HttpSession session) {
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        if (user!=null){
            session.setAttribute("userId",user.getId());
        }
        return "chat";
    }

    @RequestMapping("home")
    public String toHome(Model model) {
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        model.addAttribute("user", user);
        return "home";
    }

    @RequestMapping("home-center/{userId}")
    public String toHomeCenter(Model model, @PathVariable("userId") String userId) {
        model.addAttribute("userId", userId);
        return "home-center";
    }

    @RequestMapping("login")
    public String toLogin() {
        return "loginPage";
    }

    @RequestMapping("regist")
    public String toRegist() {
        return "registPage";
    }

    @RequestMapping("essay")
    public String toEssay() {
        return "essay";
    }

    @RequestMapping("edit-info")
    public String toEditInfo() {
        return "edit-info";
    }

    @RequestMapping("test")
    public String toTest() {
        return "test";
    }

}
