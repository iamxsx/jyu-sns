/*TMODJS:{"debug":true,"version":"1.0.0"}*/
!function() {
    function template(filename, content) {
        return (/string|function/.test(typeof content) ? compile : renderFile)(filename, content);
    }
    function toString(value, type) {
        return "string" != typeof value && (type = typeof value, "number" === type ? value += "" : value = "function" === type ? toString(value.call(value)) : ""), 
        value;
    }
    function escapeFn(s) {
        return escapeMap[s];
    }
    function escapeHTML(content) {
        return toString(content).replace(/&(?![\w#]+;)|[<>"']/g, escapeFn);
    }
    function each(data, callback) {
        if (isArray(data)) for (var i = 0, len = data.length; len > i; i++) callback.call(data, data[i], i, data); else for (i in data) callback.call(data, data[i], i);
    }
    function resolve(from, to) {
        var DOUBLE_DOT_RE = /(\/)[^\/]+\1\.\.\1/, dirname = ("./" + from).replace(/[^\/]+$/, ""), filename = dirname + to;
        for (filename = filename.replace(/\/\.\//g, "/"); filename.match(DOUBLE_DOT_RE); ) filename = filename.replace(DOUBLE_DOT_RE, "/");
        return filename;
    }
    function renderFile(filename, data) {
        var fn = template.get(filename) || showDebugInfo({
            filename: filename,
            name: "Render Error",
            message: "Template not found"
        });
        return data ? fn(data) : fn;
    }
    function compile(filename, fn) {
        if ("string" == typeof fn) {
            var string = fn;
            fn = function() {
                return new String(string);
            };
        }
        var render = cache[filename] = function(data) {
            try {
                return new fn(data, filename) + "";
            } catch (e) {
                return showDebugInfo(e)();
            }
        };
        return render.prototype = fn.prototype = utils, render.toString = function() {
            return fn + "";
        }, render;
    }
    function showDebugInfo(e) {
        var type = "{Template Error}", message = e.stack || "";
        if (message) message = message.split("\n").slice(0, 2).join("\n"); else for (var name in e) message += "<" + name + ">\n" + e[name] + "\n\n";
        return function() {
            return "object" == typeof console && console.error(type + "\n\n" + message), type;
        };
    }
    var cache = template.cache = {}, String = this.String, escapeMap = {
        "<": "&#60;",
        ">": "&#62;",
        '"': "&#34;",
        "'": "&#39;",
        "&": "&#38;"
    }, isArray = Array.isArray || function(obj) {
        return "[object Array]" === {}.toString.call(obj);
    }, utils = template.utils = {
        $helpers: {},
        $include: function(filename, data, from) {
            return filename = resolve(from, filename), renderFile(filename, data);
        },
        $string: toString,
        $escape: escapeHTML,
        $each: each
    }, helpers = template.helpers = utils.$helpers;
    template.get = function(filename) {
        return cache[filename.replace(/^\.\//, "")];
    }, template.helper = function(name, helper) {
        helpers[name] = helper;
    }, "function" == typeof define ? define(function() {
        return template;
    }) : "undefined" != typeof exports ? module.exports = template : this.template = template, 
    /*v:38*/
    template("edit-info1", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, avatar = $data.avatar, id = $data.id, description = $data.description, sign = $data.sign, account = $data.account, username = $data.username, sex = $data.sex, phone = $data.phone, email = $data.email, $out = "";
            return $out += '<div class="basic-info col m6 offset-m3 s12 "> <div class="change-avatar"> <img src="', 
            $line = 3, $out += $escape(avatar), $out += '" class="materialboxed" alt=""> <a href="#avatar-modal" class="modal-trigger">点击修改头像</a> </div> <form class="col s12" id="form-user-info"> <input type="hidden" id="userId" value="', 
            $line = 8, $out += $escape(id), $out += '"> <div class="row"> <div class="input-field col s12"> <textarea id="description" class="materialize-textarea"> ', 
            $line = 12, $out += $escape(description), $out += ' </textarea> <label for="description">个人简介</label> </div> </div> <div class="row"> <div class="input-field col s12"> <input id="sign" type="text" name="sign" value="', 
            $line = 19, $out += $escape(sign), $out += '"> <label for="sign">个性签名</label> </div> </div> <div class="row"> <div class="input-field col s6"> <input id="account" type="text" name="account" class="validate" value="', 
            $line = 25, $out += $escape(account), $out += '"> <label for="account">账号</label> </div> <div class="input-field col s6"> <input id="username" type="text" class="validate" value="', 
            $line = 29, $out += $escape(username), $out += '"> <label for="username">昵称</label> </div> </div> <div class="row"> <div class="col s12"> <p> ', 
            $line = 36, "1" == sex ? ($out += ' <input class="with-gap" name="sex" type="radio" value="1" id="male" checked/> <label for="male">男</label> <input class="with-gap" name="sex" type="radio" value="2" id="female"/> <label for="female">女</label> <input class="with-gap" name="sex" type="radio" value="0" id="other"/> <label for="other">未设置</label> ', 
            $line = 45) : "2" == sex ? ($out += ' <input class="with-gap" name="sex" type="radio" value="1" id="male" /> <label for="male">男</label> <input class="with-gap" name="sex" type="radio" value="2" id="female" checked/> <label for="female">女</label> <input class="with-gap" name="sex" type="radio" value="0" id="other"/> <label for="other">未设置</label> ', 
            $line = 54) : ($out += ' <input class="with-gap" name="sex" type="radio" value="1" id="male" /> <label for="male">男</label> <input class="with-gap" name="sex" type="radio" value="2" id="female" /> <label for="female">女</label> <input class="with-gap" name="sex" type="radio" value="0" id="other" checked/> <label for="other">未设置</label> ', 
            $line = 63), $out += ' </p> </div> </div> <div class="row"> <div class="input-field col s12"> <input id="phone" type="text" class="validate" value="', 
            $line = 69, $out += $escape(phone), $out += '"> <label for="phone">手机号</label> </div> </div> <div class="row"> <div class="input-field col s12"> <input id="email" type="email" class="validate" value="', 
            $line = 75, $out += $escape(email), $out += '"> <label for="email">邮箱</label> </div> </div> <div class="row"> <div class="col s12"> <button type="button" onclick="updateUserInfo()" class="waves-effect waves-light btn"><i class="icon-ok"></i> 保存修改</button> </div> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="basic-info col m6 offset-m3 s12 ">\n    <div class="change-avatar">\n        <img src="{{avatar}}" class="materialboxed"\n             alt="">\n        <a href="#avatar-modal" class="modal-trigger">点击修改头像</a>\n    </div>\n    <form class="col s12" id="form-user-info">\n        <input type="hidden" id="userId" value="{{id}}">\n        <div class="row">\n            <div class="input-field col s12">\n                <textarea id="description" class="materialize-textarea">\n                    {{description}}\n                </textarea>\n                <label for="description">个人简介</label>\n            </div>\n        </div>\n        <div class="row">\n            <div class="input-field col s12">\n                <input id="sign" type="text" name="sign" value="{{sign}}">\n                <label for="sign">个性签名</label>\n            </div>\n        </div>\n        <div class="row">\n            <div class="input-field col s6">\n                <input id="account" type="text" name="account" class="validate" value="{{account}}">\n                <label for="account">账号</label>\n            </div>\n            <div class="input-field col s6">\n                <input id="username" type="text" class="validate" value="{{username}}">\n                <label for="username">昵称</label>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col s12">\n                <p>\n                    {{if sex == \'1\'}}\n                        <input class="with-gap" name="sex" type="radio" value="1" id="male" checked/>\n                        <label for="male">男</label>\n\n                        <input class="with-gap" name="sex" type="radio" value="2" id="female"/>\n                        <label for="female">女</label>\n\n                        <input class="with-gap" name="sex" type="radio" value="0" id="other"/>\n                        <label for="other">未设置</label>\n                        {{else if sex == \'2\'}}\n                        <input class="with-gap" name="sex" type="radio" value="1" id="male" />\n                        <label for="male">男</label>\n\n                        <input class="with-gap" name="sex" type="radio" value="2" id="female" checked/>\n                        <label for="female">女</label>\n\n                        <input class="with-gap" name="sex" type="radio" value="0" id="other"/>\n                        <label for="other">未设置</label>\n                        {{else}}\n                        <input class="with-gap" name="sex" type="radio" value="1" id="male" />\n                        <label for="male">男</label>\n\n                        <input class="with-gap" name="sex" type="radio" value="2" id="female" />\n                        <label for="female">女</label>\n\n                        <input class="with-gap" name="sex" type="radio" value="0" id="other" checked/>\n                        <label for="other">未设置</label>\n                    {{/if}}\n                </p>\n            </div>\n        </div>\n        <div class="row">\n            <div class="input-field col s12">\n                <input id="phone" type="text" class="validate" value="{{phone}}">\n                <label for="phone">手机号</label>\n            </div>\n        </div>\n        <div class="row">\n            <div class="input-field col s12">\n                <input id="email" type="email" class="validate" value="{{email}}">\n                <label for="email">邮箱</label>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col s12">\n                <button type="button" onclick="updateUserInfo()" class="waves-effect waves-light btn"><i class="icon-ok"></i> 保存修改</button>\n            </div>\n        </div>\n    </form>\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:83*/
    template("nav", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, userId = $data.userId, $out = "";
            return $out += ' <div class="nav-bar"> <a href="#" onclick="toHome()"> <b>Share</b> </a> <a href="#" onclick="toHomeCenter(\'', 
            $line = 8, $out += $escape(userId), $out += '\')" class="tooltipped" data-position="right" data-delay="50" data-tooltip="个人中心"> <b><i class="icon-user icon-large"></i></b> </a> <a href="" class="tooltipped" data-position="right" data-delay="50" data-tooltip="随笔"> <b><i class="icon-pencil icon-large"></i></b> </a> <a href="" class="tooltipped" data-position="right" data-delay="50" data-tooltip="圈络"> <b><i class="icon-globe icon-large"></i></b> </a> <a href="" class="tooltipped" data-position="right" data-delay="50" data-tooltip="IM"> <b><i class="icon-comments icon-large"></i></b> </a> <a href="/home-center/', 
            $line = 20, $out += $escape(userId), $out += '" class="tooltipped" data-position="right" data-delay="50" data-tooltip="消息通知"> <b><i class="icon-lightbulb icon-large"></i></b> <i id="notice-point" class="notice-point"></i> </a> <a href="#" onclick="toEditInfo()" class="tooltipped setting" data-position="right" data-delay="50" data-tooltip="个人设置"> <b><i class="icon-cog icon-large"></i></b> </a> <a href="#" onclick="logout()" class="tooltipped logout" data-position="right" data-delay="50" data-tooltip="注销"> <b><i class="icon-signout icon-large"></i></b> </a> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--\n    左侧导航条\n-->\n<div class="nav-bar">\n    <a href="#" onclick="toHome()">\n        <b>Share</b>\n    </a>\n    <a href="#" onclick="toHomeCenter(\'{{userId}}\')" class="tooltipped" data-position="right" data-delay="50" data-tooltip="个人中心">\n        <b><i class="icon-user icon-large"></i></b>\n    </a>\n    <a href="" class="tooltipped" data-position="right" data-delay="50" data-tooltip="随笔">\n        <b><i class="icon-pencil icon-large"></i></b>\n    </a>\n    <a href="" class="tooltipped" data-position="right" data-delay="50" data-tooltip="圈络">\n        <b><i class="icon-globe icon-large"></i></b>\n    </a>\n    <a href="" class="tooltipped" data-position="right" data-delay="50" data-tooltip="IM">\n        <b><i class="icon-comments icon-large"></i></b>\n    </a>\n    <a href="/home-center/{{userId}}" class="tooltipped" data-position="right" data-delay="50" data-tooltip="消息通知">\n        <b><i class="icon-lightbulb icon-large"></i></b>\n        <i id="notice-point" class="notice-point"></i>\n    </a>\n\n    <a href="#" onclick="toEditInfo()" class="tooltipped setting" data-position="right" data-delay="50" data-tooltip="个人设置">\n        <b><i class="icon-cog icon-large"></i></b>\n    </a>\n\n    <a href="#" onclick="logout()" class="tooltipped logout" data-position="right" data-delay="50" data-tooltip="注销">\n        <b><i class="icon-signout icon-large"></i></b>\n    </a>\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:23*/
    template("post", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, avatar = $data.avatar, username = $data.username, date = $data.date, content = $data.content, id = $data.id, count = $data.count, $out = "";
            return $out += ' <li class="message" style="opacity: 1"> <a href="#"> <div class="avatar"> <img src="', 
            $line = 7, $out += $escape(avatar), $out += '" alt=""> </div> <span class="username">', 
            $line = 10, $out += $escape(username), $out += '</span> <span class="date pull-right"> ', 
            $line = 12, $out += $escape(date), $out += ' </span> <p class="msg-content"> ', 
            $line = 15, $out += $escape(content), $out += ' </p> <div class="message-option"> <span> <a href="#" praised="0" onclick="praise(\'', 
            $line = 19, $out += $escape(id), $out += '\',event)"> <i class="icon-heart"></i> 赞&nbsp; <span class="praise">0</span>&nbsp;&nbsp;&nbsp; </a> <i class="icon-share"></i> 转发&nbsp;&nbsp;&nbsp; <a href="#" onclick="getReplies(\'', 
            $line = 24, $out += $escape(id), $out += '\')" data-postId="', $line = 24, $out += $escape(id), 
            $out += '" class="modal-trigger"> <i class="icon-comment"></i> 评论&nbsp;', $line = 25, 
            $out += $escape(count), $out += "&nbsp;&nbsp; </a> </span> </div> </a> </li>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--\n    单个帖子\n-->\n<li class="message" style="opacity: 1">\n    <a href="#">\n        <div class="avatar">\n            <img src="{{avatar}}"\n                 alt="">\n        </div>\n        <span class="username">{{username}}</span>\n        <span class="date pull-right">\n            {{date}}\n        </span>\n        <p class="msg-content">\n            {{content}}\n        </p>\n        <div class="message-option">\n            <span>\n                <a href="#" praised="0" onclick="praise(\'{{id}}\',event)">\n                        <i class="icon-heart"></i> 赞&nbsp;\n                        <span class="praise">0</span>&nbsp;&nbsp;&nbsp;\n                    </a>\n                <i class="icon-share"></i> 转发&nbsp;&nbsp;&nbsp;\n                <a href="#" onclick="getReplies(\'{{id}}\')" data-postId="{{id}}" class="modal-trigger">\n                    <i class="icon-comment"></i> 评论&nbsp;{{count}}&nbsp;&nbsp;\n                </a>\n            </span>\n        </div>\n    </a>\n</li>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:125*/
    template("posts", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, list = $data.list, $escape = ($data.post, 
            $data.i, $utils.$escape), value = $data.value, $out = "";
            return $out += ' <ul id="messages-list" class="messages-list"> ', $line = 5, $each(list, function(post) {
                $out += ' <li class="message"> ', $line = 7, $out += $escape(value), $out += ' <div class="avatar"> <a href="/home-center/', 
                $line = 9, $out += $escape(post.userId), $out += '"> <img src="', $line = 10, $out += $escape(post.avatar), 
                $out += '" alt=""> </a> </div> <span class="username">', $line = 14, $out += $escape(post.username), 
                $out += '</span> <span class="date pull-right"> ', $line = 16, $out += $escape(post.date), 
                $out += ' </span> <p class="msg-content"> ', $line = 19, $out += $escape(post.content), 
                $out += ' </p> <div class="message-option"> <span> ', $line = 23, post.alreadyPraise ? ($out += ' <a href="#" style="color:#f47c60" praised="1" onclick="praise(\'', 
                $line = 24, $out += $escape(post.id), $out += '\',event)"> <i class="icon-heart"></i> 赞&nbsp; <span class="praise">', 
                $line = 26, $out += $escape(post.praise), $out += "</span>&nbsp;&nbsp;&nbsp; </a> ", 
                $line = 28) : ($out += ' <a href="#" praised="0" onclick="praise(\'', $line = 29, 
                $out += $escape(post.id), $out += '\',event)"> <i class="icon-heart"></i> 赞&nbsp; <span class="praise">', 
                $line = 31, $out += $escape(post.praise), $out += "</span>&nbsp;&nbsp;&nbsp; </a> ", 
                $line = 33), $out += ' <i class="icon-share"></i> 转发&nbsp;&nbsp;&nbsp; <a href="#" onclick="getReplies(\'', 
                $line = 36, $out += $escape(post.id), $out += "','", $line = 36, $out += $escape(post.userId), 
                $out += '\')" data-postId="', $line = 36, $out += $escape(post.id), $out += '" class="modal-trigger"> <i class="icon-comment"></i> 评论&nbsp;', 
                $line = 37, $out += $escape(post.count), $out += "&nbsp;&nbsp; </a> </span> </div> </li> ", 
                $line = 42;
            }), $out += " </ul> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--\n    帖子s\n-->\n<ul id="messages-list" class="messages-list">\n    {{each list as post i}}\n    <li class="message">\n        {{value}}\n            <div class="avatar">\n                <a href="/home-center/{{post.userId}}">\n                    <img src="{{post.avatar}}"\n                         alt="">\n                </a>\n            </div>\n            <span class="username">{{post.username}}</span>\n            <span class="date pull-right">\n                {{post.date}}\n            </span>\n            <p class="msg-content">\n                {{post.content}}\n            </p>\n            <div class="message-option">\n                <span>\n                    {{if post.alreadyPraise}}\n                        <a href="#" style="color:#f47c60" praised="1" onclick="praise(\'{{post.id}}\',event)">\n                            <i class="icon-heart"></i> 赞&nbsp;\n                            <span class="praise">{{post.praise}}</span>&nbsp;&nbsp;&nbsp;\n                        </a>\n                    {{else}}\n                        <a href="#" praised="0" onclick="praise(\'{{post.id}}\',event)">\n                            <i class="icon-heart"></i> 赞&nbsp;\n                            <span class="praise">{{post.praise}}</span>&nbsp;&nbsp;&nbsp;\n                        </a>\n                    {{/if}}\n\n                    <i class="icon-share"></i> 转发&nbsp;&nbsp;&nbsp;\n                    <a href="#" onclick="getReplies(\'{{post.id}}\',\'{{post.userId}}\')" data-postId="{{post.id}}" class="modal-trigger">\n                        <i class="icon-comment"></i> 评论&nbsp;{{post.count}}&nbsp;&nbsp;\n                    </a>\n                </span>\n            </div>\n    </li>\n    {{/each}}\n</ul>\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:41*/
    template("replies", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), isNotEmpty = $data.isNotEmpty, $each = $utils.$each, replies = $data.replies, $escape = ($data.reply, 
            $data.i, $utils.$escape), $out = "";
            return $out += " ", $line = 4, isNotEmpty ? ($out += " ", $line = 5, $each(replies, function(reply) {
                $out += ' <li class="collection-item avatar"> <img src="', $line = 7, $out += $escape(reply.avatar), 
                $out += '" alt="" class="circle"> <span class="title">', $line = 8, $out += $escape(reply.username), 
                $out += '</span>&nbsp;&nbsp;&nbsp; <span class="date">', $line = 9, $out += $escape(reply.date), 
                $out += '</span>&nbsp;&nbsp;&nbsp; <span class="date">', $line = 10, $out += $escape(reply.floorNum), 
                $out += " 楼</span> <p> ", $line = 12, $out += $escape(reply.content), $out += ' </p> <a href="#!" class="secondary-content"><i class="icon-pencil"></i></a> </li> ', 
                $line = 16;
            }), $out += " ", $line = 17) : ($out += " <p>暂无回复</p> ", $line = 19), $out += " ", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--\n    回复s\n-->\n{{if isNotEmpty}}\n    {{each replies as reply i}}\n        <li class="collection-item avatar">\n            <img src="{{reply.avatar}}" alt="" class="circle">\n            <span class="title">{{reply.username}}</span>&nbsp;&nbsp;&nbsp;\n            <span class="date">{{reply.date}}</span>&nbsp;&nbsp;&nbsp;\n            <span class="date">{{reply.floorNum}} 楼</span>\n            <p>\n                {{reply.content}}\n            </p>\n            <a href="#!" class="secondary-content"><i class="icon-pencil"></i></a>\n        </li>\n    {{/each}}\n    {{else}}\n    <p>暂无回复</p>\n{{/if}}\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:13*/
    template("reply", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, avatar = $data.avatar, username = $data.username, content = $data.content, $out = "";
            return $out += ' <li class="collection-item avatar"> <img src="', $line = 5, $out += $escape(avatar), 
            $out += '" alt="" class="circle"> <span class="title">', $line = 6, $out += $escape(username), 
            $out += "</span> <p> ", $line = 8, $out += $escape(content), $out += ' </p> <a href="#!" class="secondary-content"><i class="icon-pencil"></i></a> </li>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--\n    单个回复\n-->\n<li class="collection-item avatar">\n    <img src="{{avatar}}" alt="" class="circle">\n    <span class="title">{{username}}</span>\n    <p>\n        {{content}}\n    </p>\n    <a href="#!" class="secondary-content"><i class="icon-pencil"></i></a>\n</li>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:15*/
    template("test", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), isAdmin = $data.isAdmin, $escape = $utils.$escape, title = $data.title, sex = $data.sex, $each = $utils.$each, list = $data.list, $out = ($data.value, 
            $data.i, "");
            return $line = 1, isAdmin && ($out += " <h1>", $line = 2, $out += $escape(title), 
            $out += "</h1> ", $line = 3, "男" == sex ? ($out += " 我是男 ", $line = 5) : ($out += " 我是女 ", 
            $line = 7), $out += " <ul> ", $line = 10, $each(list, function(value, i) {
                $out += " <li>索引 ", $line = 11, $out += $escape(i + 1), $out += " ：", $line = 11, 
                $out += $escape(value), $out += "</li> ", $line = 12;
            }), $out += " </ul> ", $line = 14), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: "{{if isAdmin}}\n<h1>{{title}}</h1>\n{{if sex == '男'}}\n    我是男\n{{else}}\n    我是女\n{{/if}}\n\n<ul>\n    {{each list as value i}}\n    <li>索引 {{i + 1}} ：{{value}}</li>\n    {{/each}}\n</ul>\n{{/if}}".split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:27*/
    template("user-center-left-panel", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, bgImg = $data.bgImg, avatar = $data.avatar, follower = $data.follower, fans = $data.fans, articleCount = $data.articleCount, liked = $data.liked, $out = "";
            return $out += '<div class="user-center-left"> <div class="cover-img" id="cover-img" style="background-image: url(\'', 
            $line = 2, $out += $escape(bgImg), $out += '\')"></div> <div class="info-content"> <div class="avatar"> <img src="', 
            $line = 5, $out += $escape(avatar), $out += '" alt=""> </div> <a href="/edit-info">编辑个人资料</a> <div class="user-stats"> <ul class="clearfix"> <li> <a><b>', 
            $line = 11, $out += $escape(follower), $out += "</b><span>关注</span></a> </li> <li> <a><b>", 
            $line = 14, $out += $escape(fans), $out += "</b><span>粉丝</span></a> </li> <br> <li> <a><b>", 
            $line = 18, $out += $escape(articleCount), $out += "</b><span>文章</span></a> </li> <li> <a><b>0</b><span>赞</span></a> </li> <li> <a><b>", 
            $line = 24, $out += $escape(liked), $out += '</b><span>收获赞</span></a> </li> </ul> </div> </div> <div class="change-bg"> <a href="#" onclick="document.getElementById(\'home-bg\').click();return false;" class="tooltipped" data-position="top" data-delay="50" data-tooltip="点击修改背景图片"> <i class="icon-picture"></i> </a> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="user-center-left">\n    <div class="cover-img" id="cover-img"　style="background-image: url(\'{{bgImg}}\')"></div>\n    <div class="info-content">\n        <div class="avatar">\n            <img src="{{avatar}}" alt="">\n        </div>\n        <a href="/edit-info">编辑个人资料</a>\n        <div class="user-stats">\n            <ul class="clearfix">\n                <li>\n                    <a><b>{{follower}}</b><span>关注</span></a>\n                </li>\n                <li>\n                    <a><b>{{fans}}</b><span>粉丝</span></a>\n                </li>\n                <br>\n                <li>\n                    <a><b>{{articleCount}}</b><span>文章</span></a>\n                </li>\n                <li>\n                    <a><b>0</b><span>赞</span></a>\n                </li>\n                <li>\n                    <a><b>{{liked}}</b><span>收获赞</span></a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class="change-bg">\n        <a href="#" onclick="document.getElementById(\'home-bg\').click();return false;" class="tooltipped"\n           data-position="top" data-delay="50" data-tooltip="点击修改背景图片">\n            <i class="icon-picture"></i>\n        </a>\n    </div>\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:31*/
    template("notices", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, list = $data.list, $escape = ($data.notice, 
            $data.i, $utils.$escape), $out = "";
            return $out += ' <ul class="timeline-content"> ', $line = 5, $each(list, function(notice) {
                $out += ' <li class="user-update"> <div class="avatar-container"> <div class="avatar"> <a target="_blank" href="/home-center/', 
                $line = 9, $out += $escape(notice.from), $out += '"> <img src="', $line = 10, $out += $escape(notice.avatar), 
                $out += '"> </a> </div> </div> <span> <a target="_blank" href="/home-center/', $line = 15, 
                $out += $escape(notice.from), $out += '">', $line = 15, $out += $escape(notice.username), 
                $out += "</a> ", $line = 15, $out += $escape(notice.action), $out += '<b></b> </span> <div class="meta"> <time>', 
                $line = 18, $out += $escape(notice.date), $out += "</time> </div> </li> ", $line = 21;
            }), $out += " </ul>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--\n    消息通知列表\n-->\n<ul class="timeline-content">\n    {{each list as notice i}}\n    <li class="user-update">\n        <div class="avatar-container">\n            <div class="avatar">\n                <a target="_blank" href="/home-center/{{notice.from}}">\n                    <img src="{{notice.avatar}}">\n                </a>\n            </div>\n        </div>\n        <span>\n             <a target="_blank" href="/home-center/{{notice.from}}">{{notice.username}}</a> {{notice.action}}<b></b>\n         </span>\n        <div class="meta">\n            <time>{{notice.date}}</time>\n        </div>\n    </li>\n    {{/each}}\n</ul>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:10*/
    template("home", "<h1>我是home的内容</h1>"), /*v:16*/
    template("home/home", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), include = function(filename, data) {
                data = data || $data;
                var text = $utils.$include(filename, data, $filename);
                return $out += text;
            }, $out = "";
            return $line = 1, include("./home-left-panel"), $out += " ", $line = 2, include("./home-content-panel"), 
            $out += " ", $line = 3, include("./home-float-button"), $out += " ", $line = 4, 
            include("../modal/modal-publish-post"), $out += " ", $line = 5, include("../modal/modal-reply-post"), 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: "{{include './home-left-panel'}}\n{{include './home-content-panel'}}\n{{include './home-float-button'}}\n{{include '../modal/modal-publish-post'}}\n{{include '../modal/modal-reply-post'}}".split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:13*/
    template("home/home-left-panel", '<div class="left-aside span3"> <div class="cover-img"></div> <div class="bottom-block"> <h3>妙笔生花</h3> <p>一个基于内容分享的社区</p> <button class="btn btn-large btn-success" href="#">提笔写篇文章</button> </div> </div>'), 
    /*v:25*/
    template("home/home-content-panel", '<div class="content"> <div class="row"> <div class="col s12"> <ul class="tabs"> <li class="tab col s3"><a class="active" href="#panel1">发现</a></li> <li class="tab col s3"><a href="#test2">关注</a></li> <li class="tab col s3"><a href="#test3">精选</a></li> <li class="tab col s3 "><a href="#test4">圈络</a></li> </ul> </div> <div id="panel1" class="col s12"></div> <div id="test2" class="col s12">Test 2</div> <div id="test3" class="col s12">Test 3</div> <div id="test4" class="col s12">Test 4</div> </div> </div> '), 
    /*v:3*/
    template("home-center/user-center-left-panel", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, bgImg = $data.bgImg, avatar = $data.avatar, follower = $data.follower, fans = $data.fans, articleCount = $data.articleCount, liked = $data.liked, $out = "";
            return $out += '<div class="user-center-left"> <div class="cover-img" id="cover-img" style="background-image: url(\'', 
            $line = 2, $out += $escape(bgImg), $out += '\')"></div> <div class="info-content"> <div class="avatar"> <img src="', 
            $line = 5, $out += $escape(avatar), $out += '" alt=""> </div> <a href="/edit-info">编辑个人资料</a> <div class="user-stats"> <ul class="clearfix"> <li> <a><b>', 
            $line = 11, $out += $escape(follower), $out += "</b><span>关注</span></a> </li> <li> <a><b>", 
            $line = 14, $out += $escape(fans), $out += "</b><span>粉丝</span></a> </li> <br> <li> <a><b>", 
            $line = 18, $out += $escape(articleCount), $out += "</b><span>文章</span></a> </li> <li> <a><b>0</b><span>赞</span></a> </li> <li> <a><b>", 
            $line = 24, $out += $escape(liked), $out += '</b><span>收获赞</span></a> </li> </ul> </div> </div> <div class="change-bg"> <a href="#" onclick="document.getElementById(\'home-bg\').click();return false;" class="tooltipped" data-position="top" data-delay="50" data-tooltip="点击修改背景图片"> <i class="icon-picture"></i> </a> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="user-center-left">\n    <div class="cover-img" id="cover-img"　style="background-image: url(\'{{bgImg}}\')"></div>\n    <div class="info-content">\n        <div class="avatar">\n            <img src="{{avatar}}" alt="">\n        </div>\n        <a href="/edit-info">编辑个人资料</a>\n        <div class="user-stats">\n            <ul class="clearfix">\n                <li>\n                    <a><b>{{follower}}</b><span>关注</span></a>\n                </li>\n                <li>\n                    <a><b>{{fans}}</b><span>粉丝</span></a>\n                </li>\n                <br>\n                <li>\n                    <a><b>{{articleCount}}</b><span>文章</span></a>\n                </li>\n                <li>\n                    <a><b>0</b><span>赞</span></a>\n                </li>\n                <li>\n                    <a><b>{{liked}}</b><span>收获赞</span></a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class="change-bg">\n        <a href="#" onclick="document.getElementById(\'home-bg\').click();return false;" class="tooltipped"\n           data-position="top" data-delay="50" data-tooltip="点击修改背景图片">\n            <i class="icon-picture"></i>\n        </a>\n    </div>\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:16*/
    template("home-center/home-center", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), include = function(filename, data) {
                data = data || $data;
                var text = $utils.$include(filename, data, $filename);
                return $out += text;
            }, $out = "";
            return $line = 1, include("./home-center-left-panel"), $out += " ", $line = 2, include("./home-center-content-panel"), 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: "{{include './home-center-left-panel'}}\n{{include './home-center-content-panel'}}".split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:7*/
    template("home-center/home-center-left-panel", '<div id="home-center-left-panel">  </div>'), 
    /*v:10*/
    template("home-center/home-center-content-panel", '<div class="user-content valign-wrapper"> <div class="row valign"> <div class="col s12"> <ul class="tabs"> <li class="tab col s3"><a href="#panel1">最新发布</a></li> <li class="tab col s3"><a class="active" href="#panel2">最新动态</a></li> <li class="tab col s3"><a href="#panel3">收藏</a></li> </ul> </div> <div id="panel1" class="col s12"></div> <div id="panel2" class="col s12"></div> <div id="panel3" class="col s12"></div> </div> </div>'), 
    /*v:7*/
    template("home-center/left-panel", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, bgImg = $data.bgImg, avatar = $data.avatar, follower = $data.follower, fans = $data.fans, articleCount = $data.articleCount, liked = $data.liked, $out = "";
            return $out += '<div class="user-center-left"> <div class="cover-img" id="cover-img" style="background-image: url(\'', 
            $line = 2, $out += $escape(bgImg), $out += '\')"></div> <div class="info-content"> <div class="avatar"> <img src="', 
            $line = 5, $out += $escape(avatar), $out += '" alt=""> </div> <a href="/edit-info">编辑个人资料</a> <div class="user-stats"> <ul class="clearfix"> <li> <a><b>', 
            $line = 11, $out += $escape(follower), $out += "</b><span>关注</span></a> </li> <li> <a><b>", 
            $line = 14, $out += $escape(fans), $out += "</b><span>粉丝</span></a> </li> <br> <li> <a><b>", 
            $line = 18, $out += $escape(articleCount), $out += "</b><span>文章</span></a> </li> <li> <a><b>0</b><span>赞</span></a> </li> <li> <a><b>", 
            $line = 24, $out += $escape(liked), $out += '</b><span>收获赞</span></a> </li> </ul> </div> </div> <div class="change-bg"> <a href="#" onclick="document.getElementById(\'home-bg\').click();return false;" class="tooltipped" data-position="top" data-delay="50" data-tooltip="点击修改背景图片"> <i class="icon-picture"></i> </a> </div> </div> <form id="form-upload" action="/user/upload-home-bg" enctype="multipart/form-data"> <input type="file" name="url" id="home-bg" onchange="fileUpload()" style="display: none;"> </form>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="user-center-left">\n    <div class="cover-img" id="cover-img"　style="background-image: url(\'{{bgImg}}\')"></div>\n    <div class="info-content">\n        <div class="avatar">\n            <img src="{{avatar}}" alt="">\n        </div>\n        <a href="/edit-info">编辑个人资料</a>\n        <div class="user-stats">\n            <ul class="clearfix">\n                <li>\n                    <a><b>{{follower}}</b><span>关注</span></a>\n                </li>\n                <li>\n                    <a><b>{{fans}}</b><span>粉丝</span></a>\n                </li>\n                <br>\n                <li>\n                    <a><b>{{articleCount}}</b><span>文章</span></a>\n                </li>\n                <li>\n                    <a><b>0</b><span>赞</span></a>\n                </li>\n                <li>\n                    <a><b>{{liked}}</b><span>收获赞</span></a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class="change-bg">\n        <a href="#" onclick="document.getElementById(\'home-bg\').click();return false;" class="tooltipped"\n           data-position="top" data-delay="50" data-tooltip="点击修改背景图片">\n            <i class="icon-picture"></i>\n        </a>\n    </div>\n</div>\n\n<form id="form-upload" action="/user/upload-home-bg" enctype="multipart/form-data">\n    <input type="file" name="url" id="home-bg" onchange="fileUpload()" style="display: none;">\n</form>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:13*/
    template("user-info/user-info", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), include = function(filename, data) {
                data = data || $data;
                var text = $utils.$include(filename, data, $filename);
                return $out += text;
            }, $out = "";
            return $out += '<div class="user-info"> <div class="row"> <div class="col s9"> <ul class="tabs"> <li class="tab col s3"><a class="active" href="#panel1">基本资料</a></li> <li class="tab col s3"><a href="#panel2">修改密码</a></li> <li class="tab col s3"><a href="#panel3">设置</a></li> </ul> </div> <div id="panel1" class="col s12"> <!-- 动态载入 ', 
            $line = 13, include("./user-info-basic"), $out += ' --> </div> <div id="panel2" class="col s12"> ', 
            $line = 17, include("./user-info-password"), $out += ' </div> <div id="panel3" class="col s12"> ', 
            $line = 20, include("./user-info-others"), $out += " </div> </div> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="user-info">\n    <div class="row">\n        <div class="col s9">\n            <ul class="tabs">\n                <li class="tab col s3"><a class="active" href="#panel1">基本资料</a></li>\n                <li class="tab col s3"><a href="#panel2">修改密码</a></li>\n                <li class="tab col s3"><a href="#panel3">设置</a></li>\n            </ul>\n        </div>\n        <div id="panel1" class="col s12">\n            <!--\n                动态载入\n                {{include \'./user-info-basic\'}}\n            -->\n        </div>\n        <div id="panel2" class="col s12">\n            {{include \'./user-info-password\'}}\n        </div>\n        <div id="panel3" class="col s12">\n            {{include \'./user-info-others\'}}\n        </div>\n    </div>\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:3*/
    template("user-info/user-info-basic", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, avatar = $data.avatar, id = $data.id, description = $data.description, sign = $data.sign, account = $data.account, username = $data.username, sex = $data.sex, phone = $data.phone, email = $data.email, $out = "";
            return $out += '<div class="basic-info col m6 offset-m3 s12 "> <div class="change-avatar"> <img src="', 
            $line = 3, $out += $escape(avatar), $out += '" class="materialboxed" alt=""> <a href="#avatar-modal" class="modal-trigger">点击修改头像</a> </div> <form class="col s12" id="form-user-info"> <input type="hidden" id="userId" value="', 
            $line = 8, $out += $escape(id), $out += '"> <div class="row"> <div class="input-field col s12"> <textarea id="description" class="materialize-textarea"> ', 
            $line = 12, $out += $escape(description), $out += ' </textarea> <label for="description">个人简介</label> </div> </div> <div class="row"> <div class="input-field col s12"> <input id="sign" type="text" name="sign" value="', 
            $line = 19, $out += $escape(sign), $out += '"> <label for="sign">个性签名</label> </div> </div> <div class="row"> <div class="input-field col s6"> <input id="account" type="text" name="account" class="validate" value="', 
            $line = 25, $out += $escape(account), $out += '"> <label for="account">账号</label> </div> <div class="input-field col s6"> <input id="username" type="text" class="validate" value="', 
            $line = 29, $out += $escape(username), $out += '"> <label for="username">昵称</label> </div> </div> <div class="row"> <div class="col s12"> <p> ', 
            $line = 36, "1" == sex ? ($out += ' <input class="with-gap" name="sex" type="radio" value="1" id="male" checked/> <label for="male">男</label> <input class="with-gap" name="sex" type="radio" value="2" id="female"/> <label for="female">女</label> <input class="with-gap" name="sex" type="radio" value="0" id="other"/> <label for="other">未设置</label> ', 
            $line = 45) : "2" == sex ? ($out += ' <input class="with-gap" name="sex" type="radio" value="1" id="male" /> <label for="male">男</label> <input class="with-gap" name="sex" type="radio" value="2" id="female" checked/> <label for="female">女</label> <input class="with-gap" name="sex" type="radio" value="0" id="other"/> <label for="other">未设置</label> ', 
            $line = 54) : ($out += ' <input class="with-gap" name="sex" type="radio" value="1" id="male" /> <label for="male">男</label> <input class="with-gap" name="sex" type="radio" value="2" id="female" /> <label for="female">女</label> <input class="with-gap" name="sex" type="radio" value="0" id="other" checked/> <label for="other">未设置</label> ', 
            $line = 63), $out += ' </p> </div> </div> <div class="row"> <div class="input-field col s12"> <input id="phone" type="text" class="validate" value="', 
            $line = 69, $out += $escape(phone), $out += '"> <label for="phone">手机号</label> </div> </div> <div class="row"> <div class="input-field col s12"> <input id="email" type="email" class="validate" value="', 
            $line = 75, $out += $escape(email), $out += '"> <label for="email">邮箱</label> </div> </div> <div class="row"> <div class="col s12"> <button type="button" onclick="updateUserInfo()" class="waves-effect waves-light btn"><i class="icon-ok"></i> 保存修改</button> </div> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="basic-info col m6 offset-m3 s12 ">\n    <div class="change-avatar">\n        <img src="{{avatar}}" class="materialboxed"\n             alt="">\n        <a href="#avatar-modal" class="modal-trigger">点击修改头像</a>\n    </div>\n    <form class="col s12" id="form-user-info">\n        <input type="hidden" id="userId" value="{{id}}">\n        <div class="row">\n            <div class="input-field col s12">\n                <textarea id="description" class="materialize-textarea">\n                    {{description}}\n                </textarea>\n                <label for="description">个人简介</label>\n            </div>\n        </div>\n        <div class="row">\n            <div class="input-field col s12">\n                <input id="sign" type="text" name="sign" value="{{sign}}">\n                <label for="sign">个性签名</label>\n            </div>\n        </div>\n        <div class="row">\n            <div class="input-field col s6">\n                <input id="account" type="text" name="account" class="validate" value="{{account}}">\n                <label for="account">账号</label>\n            </div>\n            <div class="input-field col s6">\n                <input id="username" type="text" class="validate" value="{{username}}">\n                <label for="username">昵称</label>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col s12">\n                <p>\n                    {{if sex == \'1\'}}\n                        <input class="with-gap" name="sex" type="radio" value="1" id="male" checked/>\n                        <label for="male">男</label>\n\n                        <input class="with-gap" name="sex" type="radio" value="2" id="female"/>\n                        <label for="female">女</label>\n\n                        <input class="with-gap" name="sex" type="radio" value="0" id="other"/>\n                        <label for="other">未设置</label>\n                        {{else if sex == \'2\'}}\n                        <input class="with-gap" name="sex" type="radio" value="1" id="male" />\n                        <label for="male">男</label>\n\n                        <input class="with-gap" name="sex" type="radio" value="2" id="female" checked/>\n                        <label for="female">女</label>\n\n                        <input class="with-gap" name="sex" type="radio" value="0" id="other"/>\n                        <label for="other">未设置</label>\n                        {{else}}\n                        <input class="with-gap" name="sex" type="radio" value="1" id="male" />\n                        <label for="male">男</label>\n\n                        <input class="with-gap" name="sex" type="radio" value="2" id="female" />\n                        <label for="female">女</label>\n\n                        <input class="with-gap" name="sex" type="radio" value="0" id="other" checked/>\n                        <label for="other">未设置</label>\n                    {{/if}}\n                </p>\n            </div>\n        </div>\n        <div class="row">\n            <div class="input-field col s12">\n                <input id="phone" type="text" class="validate" value="{{phone}}">\n                <label for="phone">手机号</label>\n            </div>\n        </div>\n        <div class="row">\n            <div class="input-field col s12">\n                <input id="email" type="email" class="validate" value="{{email}}">\n                <label for="email">邮箱</label>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col s12">\n                <button type="button" onclick="updateUserInfo()" class="waves-effect waves-light btn"><i class="icon-ok"></i> 保存修改</button>\n            </div>\n        </div>\n    </form>\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:6*/
    template("user-info/user-info-password", '<form action="" class="col m6 offset-m3 s12 "> <div class="row"> <div class="input-field col s12"> <input id="old-password" type="password" class="validate"> <label for="old-password">原密码</label> </div> </div> <div class="row"> <div class="input-field col s12"> <input id="new-password" type="password" class="validate"> <label for="new-password">新密码</label> </div> </div> <div class="row"> <div class="input-field col s12"> <input id="new-repassword" type="password" class="validate"> <label for="new-repassword">重复密码</label> </div> </div> <div class="row"> <div class="col s12"> <a class="waves-effect waves-light btn" onclick="updatePassword()"><i class="icon-ok"></i> 保存修改</a> </div> </div> </form>'), 
    /*v:7*/
    template("user-info/user-info-others", '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <title>Title</title> </head> <body> </body> </html>'), 
    /*v:7*/
    template("home/home-float-button", ' <div class="option-btn"> <a href="#publish-modal" class="btn btn-floating btn-large red waves-effect waves-light modal-trigger"> <i class="icon-pencil"></i> </a> </div>'), 
    /*v:13*/
    template("modal/modal-publish-post", ' <div id="publish-modal" class="modal"> <div class="modal-content"> <div class="row"> <form class="col s12" id="post-form"> <div class="row"> <div class="input-field col s12"> <textarea id="post-content" class="materialize-textarea"></textarea> <label for="post-content">想说点什么？</label> </div> </div> </form> </div> </div> <div class="modal-footer"> <a href="#!" onclick="publishPost()" class="modal-action modal-close waves-effect waves-red btn-flat ">发布</a> <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">取消</a> </div> </div>'), 
    /*v:13*/
    template("modal/modal-reply-post", ' <div id="comments-modal" class="modal bottom-sheet"> <div class="modal-content"> <a id="a-close" href="#!" class="modal-action modal-close pull-right"> <i class="icon-remove icon-large"></i> </a>&nbsp;&nbsp;&nbsp; <a id="a-reply" href="#!" onclick="reply()" class="modal-action modal-close pull-right"> <i class="icon-ok icon-large" style="color: #f47c60;"></i> </a> <input type="hidden" id="reply-postId"> <input type="hidden" id="reply-post-userId"> <div class="row"> <div class="input-field col s12"> <textarea id="reply-content" class="materialize-textarea"></textarea> <label for="reply-content">回复...</label> </div> </div> <ul id="comments-ul" class="collection"></ul> </div> </div>'), 
    /*v:46*/
    template("common/common-user-avatar", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, avatar = $data.avatar, userId = $data.userId, $out = "";
            return $out += ' <div class="user"> <a class=\'dropdown-button\' data-beloworigin="true" href=\'#\' data-activates=\'dropdown1\'> <div class="avatar"> <a href="#" onclick="toogleMenu()"> <img src="', 
            $line = 8, $out += $escape(avatar), $out += '" alt="" class="circle"> </a> </div> </a> <ul id=\'dropdown-menu\' class="dropdown-menu arrow-top"> <li> <a href="#" onclick="toHomeCenter(\'', 
            $line = 14, $out += $escape(userId), $out += '\')"> <i class="icon-user"></i> 个人中心 </a> </li> <li> <a href="#" > <i class="icon-pencil"></i> 随笔 </a> </li> <li> <a href="#" > <i class="icon-globe"></i> 圈络 </a> </li> <li> <a href="#" > <i class="icon-comments"></i> IM </a> </li> <li> <a href="#" > <i class="icon-lightbulb"></i> 消息通知 </a> </li> <li> <a href="#" onclick="toEditInfo()"> <i class="icon-cog"></i> 个人设置 </a> </li> <li> <a href="#" > <i class="icon-signout"></i> 注销 </a> </li> </ul> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--\n    用户头像\n-->\n<div class="user">\n    <a class=\'dropdown-button\' data-beloworigin="true" href=\'#\' data-activates=\'dropdown1\'>\n        <div class="avatar">\n            <a href="#" onclick="toogleMenu()">\n                <img src="{{avatar}}" alt="" class="circle">\n            </a>\n        </div>\n    </a>\n    <ul id=\'dropdown-menu\' class="dropdown-menu arrow-top">\n        <li>\n            <a href="#" onclick="toHomeCenter(\'{{userId}}\')">\n                <i class="icon-user"></i> 个人中心\n            </a>\n        </li>\n        <li>\n            <a href="#" >\n                <i class="icon-pencil"></i> 随笔\n            </a>\n        </li>\n        <li>\n            <a href="#" >\n                <i class="icon-globe"></i> 圈络\n            </a>\n        </li>\n        <li>\n            <a href="#" >\n                <i class="icon-comments"></i> IM\n            </a>\n        </li>\n        <li>\n            <a href="#" >\n                <i class="icon-lightbulb"></i> 消息通知\n            </a>\n        </li>\n        <li>\n            <a href="#" onclick="toEditInfo()">\n                <i class="icon-cog"></i> 个人设置\n            </a>\n        </li>\n        <li>\n            <a href="#" >\n                <i class="icon-signout"></i> 注销\n            </a>\n        </li>\n    </ul>\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:1*/
    template("common/post", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, avatar = $data.avatar, username = $data.username, date = $data.date, content = $data.content, id = $data.id, count = $data.count, $out = "";
            return $out += ' <li class="message" style="opacity: 1"> <a href="#"> <div class="avatar"> <img src="', 
            $line = 7, $out += $escape(avatar), $out += '" alt=""> </div> <span class="username">', 
            $line = 10, $out += $escape(username), $out += '</span> <span class="date pull-right"> ', 
            $line = 12, $out += $escape(date), $out += ' </span> <p class="msg-content"> ', 
            $line = 15, $out += $escape(content), $out += ' </p> <div class="message-option"> <span> <a href="#" praised="0" onclick="praise(\'', 
            $line = 19, $out += $escape(id), $out += '\',event)"> <i class="icon-heart"></i> 赞&nbsp; <span class="praise">0</span>&nbsp;&nbsp;&nbsp; </a> <i class="icon-share"></i> 转发&nbsp;&nbsp;&nbsp; <a href="#" onclick="getReplies(\'', 
            $line = 24, $out += $escape(id), $out += '\')" data-postId="', $line = 24, $out += $escape(id), 
            $out += '" class="modal-trigger"> <i class="icon-comment"></i> 评论&nbsp;', $line = 25, 
            $out += $escape(count), $out += "&nbsp;&nbsp; </a> </span> </div> </a> </li>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--\n    单个帖子\n-->\n<li class="message" style="opacity: 1">\n    <a href="#">\n        <div class="avatar">\n            <img src="{{avatar}}"\n                 alt="">\n        </div>\n        <span class="username">{{username}}</span>\n        <span class="date pull-right">\n            {{date}}\n        </span>\n        <p class="msg-content">\n            {{content}}\n        </p>\n        <div class="message-option">\n            <span>\n                <a href="#" praised="0" onclick="praise(\'{{id}}\',event)">\n                        <i class="icon-heart"></i> 赞&nbsp;\n                        <span class="praise">0</span>&nbsp;&nbsp;&nbsp;\n                    </a>\n                <i class="icon-share"></i> 转发&nbsp;&nbsp;&nbsp;\n                <a href="#" onclick="getReplies(\'{{id}}\')" data-postId="{{id}}" class="modal-trigger">\n                    <i class="icon-comment"></i> 评论&nbsp;{{count}}&nbsp;&nbsp;\n                </a>\n            </span>\n        </div>\n    </a>\n</li>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:1*/
    template("common/posts", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, list = $data.list, $escape = ($data.post, 
            $data.i, $utils.$escape), value = $data.value, $out = "";
            return $out += ' <ul id="messages-list" class="messages-list"> ', $line = 5, $each(list, function(post) {
                $out += ' <li class="message"> ', $line = 7, $out += $escape(value), $out += ' <div class="avatar"> <a href="/home-center/', 
                $line = 9, $out += $escape(post.userId), $out += '"> <img src="', $line = 10, $out += $escape(post.avatar), 
                $out += '" alt=""> </a> </div> <span class="username">', $line = 14, $out += $escape(post.username), 
                $out += '</span> <span class="date pull-right"> ', $line = 16, $out += $escape(post.date), 
                $out += ' </span> <p class="msg-content"> ', $line = 19, $out += $escape(post.content), 
                $out += ' </p> <div class="message-option"> <span> ', $line = 23, post.alreadyPraise ? ($out += ' <a href="#" style="color:#f47c60" praised="1" onclick="praise(\'', 
                $line = 24, $out += $escape(post.id), $out += '\',event)"> <i class="icon-heart"></i> 赞&nbsp; <span class="praise">', 
                $line = 26, $out += $escape(post.praise), $out += "</span>&nbsp;&nbsp;&nbsp; </a> ", 
                $line = 28) : ($out += ' <a href="#" praised="0" onclick="praise(\'', $line = 29, 
                $out += $escape(post.id), $out += '\',event)"> <i class="icon-heart"></i> 赞&nbsp; <span class="praise">', 
                $line = 31, $out += $escape(post.praise), $out += "</span>&nbsp;&nbsp;&nbsp; </a> ", 
                $line = 33), $out += ' <i class="icon-share"></i> 转发&nbsp;&nbsp;&nbsp; <a href="#" onclick="getReplies(\'', 
                $line = 36, $out += $escape(post.id), $out += "','", $line = 36, $out += $escape(post.userId), 
                $out += '\')" data-postId="', $line = 36, $out += $escape(post.id), $out += '" class="modal-trigger"> <i class="icon-comment"></i> 评论&nbsp;', 
                $line = 37, $out += $escape(post.count), $out += "&nbsp;&nbsp; </a> </span> </div> </li> ", 
                $line = 42;
            }), $out += " </ul> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--\n    帖子s\n-->\n<ul id="messages-list" class="messages-list">\n    {{each list as post i}}\n    <li class="message">\n        {{value}}\n            <div class="avatar">\n                <a href="/home-center/{{post.userId}}">\n                    <img src="{{post.avatar}}"\n                         alt="">\n                </a>\n            </div>\n            <span class="username">{{post.username}}</span>\n            <span class="date pull-right">\n                {{post.date}}\n            </span>\n            <p class="msg-content">\n                {{post.content}}\n            </p>\n            <div class="message-option">\n                <span>\n                    {{if post.alreadyPraise}}\n                        <a href="#" style="color:#f47c60" praised="1" onclick="praise(\'{{post.id}}\',event)">\n                            <i class="icon-heart"></i> 赞&nbsp;\n                            <span class="praise">{{post.praise}}</span>&nbsp;&nbsp;&nbsp;\n                        </a>\n                    {{else}}\n                        <a href="#" praised="0" onclick="praise(\'{{post.id}}\',event)">\n                            <i class="icon-heart"></i> 赞&nbsp;\n                            <span class="praise">{{post.praise}}</span>&nbsp;&nbsp;&nbsp;\n                        </a>\n                    {{/if}}\n\n                    <i class="icon-share"></i> 转发&nbsp;&nbsp;&nbsp;\n                    <a href="#" onclick="getReplies(\'{{post.id}}\',\'{{post.userId}}\')" data-postId="{{post.id}}" class="modal-trigger">\n                        <i class="icon-comment"></i> 评论&nbsp;{{post.count}}&nbsp;&nbsp;\n                    </a>\n                </span>\n            </div>\n    </li>\n    {{/each}}\n</ul>\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:4*/
    template("common/replies", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), isNotEmpty = $data.isNotEmpty, $each = $utils.$each, replies = $data.replies, $escape = ($data.reply, 
            $data.i, $utils.$escape), $out = "";
            return $out += " ", $line = 4, isNotEmpty && ($out += " ", $line = 5, $each(replies, function(reply) {
                $out += ' <li class="collection-item avatar"> <img src="', $line = 7, $out += $escape(reply.avatar), 
                $out += '" alt="" class="circle"> <span class="title">', $line = 8, $out += $escape(reply.username), 
                $out += '</span>&nbsp;&nbsp;&nbsp; <span class="date">', $line = 9, $out += $escape(reply.date), 
                $out += '</span>&nbsp;&nbsp;&nbsp; <span class="date">', $line = 10, $out += $escape(reply.floorNum), 
                $out += " 楼</span> <p> ", $line = 12, $out += $escape(reply.content), $out += ' </p> <a href="#!" class="secondary-content"><i class="icon-pencil"></i></a> </li> ', 
                $line = 16;
            }), $out += " ", $line = 17), $out += " ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--\n    回复s\n-->\n{{if isNotEmpty}}\n    {{each replies as reply i}}\n        <li class="collection-item avatar">\n            <img src="{{reply.avatar}}" alt="" class="circle">\n            <span class="title">{{reply.username}}</span>&nbsp;&nbsp;&nbsp;\n            <span class="date">{{reply.date}}</span>&nbsp;&nbsp;&nbsp;\n            <span class="date">{{reply.floorNum}} 楼</span>\n            <p>\n                {{reply.content}}\n            </p>\n            <a href="#!" class="secondary-content"><i class="icon-pencil"></i></a>\n        </li>\n    {{/each}}\n{{/if}}\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:1*/
    template("common/reply", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, avatar = $data.avatar, username = $data.username, content = $data.content, $out = "";
            return $out += ' <li class="collection-item avatar"> <img src="', $line = 5, $out += $escape(avatar), 
            $out += '" alt="" class="circle"> <span class="title">', $line = 6, $out += $escape(username), 
            $out += "</span> <p> ", $line = 8, $out += $escape(content), $out += ' </p> <a href="#!" class="secondary-content"><i class="icon-pencil"></i></a> </li>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--\n    单个回复\n-->\n<li class="collection-item avatar">\n    <img src="{{avatar}}" alt="" class="circle">\n    <span class="title">{{username}}</span>\n    <p>\n        {{content}}\n    </p>\n    <a href="#!" class="secondary-content"><i class="icon-pencil"></i></a>\n</li>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:1*/
    template("common/notices", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, list = $data.list, $escape = ($data.notice, 
            $data.i, $utils.$escape), $out = "";
            return $out += ' <ul class="timeline-content"> ', $line = 5, $each(list, function(notice) {
                $out += ' <li class="user-update"> <div class="avatar-container"> <div class="avatar"> <a target="_blank" href="/home-center/', 
                $line = 9, $out += $escape(notice.from), $out += '"> <img src="', $line = 10, $out += $escape(notice.avatar), 
                $out += '"> </a> </div> </div> <span> <a target="_blank" href="/home-center/', $line = 15, 
                $out += $escape(notice.from), $out += '">', $line = 15, $out += $escape(notice.username), 
                $out += "</a> ", $line = 15, $out += $escape(notice.action), $out += '<b></b> </span> <div class="meta"> <time>', 
                $line = 18, $out += $escape(notice.date), $out += "</time> </div> </li> ", $line = 21;
            }), $out += " </ul>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--\n    消息通知列表\n-->\n<ul class="timeline-content">\n    {{each list as notice i}}\n    <li class="user-update">\n        <div class="avatar-container">\n            <div class="avatar">\n                <a target="_blank" href="/home-center/{{notice.from}}">\n                    <img src="{{notice.avatar}}">\n                </a>\n            </div>\n        </div>\n        <span>\n             <a target="_blank" href="/home-center/{{notice.from}}">{{notice.username}}</a> {{notice.action}}<b></b>\n         </span>\n        <div class="meta">\n            <time>{{notice.date}}</time>\n        </div>\n    </li>\n    {{/each}}\n</ul>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:1*/
    template("common/nav", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, userId = $data.userId, $out = "";
            return $out += ' <div class="nav-bar"> <a href="#" onclick="toHome()"> <b>Share</b> </a> <a href="#" onclick="toHomeCenter(\'', 
            $line = 8, $out += $escape(userId), $out += '\')" class="tooltipped" data-position="right" data-delay="50" data-tooltip="个人中心"> <b><i class="icon-user icon-large"></i></b> </a> <a href="" class="tooltipped" data-position="right" data-delay="50" data-tooltip="随笔"> <b><i class="icon-pencil icon-large"></i></b> </a> <a href="" class="tooltipped" data-position="right" data-delay="50" data-tooltip="圈络"> <b><i class="icon-globe icon-large"></i></b> </a> <a href="" class="tooltipped" data-position="right" data-delay="50" data-tooltip="IM"> <b><i class="icon-comments icon-large"></i></b> </a> <a href="/home-center/', 
            $line = 20, $out += $escape(userId), $out += '" class="tooltipped" data-position="right" data-delay="50" data-tooltip="消息通知"> <b><i class="icon-lightbulb icon-large"></i></b> <i id="notice-point" class="notice-point"></i> </a> <a href="#" onclick="toEditInfo()" class="tooltipped setting" data-position="right" data-delay="50" data-tooltip="个人设置"> <b><i class="icon-cog icon-large"></i></b> </a> <a href="#" onclick="logout()" class="tooltipped logout" data-position="right" data-delay="50" data-tooltip="注销"> <b><i class="icon-signout icon-large"></i></b> </a> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--\n    左侧导航条\n-->\n<div class="nav-bar">\n    <a href="#" onclick="toHome()">\n        <b>Share</b>\n    </a>\n    <a href="#" onclick="toHomeCenter(\'{{userId}}\')" class="tooltipped" data-position="right" data-delay="50" data-tooltip="个人中心">\n        <b><i class="icon-user icon-large"></i></b>\n    </a>\n    <a href="" class="tooltipped" data-position="right" data-delay="50" data-tooltip="随笔">\n        <b><i class="icon-pencil icon-large"></i></b>\n    </a>\n    <a href="" class="tooltipped" data-position="right" data-delay="50" data-tooltip="圈络">\n        <b><i class="icon-globe icon-large"></i></b>\n    </a>\n    <a href="" class="tooltipped" data-position="right" data-delay="50" data-tooltip="IM">\n        <b><i class="icon-comments icon-large"></i></b>\n    </a>\n    <a href="/home-center/{{userId}}" class="tooltipped" data-position="right" data-delay="50" data-tooltip="消息通知">\n        <b><i class="icon-lightbulb icon-large"></i></b>\n        <i id="notice-point" class="notice-point"></i>\n    </a>\n\n    <a href="#" onclick="toEditInfo()" class="tooltipped setting" data-position="right" data-delay="50" data-tooltip="个人设置">\n        <b><i class="icon-cog icon-large"></i></b>\n    </a>\n\n    <a href="#" onclick="logout()" class="tooltipped logout" data-position="right" data-delay="50" data-tooltip="注销">\n        <b><i class="icon-signout icon-large"></i></b>\n    </a>\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:7*/
    template("chat/chat", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), include = function(filename, data) {
                data = data || $data;
                var text = $utils.$include(filename, data, $filename);
                return $out += text;
            }, $out = "";
            return $line = 1, include("./chat/chat-left-panel"), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: "{{include './chat/chat-left-panel'}}".split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    }), /*v:7*/
    template("chat/chat-left-panel", '<div class="left-aside span3"> <div class="cover-img"></div> <div class="bottom-block"> <h3>IM</h3> <p>一个基于内容分享的社区</p> <button class="btn btn-large btn-success" href="#">提笔写篇文章</button> </div> </div>');
}();