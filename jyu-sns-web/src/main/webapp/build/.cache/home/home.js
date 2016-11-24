/*TMODJS:{"debug":true,"version":16,"md5":"f442f2bcd8dbd5ce4831925d6988403e"}*/
template('home/home',function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';$line=1;include('./home-left-panel');
$out+=' ';
$line=2;include('./home-content-panel');
$out+=' ';
$line=3;include('./home-float-button');
$out+=' ';
$line=4;include('../modal/modal-publish-post');
$out+=' ';
$line=5;include('../modal/modal-reply-post');
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'{{include \'./home-left-panel\'}}\n{{include \'./home-content-panel\'}}\n{{include \'./home-float-button\'}}\n{{include \'../modal/modal-publish-post\'}}\n{{include \'../modal/modal-reply-post\'}}'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});