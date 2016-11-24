/*TMODJS:{"debug":true,"version":13,"md5":"6079f814f1b7376495852157b15cc7dd"}*/
template('user-info/user-info',function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';$out+='<div class="user-info"> <div class="row"> <div class="col s9"> <ul class="tabs"> <li class="tab col s3"><a class="active" href="#panel1">基本资料</a></li> <li class="tab col s3"><a href="#panel2">修改密码</a></li> <li class="tab col s3"><a href="#panel3">设置</a></li> </ul> </div> <div id="panel1" class="col s12"> <!-- 动态载入 ';
$line=13;include('./user-info-basic');
$out+=' --> </div> <div id="panel2" class="col s12"> ';
$line=17;include('./user-info-password');
$out+=' </div> <div id="panel3" class="col s12"> ';
$line=20;include('./user-info-others');
$out+=' </div> </div> </div>';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'<div class="user-info">\n    <div class="row">\n        <div class="col s9">\n            <ul class="tabs">\n                <li class="tab col s3"><a class="active" href="#panel1">基本资料</a></li>\n                <li class="tab col s3"><a href="#panel2">修改密码</a></li>\n                <li class="tab col s3"><a href="#panel3">设置</a></li>\n            </ul>\n        </div>\n        <div id="panel1" class="col s12">\n            <!--\n                动态载入\n                {{include \'./user-info-basic\'}}\n            -->\n        </div>\n        <div id="panel2" class="col s12">\n            {{include \'./user-info-password\'}}\n        </div>\n        <div id="panel3" class="col s12">\n            {{include \'./user-info-others\'}}\n        </div>\n    </div>\n</div>'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});