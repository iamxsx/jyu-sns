<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="${ctx}/dist/Font-Awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="${ctx}/dist/css/home/home.css">
    <link rel="stylesheet" href="${ctx}/dist/layui/css/layui.css">
    <link rel="stylesheet" href="${ctx}/dist/materialize/css/materialize.min.css">
    <title>随笔</title>
</head>
<body>
<!--侧边导航栏-->
<div class="nav-bar">
    <a href="">
        <b>Share</b>
    </a>
    <a href="" class="tooltipped" data-position="right" data-delay="50" data-tooltip="随笔">
        <b><i class="icon-pencil icon-large"></i></b>
    </a>
    <a href="" class="tooltipped" data-position="right" data-delay="50" data-tooltip="圈络">
        <b><i class="icon-globe icon-large"></i></b>
    </a>
    <a href="" class="tooltipped" data-position="right" data-delay="50" data-tooltip="IM">
        <b><i class="icon-comments icon-large"></i></b>
    </a>
    <a href="" class="tooltipped" data-position="right" data-delay="50" data-tooltip="发现">
        <b><i class="icon-lightbulb icon-large"></i></b>
        <i class="notice-point"></i>
    </a>
</div>
<!--左边图片面板-->
<div class="left-aside span3">
    <div class="cover-img"></div>

</div>

<div class="editor">
    <div class="row">
        <div class="col s12">
            <textarea id="editor" style="display: none;"></textarea>
            <button class="btn btn-primary" style="margin-top: 20px;">保存</button>
        </div>
    </div>
</div>


</body>
<script src="${ctx}/dist/js/common/jquery.min.js"></script>
<script src="${ctx}/dist/materialize/js/materialize.min.js"></script>
<script src="${ctx}/dist/layui/layui.js"></script>
<script>
    layui.use('layedit', function(){
        var layedit = layui.layedit;
        layedit.build('editor',{
            height:500
        }); //建立编辑器
    });
    Materialize.toast("<i class='icon-fighter-jet'></i>&nbsp;&nbsp;&nbsp;有新消息到达哦～～～",2000);
</script>
</html>