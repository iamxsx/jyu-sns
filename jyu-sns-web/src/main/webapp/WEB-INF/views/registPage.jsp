<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!doctype html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- CSS -->
    <link rel="stylesheet" href="${ctx}/dist/css/login/reset.css">
    <link rel="stylesheet" href="${ctx}/dist/css/login/supersized.css">
    <link rel="stylesheet" href="${ctx}/dist/css/login/style.css">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <title>注册页</title>
</head>
<body>
<div class="page-container">
    <h1>注册</h1>
    <form id="from-register" action="${ctx}/user/register" method="post">
        <input type="text" id="username" class="username" placeholder="用户名">
        <input type="password" id="password" class="password" placeholder="密码">
        <input type="password" id="repassword" class="password" placeholder="重复密码">
        <input type="text" id="phone" placeholder="手机号">
        <input type="email" id="email" placeholder="邮箱">
        <button id="btn-regist" type="button">注册</button>
    </form>
    <div class="connect">
        <p>其他登陆方式:</p>
        <p>
            <a class="facebook" href=""></a>
            <a class="twitter" href=""></a>
        </p>
    </div>
</div>
</body>

<!-- Javascript -->
<script src="${ctx}/dist/js/common/jquery.min.js"></script>
<script src="${ctx}/dist/js/user/supersized.3.2.7.min.js"></script>
<script src="${ctx}/dist/js/user/supersized-init.js"></script>
<script src="${ctx}/controller/user.js"></script>
<script>
    $('#btn-regist').click(function () {
        register();
    });
</script>
</html>


﻿

