package org.xsx.jyusns.utils;

import org.aspectj.util.FileUtil;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * Created by clouder on 16-11-21.
 */
public class UploadUtil {

    public static void upload(HttpServletRequest request){
        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(request.getSession().getServletContext());
        if (multipartResolver.isMultipart(request)) {
            MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
            Iterator<String> iter = multiRequest.getFileNames();
            if (iter.hasNext()) {
                //取得上传文件
                MultipartFile file = multiRequest.getFile(iter.next());
                System.out.println(file.getName());
                if (file != null) {
                    String filename = file.getOriginalFilename();
                    if (filename.trim() != "") {
                        filename = generateFileName(filename);
                        //FtpUtil.upload(file.getInputStream(), filename, location);
                        //FileUtil.copyFile(file,);
                    }
                }
            }
        }
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
