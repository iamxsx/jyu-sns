<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
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
    <title>查找</title>
    <style>
        .container {
            padding: 24px;
        }

        .container .layui-form {
            margin-right: 200px;
        }
    </style>
</head>
<body>

<div class="container">
    <form class="layui-form" action="">
        <div class="layui-form-item">
            <div class="layui-input-block">
                <input type="text" name="title" required  lay-verify="required" placeholder="请输入用户名/昵称/手机号/群名" autocomplete="off" class="layui-input">
            </div>
        </div>
        <div class="layui-form-item">
            <div class="layui-input-block">
                <button class="layui-btn" lay-submit lay-filter="formDemo">搜索</button>
            </div>
        </div>
    </form>
</div>


</body>
</html>