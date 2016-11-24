/*TMODJS:{"debug":true,"version":1,"md5":"16a707e35d0bdbfea2dfb9b78c1d3e3b"}*/
template('common/posts',function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,$each=$utils.$each,list=$data.list,post=$data.post,i=$data.i,$escape=$utils.$escape,value=$data.value,$out='';$out+=' <ul id="messages-list" class="messages-list"> ';
$line=5;$each(list,function(post,i){
$out+=' <li class="message"> ';
$line=7;$out+=$escape(value);
$out+=' <div class="avatar"> <a href="/home-center/';
$line=9;$out+=$escape(post.userId);
$out+='"> <img src="';
$line=10;$out+=$escape(post.avatar);
$out+='" alt=""> </a> </div> <span class="username">';
$line=14;$out+=$escape(post.username);
$out+='</span> <span class="date pull-right"> ';
$line=16;$out+=$escape(post.date);
$out+=' </span> <p class="msg-content"> ';
$line=19;$out+=$escape(post.content);
$out+=' </p> <div class="message-option"> <span> ';
$line=23;if(post.alreadyPraise){
$out+=' <a href="#" style="color:#f47c60" praised="1" onclick="praise(\'';
$line=24;$out+=$escape(post.id);
$out+='\',event)"> <i class="icon-heart"></i> 赞&nbsp; <span class="praise">';
$line=26;$out+=$escape(post.praise);
$out+='</span>&nbsp;&nbsp;&nbsp; </a> ';
$line=28;}else{
$out+=' <a href="#" praised="0" onclick="praise(\'';
$line=29;$out+=$escape(post.id);
$out+='\',event)"> <i class="icon-heart"></i> 赞&nbsp; <span class="praise">';
$line=31;$out+=$escape(post.praise);
$out+='</span>&nbsp;&nbsp;&nbsp; </a> ';
$line=33;}
$out+=' <i class="icon-share"></i> 转发&nbsp;&nbsp;&nbsp; <a href="#" onclick="getReplies(\'';
$line=36;$out+=$escape(post.id);
$out+='\',\'';
$line=36;$out+=$escape(post.userId);
$out+='\')" data-postId="';
$line=36;$out+=$escape(post.id);
$out+='" class="modal-trigger"> <i class="icon-comment"></i> 评论&nbsp;';
$line=37;$out+=$escape(post.count);
$out+='&nbsp;&nbsp; </a> </span> </div> </li> ';
$line=42;});
$out+=' </ul> ';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'<!--\n    帖子s\n-->\n<ul id="messages-list" class="messages-list">\n    {{each list as post i}}\n    <li class="message">\n        {{value}}\n            <div class="avatar">\n                <a href="/home-center/{{post.userId}}">\n                    <img src="{{post.avatar}}"\n                         alt="">\n                </a>\n            </div>\n            <span class="username">{{post.username}}</span>\n            <span class="date pull-right">\n                {{post.date}}\n            </span>\n            <p class="msg-content">\n                {{post.content}}\n            </p>\n            <div class="message-option">\n                <span>\n                    {{if post.alreadyPraise}}\n                        <a href="#" style="color:#f47c60" praised="1" onclick="praise(\'{{post.id}}\',event)">\n                            <i class="icon-heart"></i> 赞&nbsp;\n                            <span class="praise">{{post.praise}}</span>&nbsp;&nbsp;&nbsp;\n                        </a>\n                    {{else}}\n                        <a href="#" praised="0" onclick="praise(\'{{post.id}}\',event)">\n                            <i class="icon-heart"></i> 赞&nbsp;\n                            <span class="praise">{{post.praise}}</span>&nbsp;&nbsp;&nbsp;\n                        </a>\n                    {{/if}}\n\n                    <i class="icon-share"></i> 转发&nbsp;&nbsp;&nbsp;\n                    <a href="#" onclick="getReplies(\'{{post.id}}\',\'{{post.userId}}\')" data-postId="{{post.id}}" class="modal-trigger">\n                        <i class="icon-comment"></i> 评论&nbsp;{{post.count}}&nbsp;&nbsp;\n                    </a>\n                </span>\n            </div>\n    </li>\n    {{/each}}\n</ul>\n'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});