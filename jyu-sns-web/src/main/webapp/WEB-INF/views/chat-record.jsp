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
    <script src="${ctx}/dist/js/common/jquery.min.js"></script>

    <%--<link rel="stylesheet" href="${ctx}/dist/css/common/bootstrap.min.css">--%>
    <%--<link rel="stylesheet" href="${ctx}/dist/css/common/ladda-themeless.min.css">--%>
    <%--<script src="${ctx}/dist/js/common/spin.min.js"></script>--%>
    <%--<script src="${ctx}/dist/css/common/ladda-themeless.min.css"></script>--%>

    <title>聊天记录</title>

    <style>
        .container {
            padding: 24px;
            color: #616161;
        }

        .comment {
            position: relative;
            background: 0 0;
            margin: .5em 0 0;
            padding: .5em 0 0;
            border: none;
            border-top: none;
            line-height: 1.2;
            font-size: 1em;
        }

        .comment .avatar {
            display: block;
            width: 2.5em;
            height: auto;
            float: left;
            margin: .2em 0 0;
        }

        .comment .avatar img {
            display: block;
            margin: 0 auto;
            width: 80%;
            height: 80%;
            border-radius: .25rem;
        }

        .comment > .avatar ~ .content {
            margin-left: 3.5em;
        }

        .comment a.author {
            cursor: pointer;
        }

        .comment .metadata {
            display: inline-block;
            margin-left: .5em;
            color: rgba(0, 0, 0, .4);
            font-size: .875em;
        }

        .comment .text {
            margin: .25em 0 .5em;
            font-size: 1em;
            word-wrap: break-word;
            color: rgba(0, 0, 0, .87);
            line-height: 1.3;
        }

    </style>

</head>
<body>

<div class="container">
    <button id="btn-sync" class="layui-btn">将消息同步到云端</button>
</div>


<div class="container">
    <c:forEach var="chatMessage" items="${chatMessages}">
        <div class="comment">
            <a class="avatar">
                <img src="${chatMessage.fromAvatar}">
            </a>
            <div class="content">
                <a class="author">${chatMessage.fromName}</a>
                <div class="metadata">
                    <span class="date">${chatMessage.date}</span>
                </div>
                <div class="text">${chatMessage.content}</div>
            </div>
        </div>
        <div style="clear:both"></div>
    </c:forEach>
</div>
</body>
<script src="${ctx}/dist/layui/layui.js"></script>
<script>
    var layer;
    layui.use('layer', function(){
        layer = layui.layer;
    });

    function syncChatMessage() {
        $('#btn-sync').click(function () {
            var messages = window.localStorage.messages;
            if (messages == undefined) {
                layer.msg('当前没有需要同步的数据');
                return false;
            }
            messages = JSON.parse(messages);
            $.ajax({
                url: '/im/sync-chat-record',
                type: 'post',
//                dataType: 'json',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(messages.data),
                success: function (result, status) {
                    console.log("result = "+result);
                    console.log("status = "+status);
                    if (status == 'success') {
                        layer.msg('同步成功');
                        //清除本地缓存
                        localStorage.removeItem("messages");
                    }
                },
                error: function () {
                    layer.msg('同步失败');
                }
            });
        });
    }

    $(function () {
        syncChatMessage();
    });
</script>
</html>
