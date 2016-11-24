/*TMODJS:{"debug":true,"version":41,"md5":"7b417c53d4b44b9d2d7db853a438da89"}*/
template('replies',function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,isNotEmpty=$data.isNotEmpty,$each=$utils.$each,replies=$data.replies,reply=$data.reply,i=$data.i,$escape=$utils.$escape,$out='';$out+=' ';
$line=4;if(isNotEmpty){
$out+=' ';
$line=5;$each(replies,function(reply,i){
$out+=' <li class="collection-item avatar"> <img src="';
$line=7;$out+=$escape(reply.avatar);
$out+='" alt="" class="circle"> <span class="title">';
$line=8;$out+=$escape(reply.username);
$out+='</span>&nbsp;&nbsp;&nbsp; <span class="date">';
$line=9;$out+=$escape(reply.date);
$out+='</span>&nbsp;&nbsp;&nbsp; <span class="date">';
$line=10;$out+=$escape(reply.floorNum);
$out+=' 楼</span> <p> ';
$line=12;$out+=$escape(reply.content);
$out+=' </p> <a href="#!" class="secondary-content"><i class="icon-pencil"></i></a> </li> ';
$line=16;});
$out+=' ';
$line=17;}else{
$out+=' <p>暂无回复</p> ';
$line=19;}
$out+=' ';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'<!--\n    回复s\n-->\n{{if isNotEmpty}}\n    {{each replies as reply i}}\n        <li class="collection-item avatar">\n            <img src="{{reply.avatar}}" alt="" class="circle">\n            <span class="title">{{reply.username}}</span>&nbsp;&nbsp;&nbsp;\n            <span class="date">{{reply.date}}</span>&nbsp;&nbsp;&nbsp;\n            <span class="date">{{reply.floorNum}} 楼</span>\n            <p>\n                {{reply.content}}\n            </p>\n            <a href="#!" class="secondary-content"><i class="icon-pencil"></i></a>\n        </li>\n    {{/each}}\n    {{else}}\n    <p>暂无回复</p>\n{{/if}}\n'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});