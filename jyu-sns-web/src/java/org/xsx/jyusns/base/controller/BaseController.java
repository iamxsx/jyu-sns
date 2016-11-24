package org.xsx.jyusns.base.controller;

import org.apache.shiro.SecurityUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.xsx.jyusns.user.entity.User;
import org.xsx.jyusns.utils.DateUtil;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.util.Iterator;

/**
 * Created by clouder on 16-11-4.
 */
public class BaseController {


    /**
     * 上传文件/图片
     *
     * @param request
     * @param type 文件或图片
     * @return 文件的存储路径
     * @throws Exception
     */
    public String uploadFile(HttpServletRequest request, String type) throws Exception {
        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(request.getSession().getServletContext());
        if (multipartResolver.isMultipart(request)) {
            MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
            Iterator<String> iterator = multiRequest.getFileNames();
            if (iterator.hasNext()) {
                //取得上传文件
                MultipartFile file = multiRequest.getFile(iterator.next());
                System.out.println(file.getName());
                if (file != null) {
                    String filename = file.getOriginalFilename();
                    if (filename.trim() != "") {
                        filename = generateFileName(filename);
                        String path = request.getSession().getServletContext().getRealPath("/static");
                        User user = (User) SecurityUtils.getSubject().getPrincipal();
                        String id = user.getId();
                        File destFile = new File(path + "/" + id + "/" + type + "/" + filename);
                        if (!destFile.exists()) {
                            destFile.mkdirs();
                        }
                        file.transferTo(destFile);
                        return "/static/" + id +  "/" + type + "/" + filename;
                    }
                }
            }
        }
        return null;
    }

    /**
     * 生成上传文件的文件名
     *
     * @param fileName
     * @return
     */
    public static String generateFileName(String fileName) {
        return DateUtil.getCurrentDateDesc() + fileName.substring(fileName.lastIndexOf("."));
    }
}
