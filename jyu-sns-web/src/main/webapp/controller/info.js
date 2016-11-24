/**
 * Created by clouder on 16-11-16.
 */

/*
 * 发布帖子
 * */
function publishPost() {
    var content = $('#post-content').val();
    if (content == '') {
        Materialize.toast("发布内容不能为空喔~~~",1000);
        return false;
    }
    var data = JSON.stringify({
        'content': content,
        'userId': $('#current-userId').val(),
        'username': $('#current-username').val(),
        'avatar': $('#current-avatar').val()
    });
    $.ajax({
        url: '/info/publish',
        type: 'post',
        contentType: "application/json",
        data: data,
        success: function (result, status) {
            if (status == "success") {
                Materialize.toast('发布成功', 1000);
                var html = template('common/post', result);
                $('#messages-list').prepend($(html));
                $('#post-content').val('')
            }
        },
        error: function (result, status, error) {
            if (error == 'Unauthorized') {
                Materialize.toast("请先登陆");
                window.location.href = '/login'
            }
        }
    });
}

/**
 * 获取帖子
 */
function getPosts() {
    $.ajax({
        url: '/info/get-posts',
        type: 'get',
        success: function (list, status) {
            if (status == "success") {
                var data = {
                    list: list
                };
                var html = template('common/posts', data);
                $('#panel1').html('');
                $('#panel1').append(html);
                $('.modal-trigger').leanModal();
            }

        }
    });
}

/**
 * 获取帖子
 */
function getRecentPosts(userId) {
    $.ajax({
        url: '/info/recent-posts/' + userId,
        type: 'get',
        success: function (list, status) {
            if (status == "success") {
                var data = {
                    list: list
                };
                var html = template('common/posts', data);
                $('#panel1').html('');
                $('#panel1').append(html);
                $('.modal-trigger').leanModal();
            }

        }
    });

}

/**
 * 获取帖子回复
 * @param postId 帖子id
 * @param replyPostUserId　发帖人id
 */
function getReplies(postId, replyPostUserId) {
    $.ajax({
        url: '/info/get-replies/' + postId,
        type: 'get',
        success: function (result, status) {
            if (status == "success") {
                var isNotEmpty = false;
                if (result != '') {
                    isNotEmpty = true;
                }
                var data = {
                    isNotEmpty: isNotEmpty,
                    replies: result
                }
                var html = template('common/replies', data);
                $('#comments-ul').html('');
                $('#comments-ul').append(html);
                //将postId赋予
                $('#reply-postId').val(postId);
                $('#reply-post-userId').val(replyPostUserId);
                $('#comments-modal').openModal();
            }

        }
    });
}

/**
 * 回复
 */
function reply() {
    var data = JSON.stringify({
        'replyTo': $('#reply-postId').val(),
        'postUserId': $('#reply-post-userId').val(),
        'content': $('#reply-content').val(),
        'userId': $('#current-userId').val(),
        'username': $('#current-username').val(),
        'avatar': $('#current-avatar').val()
    });
    $.ajax({
        url: '/info/reply',
        type: 'post',
        contentType: "application/json",
        data: data,
        success: function (result, status) {
            console.log(status);
            if (status == "success") {
                Materialize.toast('回复成功', 1000);
                var html = template('common/reply', result);
                $('#comments-ul').append($(html));
                $('#reply-content').val('');
            }
        },
        error: function () {

        }
    });
}

/**
 * 点赞
 */
function praise(postId, event) {
    var a = $(event.target);
    var praise = a.attr('praised');
    if (praise == '0' || praise == undefined) {
        //TODO 点赞
        $.ajax({
            url: '/info/praise/' + postId,
            type: 'get',
            success: function (result, status) {
                if (status == "success") {
                    Materialize.toast('<i class="icon-heart"></i>  + 1', 1000);
                    a.css('color', '#f47c60');
                    a.attr('praised', '1');
                    var praise = a.find('.praise');
                    var text = $(praise).text();
                    text++;
                    $(praise).text(text);
                }

            }
        });
    } else if (praise == '1') {
        $.ajax({
            url: '/info/un-praise/' + postId,
            type: 'get',
            success: function (result, status) {
                if (status == "success") {
                    Materialize.toast('<i class="icon-heart"></i>  - 1', 1000);
                    var a = $(event.target);
                    a.css('color', '#555555');
                    a.attr('praised', '0');
                    var praise = a.find('.praise');
                    var text = $(praise).text();
                    text--;
                    $(praise).text(text);
                }
            }
        });
    }

}

/**
 * 获取消息提醒列表
 * @param userId
 */
function getNotices(userId) {
    $.ajax({
        url: '/user/notices/' + userId,
        type: 'get',
        success: function (result, status) {
            var data = {
                list: result
            }
            var html = template('common/notices', data);
            $('#panel2').html('');
            $('#panel2').html($(html));
        }
    });
}


