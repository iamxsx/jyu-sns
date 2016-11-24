<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="${ctx}/dist/layui/css/layui.css">
    <script src="${ctx}/dist/layui/layui.js"></script>
    <title>设置</title>
</head>
<body>
<div class="layui-tab layui-tab-brief" lay-filter="demo">
    <ul class="layui-tab-title">
        <li class="layui-this">个人设置</li>
        <li>分组管理</li>
        <li>群管理</li>
    </ul>
    <div class="layui-tab-content">
        <div class="layui-tab-item layui-show">
            个人设置
        </div>
        <div class="layui-tab-item">


        </div>
        <div class="layui-tab-item">内容3</div>
    </div>
</div>


</body>
<script>
    layui.use('element', function(){
        var element = layui.element();

        //一些事件监听
        element.on('tab(demo)', function(data){
            console.log(data);
        });
    });
</script>
</html>