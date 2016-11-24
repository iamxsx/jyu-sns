/*TMODJS:{"debug":true,"version":1,"md5":"d30d8568fa82a5791438c55b347e5a6b"}*/
template('common/notices',function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,$each=$utils.$each,list=$data.list,notice=$data.notice,i=$data.i,$escape=$utils.$escape,$out='';$out+=' <ul class="timeline-content"> ';
$line=5;$each(list,function(notice,i){
$out+=' <li class="user-update"> <div class="avatar-container"> <div class="avatar"> <a target="_blank" href="/home-center/';
$line=9;$out+=$escape(notice.from);
$out+='"> <img src="';
$line=10;$out+=$escape(notice.avatar);
$out+='"> </a> </div> </div> <span> <a target="_blank" href="/home-center/';
$line=15;$out+=$escape(notice.from);
$out+='">';
$line=15;$out+=$escape(notice.username);
$out+='</a> ';
$line=15;$out+=$escape(notice.action);
$out+='<b></b> </span> <div class="meta"> <time>';
$line=18;$out+=$escape(notice.date);
$out+='</time> </div> </li> ';
$line=21;});
$out+=' </ul>';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'<!--\n    消息通知列表\n-->\n<ul class="timeline-content">\n    {{each list as notice i}}\n    <li class="user-update">\n        <div class="avatar-container">\n            <div class="avatar">\n                <a target="_blank" href="/home-center/{{notice.from}}">\n                    <img src="{{notice.avatar}}">\n                </a>\n            </div>\n        </div>\n        <span>\n             <a target="_blank" href="/home-center/{{notice.from}}">{{notice.username}}</a> {{notice.action}}<b></b>\n         </span>\n        <div class="meta">\n            <time>{{notice.date}}</time>\n        </div>\n    </li>\n    {{/each}}\n</ul>'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});