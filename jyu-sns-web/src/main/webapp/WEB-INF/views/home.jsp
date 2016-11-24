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
    <%--
        css
    --%>
    <link rel="stylesheet" href="${ctx}/dist/Font-Awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="${ctx}/dist/materialize/css/materialize.min.css">
    <link rel="stylesheet" href="${ctx}/dist/css/home/home.css">
    <link rel="stylesheet" href="${ctx}/dist/css/common/scroll.css">
    <title>首页</title>

</head>

<body style="height: 900px">
<%--发布用户的 id --%>
<input type="hidden" id="current-userId" value="${user.id}">
<%--发布用户的名称--%>
<input type="hidden" id="current-username" value="${user.username}">
<%--发布用户的头像--%>
<input type="hidden" id="current-avatar" value="${user.avatar}">

<!--侧边导航栏-->
<div id="nav"></div>

<%--内容--%>
<div id="container"></div>

<%--放置头像菜单--%>
<div id="common-avatar"></div>

<%--
    js
--%>
<script src="${ctx}/dist/js/common/jquery.min.js"></script>
<script src="${ctx}/dist/materialize/js/materialize.min.js"></script>
<script src="${ctx}/build/template.js"></script>
<script src="${ctx}/controller/info.js"></script>
<script src="${ctx}/controller/user.js"></script>
<script src="${ctx}/controller/page.js"></script>
<script>
    $(function () {

        init();
    });


</script>
<script src="${ctx}/dist/materialize/js/materialize.min.js"></script>
</body>

</html>