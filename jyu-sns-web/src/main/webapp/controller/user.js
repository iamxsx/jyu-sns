$(function () {

    $('#btn-login').click(function () {
        login();
    });

});

function login() {
    var username = $('#username').val();
    var password = $('#password').val();
    if (!username) {
        $('#username').after('<br><span style="color: #f45949;margin: 6px;display: block">账号不能为空</span>')
        return false;
    }
    if (!password) {
        $('#password').after('<br><span style="color: #f45949;margin: 6px;display: block">密码不能为空</span>')
        return false;
    }
    $.ajax({
        url: '/user/login',
        type: 'post',
        contentType: "application/json",
        data: JSON.stringify({
            username: username,
            password: password
        }),
        success: function (result, status) {
            if (status == "success") {
                window.location.href = '/home';
            }
        }
    });
}

function register() {
    var user = {
        username: $('#username').val(),
        password: $('#password').val(),
        email: $('#email').val(),
        phone: $('#phone').val()
    }
    $.ajax({
        url: '/user/register',
        type: 'post',
        contentType: "application/json",
        data: JSON.stringify(user),
        success: function (data) {
            window.location.href = '/login';
        }
    });
}

function logout() {
    $.ajax({
        url: 'user/logout',
        type: 'get',
        success: function (result, status) {
            if (status == 'success') {
                Materialize.toast("注销成功", 1000);
                window.location.href = "/home";
            }
        }
    });
}

/**
 * 更新个人信息
 */
function updateUserInfo() {
    $.ajax({
        url: 'user/update-user-info',
        type: 'post',
        contentType: "application/json",
        data: JSON.stringify({
            id: $('#userId').val(),
            sign: $('#sign').val(),
            account: $('#account').val(),
            description: $('#description').val(),
            username: $('#username').val(),
            sex: $('input[name="sex"]:checked').val(),
            email: $('#email').val(),
            phone: $('#phone').val()
        }),
        success: function (result, status) {
            if (status == 'success') {
                Materialize.toast("修改成功", 1000);
                window.location.href = "/home";
            }
        }
    });
}

/**
 * 更新密码
 * @returns {boolean}
 */
function updatePassword() {
    var newPassword = $('#new-password').val();
    var newRePassword = $('#new-repassword').val();
    if (newPassword != newRePassword) {
        Materialize.toast("两次输入的密码不同", 1000);
        return false;
    }
    $.ajax({
        url: 'user/update-password',
        type: 'post',
        data: {
            oldPassword: $('#old-password').val(),
            newPassword: newPassword
        },
        success: function (result, status) {
            if (status == 'success') {
                Materialize.toast("修改成功", 1000);
                window.location.href = "/home";
            }
        },
        error: function (result, status, error) {
            if (error == 'Not Acceptable') {
                Materialize.toast("原始密码错误", 1000);
            }
        }
    });
}

/**
 * 获取个人中心左侧面板的内容
 */
function getLeftPanelInfo(userId) {
    $.ajax({
        url: '/user/left-info/' + userId,
        type: 'get',
        success: function (result,status) {
            if (status == 'success') {
                var left_panel = template('home-center/left-panel',result);
                $('#home-center-left-panel').html('');
                $('#home-center-left-panel').html($(left_panel));
            }
        }
    });
}


/**
 * 回显个人信息
 */
function getUserInfo() {
    $.ajax({
        url: '/user/get-user-info',
        type: 'get',
        success: function (result, status) {
            if (status == 'success') {
                var html = template('user-info/user-info-basic', result);
                $('#panel1').append($(html));
            }
        }
    });
}

/**
 * 点击头像打开的下拉栏
 */
function toogleMenu() {
    $('#dropdown-menu').slideToggle();
}