/**
 * Created by clouder on 16-11-2.
 */
var layim;
layui.use('layim', function () {
    layim = layui.layim;
    var autoReplay = [
        '您好，我现在有事不在，一会再和您联系。'
    ];

    //基础配置
    layim.config({
        //获取主面板列表信息
        init: {
            url: '/chat/init-main',
            data: {}
        },
        //查看群员接口
        members: {
            url: '/chat/init-members',
            data: {}
        },
        //上传图片接口
        uploadImage: {
            url: '/chat/upload-image',//（返回的数据格式见下文）
            type: 'post' //默认post
        },
        //上传文件接口
        uploadFile: {
            url: '/chat/upload-file', //（返回的数据格式见下文）
            type: 'post' //默认post
        },
        //增加皮肤选择，如果不想增加，可以剔除该项
        skin: [
            'http://download.pchome.net/wallpaper/pic-4046-4-480x800.jpg',
            'http://imgsrc.baidu.com/forum/w%3D580/sign=4d09e28ad2c8a786be2a4a065709c9c7/6e8c01dfa9ec8a130b311590f403918fa0ecc033.jpg'
        ],

        brief: false, //是否简约模式（默认false，如果只用到在线客服，且不想显示主面板，可以设置 true）
        title: '我的小飞机',  //主面板最小化后显示的名称
        min: false, //用于设定主面板是否在页面打开时，始终最小化展现。默认false，即记录上次展开状态。
        minRight: null,  //【默认不开启】用户控制聊天面板最小化时、及新消息提示层的相对right的px坐标，如：minRight: '200px'
        maxLength: 3000,  //最长发送的字符长度，默认3000
        isfriend: true,  //是否开启好友（默认true，即开启）
        isgroup: true,  //是否开启群组（默认true，即开启）
        right: '0px', //默认0px，用于设定主面板右偏移量。该参数可避免遮盖你页面右下角已经的bar。
        chatLog: '/chat/chat-record/', //聊天记录地址（如果未填则不显示）
        find: '/chat/find',  //查找好友/群的地址（如果未填则不显示）
        copyright: false, //是否授权，如果通过官网捐赠获得LayIM，此处可填true,
        settings:'/chat/settings'
    });
    //监听发送消息
    layim.on('sendMessage', function (data) {
        var To = data.to;
        console.log(data);
        sendMessageToUser(data);
    });
    //监听在线状态的切换事件
    layim.on('online', function (data) {
        console.log(data);
    });
    //监听查看群员
    layim.on('members', function (data) {
        console.log(data);
    });

    //监听聊天窗口的切换
    layim.on('chatChange', function (data) {
        console.log(data);
    });


    //面板外的操作
    var $ = layui.jquery, active = {
        chat: function () {
            //创造一个临时会话
            layim.chat({
                name: '小闲'
                , type: 'friend'
                , avatar: 'http://tva3.sinaimg.cn/crop.0.0.180.180.180/7f5f6861jw1e8qgp5bmzyj2050050aa8.jpg'
                , id: 1008612
            });
            layer.msg('也就是说，此人可以不在好友面板里');
        }
        , message: function () {
            //制造一个好友发过来的消息
            layim.getMessage({
                username: "贤心"
                , avatar: "http://tp1.sinaimg.cn/1571889140/180/40030060651/1"
                , id: "100001"
                , type: "friend"
                , content: "嗨，你好！欢迎体验LayIM。演示标记：" + new Date().getTime()
                , timestamp: new Date().getTime()
            });
        }
        , messageTemp: function () {
            //制造一个临时会话消息
            layim.getMessage({
                username: "小酱"
                , avatar: "http://tva1.sinaimg.cn/crop.7.0.736.736.50/bd986d61jw8f5x8bqtp00j20ku0kgabx.jpg"
                , id: "198909151014"
                , type: "friend"
                , content: "临时：" + new Date().getTime()
            });
        }
        , addFriend: function () {
            layer.msg('已成功把[冲田杏梨]添加到好友【网红】组里', {
                icon: 1
            });
            //增加一个好友
            layim.addList({
                type: 'friend'
                , avatar: "http://tp2.sinaimg.cn/2386568184/180/40050524279/0"
                , username: '冲田杏梨'
                , groupid: 2
                , id: "1233333312121212"
                , remark: "本人冲田杏梨将结束AV女优的工作"
            });
        }
        , addGroup: function () {
            layer.msg('已成功把[Angular开发]添加到群组里', {
                icon: 1
            });
            //增加一个群组
            layim.addList({
                type: 'group'
                , avatar: "http://tva3.sinaimg.cn/crop.64.106.361.361.50/7181dbb3jw8evfbtem8edj20ci0dpq3a.jpg"
                , groupname: 'Angular开发'
                , id: "12333333"
                , members: 0
            });
        }
        , removeFriend: function () {
            layer.msg('已成功删除[凤姐]', {
                icon: 1
            });
            //删除一个好友
            layim.removeList({
                id: 121286
                , type: 'friend'
            });
        }
        , removeGroup: function () {
            layer.msg('已成功删除[前端群]', {
                icon: 1
            });
            //删除一个群组
            layim.removeList({
                id: 101
                , type: 'group'
            });
        }
    };
    $('.site-demo-layim').on('click', function () {
        var type = $(this).data('type');
        active[type] ? active[type].call(this) : '';
    });

    var cache = layim.cache();
    console.log(cache);
});