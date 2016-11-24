/**
 * Created by clouder on 16-11-24.
 */
var stompClient = null;

/**
 * 连接服务器
 */
function connect() {
    var socket = new SockJS('/im/chat');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('websocket　连接成功');
        onConnected(frame);
    });

}

/**
 * 当连接建立后
 * @param frame
 */
function onConnected(frame) {
    var userId = $('#current-userId').val();
    var groupIds = $('#').val();
    subscribe();

}

/**
 * 订阅消息
 * @param userId 用户 id
 * @param groupIds 用户所加入的群的id
 */
function subscribe(userId, groupIds) {
    /**
     * 根据自身的ID订阅时间,当其他人向该ID的用户发信息时,该用户就会收到
     */
    stompClient.subscribe('/user/' + userId + '/message', function (message) {
        layim.getMessage(JSON.parse(message.body));
        saveMsg(JSON.parse(message.body));
    });
    /**
     *  订阅各个群
     */
    $.each(groupIds, function (i, item) {
        stompClient.subscribe('/group/' + item, function (message) {
            console.log(message);
            var body = JSON.parse(message.body);
            //自己发的信息不提示
            if (body.fromId != userId) {
                layim.getMessage(body);
            }
        });
    });
    /**
     * 订阅消息通知
     */
    stompClient.subscribe('/notice/' + userId, function (message) {
        Materialize.toast("你收到一条回复");
        $('#notice-point').css('display', 'block');
    });

}