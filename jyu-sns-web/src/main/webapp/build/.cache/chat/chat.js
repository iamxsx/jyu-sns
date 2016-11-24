/*TMODJS:{"debug":true,"version":7,"md5":"b7fca80e7860bb99bf48538ef8f02f83"}*/
template('chat/chat',function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';$line=1;include('./chat/chat-left-panel');
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'{{include \'./chat/chat-left-panel\'}}'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});