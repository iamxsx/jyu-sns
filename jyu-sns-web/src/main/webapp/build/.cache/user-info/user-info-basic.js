/*TMODJS:{"debug":true,"version":3,"md5":"4697c2ec9d78bae4fc05811a27594e02"}*/
template('user-info/user-info-basic',function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,$escape=$utils.$escape,avatar=$data.avatar,id=$data.id,description=$data.description,sign=$data.sign,account=$data.account,username=$data.username,sex=$data.sex,phone=$data.phone,email=$data.email,$out='';$out+='<div class="basic-info col m6 offset-m3 s12 "> <div class="change-avatar"> <img src="';
$line=3;$out+=$escape(avatar);
$out+='" class="materialboxed" alt=""> <a href="#avatar-modal" class="modal-trigger">点击修改头像</a> </div> <form class="col s12" id="form-user-info"> <input type="hidden" id="userId" value="';
$line=8;$out+=$escape(id);
$out+='"> <div class="row"> <div class="input-field col s12"> <textarea id="description" class="materialize-textarea"> ';
$line=12;$out+=$escape(description);
$out+=' </textarea> <label for="description">个人简介</label> </div> </div> <div class="row"> <div class="input-field col s12"> <input id="sign" type="text" name="sign" value="';
$line=19;$out+=$escape(sign);
$out+='"> <label for="sign">个性签名</label> </div> </div> <div class="row"> <div class="input-field col s6"> <input id="account" type="text" name="account" class="validate" value="';
$line=25;$out+=$escape(account);
$out+='"> <label for="account">账号</label> </div> <div class="input-field col s6"> <input id="username" type="text" class="validate" value="';
$line=29;$out+=$escape(username);
$out+='"> <label for="username">昵称</label> </div> </div> <div class="row"> <div class="col s12"> <p> ';
$line=36;if(sex == '1'){
$out+=' <input class="with-gap" name="sex" type="radio" value="1" id="male" checked/> <label for="male">男</label> <input class="with-gap" name="sex" type="radio" value="2" id="female"/> <label for="female">女</label> <input class="with-gap" name="sex" type="radio" value="0" id="other"/> <label for="other">未设置</label> ';
$line=45;}else if(sex == '2'){
$out+=' <input class="with-gap" name="sex" type="radio" value="1" id="male" /> <label for="male">男</label> <input class="with-gap" name="sex" type="radio" value="2" id="female" checked/> <label for="female">女</label> <input class="with-gap" name="sex" type="radio" value="0" id="other"/> <label for="other">未设置</label> ';
$line=54;}else{
$out+=' <input class="with-gap" name="sex" type="radio" value="1" id="male" /> <label for="male">男</label> <input class="with-gap" name="sex" type="radio" value="2" id="female" /> <label for="female">女</label> <input class="with-gap" name="sex" type="radio" value="0" id="other" checked/> <label for="other">未设置</label> ';
$line=63;}
$out+=' </p> </div> </div> <div class="row"> <div class="input-field col s12"> <input id="phone" type="text" class="validate" value="';
$line=69;$out+=$escape(phone);
$out+='"> <label for="phone">手机号</label> </div> </div> <div class="row"> <div class="input-field col s12"> <input id="email" type="email" class="validate" value="';
$line=75;$out+=$escape(email);
$out+='"> <label for="email">邮箱</label> </div> </div> <div class="row"> <div class="col s12"> <button type="button" onclick="updateUserInfo()" class="waves-effect waves-light btn"><i class="icon-ok"></i> 保存修改</button> </div> </div> </form> </div>';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'<div class="basic-info col m6 offset-m3 s12 ">\n    <div class="change-avatar">\n        <img src="{{avatar}}" class="materialboxed"\n             alt="">\n        <a href="#avatar-modal" class="modal-trigger">点击修改头像</a>\n    </div>\n    <form class="col s12" id="form-user-info">\n        <input type="hidden" id="userId" value="{{id}}">\n        <div class="row">\n            <div class="input-field col s12">\n                <textarea id="description" class="materialize-textarea">\n                    {{description}}\n                </textarea>\n                <label for="description">个人简介</label>\n            </div>\n        </div>\n        <div class="row">\n            <div class="input-field col s12">\n                <input id="sign" type="text" name="sign" value="{{sign}}">\n                <label for="sign">个性签名</label>\n            </div>\n        </div>\n        <div class="row">\n            <div class="input-field col s6">\n                <input id="account" type="text" name="account" class="validate" value="{{account}}">\n                <label for="account">账号</label>\n            </div>\n            <div class="input-field col s6">\n                <input id="username" type="text" class="validate" value="{{username}}">\n                <label for="username">昵称</label>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col s12">\n                <p>\n                    {{if sex == \'1\'}}\n                        <input class="with-gap" name="sex" type="radio" value="1" id="male" checked/>\n                        <label for="male">男</label>\n\n                        <input class="with-gap" name="sex" type="radio" value="2" id="female"/>\n                        <label for="female">女</label>\n\n                        <input class="with-gap" name="sex" type="radio" value="0" id="other"/>\n                        <label for="other">未设置</label>\n                        {{else if sex == \'2\'}}\n                        <input class="with-gap" name="sex" type="radio" value="1" id="male" />\n                        <label for="male">男</label>\n\n                        <input class="with-gap" name="sex" type="radio" value="2" id="female" checked/>\n                        <label for="female">女</label>\n\n                        <input class="with-gap" name="sex" type="radio" value="0" id="other"/>\n                        <label for="other">未设置</label>\n                        {{else}}\n                        <input class="with-gap" name="sex" type="radio" value="1" id="male" />\n                        <label for="male">男</label>\n\n                        <input class="with-gap" name="sex" type="radio" value="2" id="female" />\n                        <label for="female">女</label>\n\n                        <input class="with-gap" name="sex" type="radio" value="0" id="other" checked/>\n                        <label for="other">未设置</label>\n                    {{/if}}\n                </p>\n            </div>\n        </div>\n        <div class="row">\n            <div class="input-field col s12">\n                <input id="phone" type="text" class="validate" value="{{phone}}">\n                <label for="phone">手机号</label>\n            </div>\n        </div>\n        <div class="row">\n            <div class="input-field col s12">\n                <input id="email" type="email" class="validate" value="{{email}}">\n                <label for="email">邮箱</label>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col s12">\n                <button type="button" onclick="updateUserInfo()" class="waves-effect waves-light btn"><i class="icon-ok"></i> 保存修改</button>\n            </div>\n        </div>\n    </form>\n</div>'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});