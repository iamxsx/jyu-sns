<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/><!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="${ctx}/dist/Font-Awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="${ctx}/dist/materialize/css/materialize.min.css">
    <link rel="stylesheet" href="${ctx}/dist/css/home/home.css">
    <title>个人中心</title>

</head>
<body style="height: 900px">
<%--当前个人中心所属用户的 id --%>
<input type="hidden" id="userId" value="${userId}">

<!--侧边导航栏-->
<div id="nav"></div>
<%--左侧面板--%>
<div class="user-center-left" id="user-center-left"></div>
<%--上传背景图--%>
<form id="form-upload" action="/user/upload-home-bg" enctype="multipart/form-data">
    <input type="file" name="url" id="home-bg" onchange="fileUpload()" style="display: none;">
</form>



<!--回复详情模态框-->
<div id="comments-modal" class="modal bottom-sheet">
    <div class="modal-content">
        <a id="a-close" href="#!" class="modal-action modal-close waves-effect waves-green pull-right">
            <i class="icon-remove icon-large"></i>
        </a>&nbsp;&nbsp;&nbsp;
        <a id="a-reply" href="#!" onclick="reply()"
           class="modal-action modal-close waves-effect waves-green pull-right">
            <i class="icon-ok icon-large" style="color: #f47c60;"></i>
        </a>
        <input type="hidden" id="reply-postId">
        <div class="row">
            <div class="input-field col s12">
                <textarea id="reply-content" class="materialize-textarea"></textarea>
                <label for="reply-content">回复...</label>
            </div>
        </div>
        <ul id="comments-ul" class="collection"></ul>
    </div>
</div>
</body>
<script src="${ctx}/dist/js/common/jquery.min.js"></script>
<script src="${ctx}/dist/js/common/jquery.form.min.js"></script>
<script src="${ctx}/build/template.js"></script>
<script src="${ctx}/controller/info.js"></script>
<script src="${ctx}/controller/user.js"></script>
<script src="${ctx}/dist/materialize/js/materialize.min.js"></script>
<script>
    $(function () {
        $('ul.tabs').tabs('select_tab', 'tab_id');

        var options = [
            {selector: '.messages-list', offset: 500, callback: 'Materialize.showStaggeredList(".messages-list")'}
        ];
        Materialize.scrollFire(options);
        $('.modal-trigger').leanModal();

        var nav = template('nav', null);
        $('#nav').append(nav);





    });

    function fileUpload() {
        $('#form-upload').ajaxSubmit({
            type: 'post',
            success: function (data, status) {
                console.log(data);
                console.log(status);
                if (status == 'success') {
                    Materialize.toast("设置封面图片成功", 1000);
                    $('#cover-img').css('background-image', data);
                }

            }
        });
    }


</script>
<script src="${ctx}/dist/materialize/js/materialize.min.js"></script>
</html>