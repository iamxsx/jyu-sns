/*TMODJS:{"debug":true,"version":1,"md5":"8ea803701c53071576d77bc9eb247283"}*/
template('common/post',function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,$escape=$utils.$escape,avatar=$data.avatar,username=$data.username,date=$data.date,content=$data.content,id=$data.id,count=$data.count,$out='';$out+=' <li class="message" style="opacity: 1"> <a href="#"> <div class="avatar"> <img src="';
$line=7;$out+=$escape(avatar);
$out+='" alt=""> </div> <span class="username">';
$line=10;$out+=$escape(username);
$out+='</span> <span class="date pull-right"> ';
$line=12;$out+=$escape(date);
$out+=' </span> <p class="msg-content"> ';
$line=15;$out+=$escape(content);
$out+=' </p> <div class="message-option"> <span> <a href="#" praised="0" onclick="praise(\'';
$line=19;$out+=$escape(id);
$out+='\',event)"> <i class="icon-heart"></i> 赞&nbsp; <span class="praise">0</span>&nbsp;&nbsp;&nbsp; </a> <i class="icon-share"></i> 转发&nbsp;&nbsp;&nbsp; <a href="#" onclick="getReplies(\'';
$line=24;$out+=$escape(id);
$out+='\')" data-postId="';
$line=24;$out+=$escape(id);
$out+='" class="modal-trigger"> <i class="icon-comment"></i> 评论&nbsp;';
$line=25;$out+=$escape(count);
$out+='&nbsp;&nbsp; </a> </span> </div> </a> </li>';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'<!--\n    单个帖子\n-->\n<li class="message" style="opacity: 1">\n    <a href="#">\n        <div class="avatar">\n            <img src="{{avatar}}"\n                 alt="">\n        </div>\n        <span class="username">{{username}}</span>\n        <span class="date pull-right">\n            {{date}}\n        </span>\n        <p class="msg-content">\n            {{content}}\n        </p>\n        <div class="message-option">\n            <span>\n                <a href="#" praised="0" onclick="praise(\'{{id}}\',event)">\n                        <i class="icon-heart"></i> 赞&nbsp;\n                        <span class="praise">0</span>&nbsp;&nbsp;&nbsp;\n                    </a>\n                <i class="icon-share"></i> 转发&nbsp;&nbsp;&nbsp;\n                <a href="#" onclick="getReplies(\'{{id}}\')" data-postId="{{id}}" class="modal-trigger">\n                    <i class="icon-comment"></i> 评论&nbsp;{{count}}&nbsp;&nbsp;\n                </a>\n            </span>\n        </div>\n    </a>\n</li>'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});