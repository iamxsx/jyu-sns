<%@ page contentType="text/html;charset=UTF-8" language="java" %>
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

    <title>登录页</title>
</head>
<body>
<div class="page-container">
    <h1>登陆</h1>
    <form id="form-login" action="${ctx}/user/login" method="post">
        <input id="username" type="text" name="user.username" class="username" placeholder="账号">

        <input id="password" type="password" name="user.password" class="password" placeholder="密码">
        <button type="button" id="btn-login">登陆</button>
        <div class="error"><span>+</span></div>
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
    $("#form-login").keydown(function(e){
        var e = e || event,
                keycode = e.which || e.keyCode;
        if (keycode==13) {
            $("#btn-login").trigger("click");
        }
    });
</script>


</html>


﻿

