/*TMODJS:{"debug":true,"version":1,"md5":"183b972d22250cd0bec5aa886597d5d7"}*/
template('common/reply',function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,$escape=$utils.$escape,avatar=$data.avatar,username=$data.username,content=$data.content,$out='';$out+=' <li class="collection-item avatar"> <img src="';
$line=5;$out+=$escape(avatar);
$out+='" alt="" class="circle"> <span class="title">';
$line=6;$out+=$escape(username);
$out+='</span> <p> ';
$line=8;$out+=$escape(content);
$out+=' </p> <a href="#!" class="secondary-content"><i class="icon-pencil"></i></a> </li>';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'<!--\n    单个回复\n-->\n<li class="collection-item avatar">\n    <img src="{{avatar}}" alt="" class="circle">\n    <span class="title">{{username}}</span>\n    <p>\n        {{content}}\n    </p>\n    <a href="#!" class="secondary-content"><i class="icon-pencil"></i></a>\n</li>'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});