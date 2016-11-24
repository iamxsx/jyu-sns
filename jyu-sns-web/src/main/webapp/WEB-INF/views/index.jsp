<%@ page import="org.xsx.jyusns.im.chat.entity.Group" %>
<%@ page import="java.util.List" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<c:set var="userId" value="${sessionScope.get('userId')}"/>
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
    <link rel="stylesheet" href="${ctx}/dist/layui/css/layui.css">
    <link rel="stylesheet" href="${ctx}/dist/css/home/home.css">
    <link rel="stylesheet" href="${ctx}/dist/Font-Awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="${ctx}/dist/materialize/css/materialize.min.css">
    <%--
        js
    --%>
    <script src="http://cdn.bootcss.com/sockjs-client/1.1.1/sockjs.min.js"></script>
    <script src="http://cdn.bootcss.com/stomp.js/2.3.3/stomp.js"></script>
    <script src="${ctx}/dist/js/common/jquery.min.js"></script>
    <title>首页</title>
</head>
<body>


</body>
<%--
    js
--%>
<script src="${ctx}/dist/materialize/js/materialize.min.js"></script>
<script src="${ctx}/dist/layui/layui.js"></script>
<script src="${ctx}/dist/js/im/script.js"></script>
<script src="${ctx}/dist/js/common/date.js"></script>
<script src="${ctx}/build/template.js"></script>
<script src="${ctx}/dist/js/im/webSocket.js"></script>
<script>

    var stompClient = null;

    function connect() {
        var socket = new SockJS('/im/chat');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            console.log('websocket　连接成功');
            /**
             * 根据自身的ID订阅时间,当其他人向该ID的用户发信息时,该用户就会收到
             */
            stompClient.subscribe('/user/' + '${userId}' + '/message', function (message) {
                layim.getMessage(JSON.parse(message.body));
                saveMsg(JSON.parse(message.body));
            });
            /**
             *  订阅各个群
             */
            <c:forEach var="groupId" items="${sessionScope.groups}">
            stompClient.subscribe('/group/' + '${groupId}', function (message) {
                console.log(message);
                var body = JSON.parse(message.body);
                //自己发的信息不提示
                if (body.fromId != '${userId}') {
                    layim.getMessage(body);
                    //                    saveMsg(message);
                }
            });
            </c:forEach>
            /**
             * 订阅消息通知
             */
            stompClient.subscribe('/notice/' + '${userId}', function (message) {
                Materialize.toast("你收到一条回复");
                $('#notice-point').css('display', 'block');
            });

            stompClient.onclose = function () {
                Materialize.toast("连接终端", 8000);
            }

        });

    }


    /**
     * 发送聊天消息
     * @param data
     */
    function sendMessageToUser(data) {
        var message = JSON.stringify({
            from: data.mine.id,
            to: data.to.id,
            content: data.mine.content,
            type: data.to.type,
            fromName: data.mine.username,
//            toName: data.to.username,
            fromAvatar: data.mine.avatar,
//            toAvatar: data.to.avatar
            date: (new Date()).getCurrentDate()
        });
        stompClient.send("/app/send-msg", {}, message);
        saveToLocal(message);
    }

    /**
     * 将消息存储本地
     * @param message
     */
    function saveToLocal(message) {
        //获取存放的本地聊天记录
        var messages = window.localStorage.messages;
        if (messages == undefined) {
            messages = {
                msg: '本地聊天记录',
                data: []
            }
        } else {
            //将已经存在了的字符串转化为对象
            messages = JSON.parse(messages);
        }
        messages.data.push(message);
        //再存回去
        window.localStorage.messages = JSON.stringify(messages);
    }

    /**
     *将收到的消息也存在本地记录里
     * @param message
     */
    function saveMsg(message) {
        var msg = JSON.stringify({
            from: message.fromId,
            to: message.toId,
            content: message.content,
            type: message.type,
            fromName: message.username,
            fromAvatar: message.avatar,
            date: message.timestamp
        });
        saveToLocal(msg);
    }

    $('#btn-show').click(function () {
        var messages = window.localStorage.layim;
        messages = JSON.parse(messages);
        console.log(messages);
    });


    connect();

    var nav = template('nav', null);
    $('#nav').append(nav);

</script>
</html>