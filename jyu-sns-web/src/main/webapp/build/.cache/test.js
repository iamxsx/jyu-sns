/*TMODJS:{"debug":true,"version":15,"md5":"9b1b6e49d17330fad83b9208ae9f927b"}*/
template('test',function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,isAdmin=$data.isAdmin,$escape=$utils.$escape,title=$data.title,sex=$data.sex,$each=$utils.$each,list=$data.list,value=$data.value,i=$data.i,$out='';$line=1;if(isAdmin){
$out+=' <h1>';
$line=2;$out+=$escape(title);
$out+='</h1> ';
$line=3;if(sex == '男'){
$out+=' 我是男 ';
$line=5;}else{
$out+=' 我是女 ';
$line=7;}
$out+=' <ul> ';
$line=10;$each(list,function(value,i){
$out+=' <li>索引 ';
$line=11;$out+=$escape(i + 1);
$out+=' ：';
$line=11;$out+=$escape(value);
$out+='</li> ';
$line=12;});
$out+=' </ul> ';
$line=14;}
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'{{if isAdmin}}\n<h1>{{title}}</h1>\n{{if sex == \'男\'}}\n    我是男\n{{else}}\n    我是女\n{{/if}}\n\n<ul>\n    {{each list as value i}}\n    <li>索引 {{i + 1}} ：{{value}}</li>\n    {{/each}}\n</ul>\n{{/if}}'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});