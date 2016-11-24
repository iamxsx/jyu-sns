/*TMODJS:{"debug":true,"version":16,"md5":"f14a768f2b9bd008094909121c7400d3"}*/
template('home-center/home-center',function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';$line=1;include('./home-center-left-panel');
$out+=' ';
$line=2;include('./home-center-content-panel');
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'{{include \'./home-center-left-panel\'}}\n{{include \'./home-center-content-panel\'}}'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});