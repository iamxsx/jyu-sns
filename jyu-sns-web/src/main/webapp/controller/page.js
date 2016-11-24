/**
 * Created by clouder on 16-11-24.
 */

/*
 * 一些设置项
 * */
function setUp() {
    //设置切换tab
    $('ul.tabs').tabs();

    //设置滑动显示
    var options = [
        {selector: '.messages-list', offset: 500, callback: 'Materialize.showStaggeredList(".messages-list")'}
    ];
    Materialize.scrollFire(options);

    //设置模态框触发
    $('.modal-trigger').leanModal({
            dismissible: true, // 点击模态框外部则关闭模态框
            opacity: .5, // 背景透明度
            in_duration: 300, // 切入时间
            out_duration: 200, // 切出时间
            ready: function () {
                Materialize.toast('按下 ESC 可以关闭模态框喔', 1000);
                console.log($(this));
            }, // 当模态框打开时执行的函数
            complete: function () {
            } // 当模态框关闭时执行的函数
        }
    );
}

/**
 * 初始化页面
 */
function init() {
    var userId = $('#current-userId').val();
    var data = {
        userId: userId
    };
    var nav = template('nav', data);
    $('#nav').append(nav);
    if (userId != '') {
        data = {
            userId: $('#current-userId').val(),
            avatar: $('#current-avatar').val()
        }
        var avatar = template('common/common-user-avatar', data);
        $('#common-avatar').html($(avatar));
    }
    //加载首页数据
    toHome();
}

/*
 * 加载到首页
 * */
function toHome() {
    //清空原有内容
    var container = $('#container');
    container.html('');
    var html = template('home/home', {});
    container.append($(html));
    //获取帖子
    getPosts();
    setUp();
}


/**
 * 加载个人中心
 */
function toHomeCenter() {
    var container = $('#container');
    container.html('');
    var html = template('home-center/home-center', {});
    container.append($(html));

    var userId = $('#current-userId').val();
    getRecentPosts(userId);
    getLeftPanelInfo(userId);
    getNotices(userId);
    setUp();
}

/**
 * 加载个人设置
 */
function toEditInfo() {
    var container = $('#container');
    container.html('');
    var html = template('user-info/user-info', {});
    container.append($(html));
    getUserInfo();
    setUp();
}