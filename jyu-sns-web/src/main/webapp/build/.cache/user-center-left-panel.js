/*TMODJS:{"debug":true,"version":27,"md5":"7e3f23a2951bf6ecaac7f79118d3a746"}*/
template('user-center-left-panel',function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,$escape=$utils.$escape,bgImg=$data.bgImg,avatar=$data.avatar,follower=$data.follower,fans=$data.fans,articleCount=$data.articleCount,liked=$data.liked,$out='';$out+='<div class="user-center-left"> <div class="cover-img" id="cover-img" style="background-image: url(\'';
$line=2;$out+=$escape(bgImg);
$out+='\')"></div> <div class="info-content"> <div class="avatar"> <img src="';
$line=5;$out+=$escape(avatar);
$out+='" alt=""> </div> <a href="/edit-info">编辑个人资料</a> <div class="user-stats"> <ul class="clearfix"> <li> <a><b>';
$line=11;$out+=$escape(follower);
$out+='</b><span>关注</span></a> </li> <li> <a><b>';
$line=14;$out+=$escape(fans);
$out+='</b><span>粉丝</span></a> </li> <br> <li> <a><b>';
$line=18;$out+=$escape(articleCount);
$out+='</b><span>文章</span></a> </li> <li> <a><b>0</b><span>赞</span></a> </li> <li> <a><b>';
$line=24;$out+=$escape(liked);
$out+='</b><span>收获赞</span></a> </li> </ul> </div> </div> <div class="change-bg"> <a href="#" onclick="document.getElementById(\'home-bg\').click();return false;" class="tooltipped" data-position="top" data-delay="50" data-tooltip="点击修改背景图片"> <i class="icon-picture"></i> </a> </div> </div>';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'<div class="user-center-left">\n    <div class="cover-img" id="cover-img"　style="background-image: url(\'{{bgImg}}\')"></div>\n    <div class="info-content">\n        <div class="avatar">\n            <img src="{{avatar}}" alt="">\n        </div>\n        <a href="/edit-info">编辑个人资料</a>\n        <div class="user-stats">\n            <ul class="clearfix">\n                <li>\n                    <a><b>{{follower}}</b><span>关注</span></a>\n                </li>\n                <li>\n                    <a><b>{{fans}}</b><span>粉丝</span></a>\n                </li>\n                <br>\n                <li>\n                    <a><b>{{articleCount}}</b><span>文章</span></a>\n                </li>\n                <li>\n                    <a><b>0</b><span>赞</span></a>\n                </li>\n                <li>\n                    <a><b>{{liked}}</b><span>收获赞</span></a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class="change-bg">\n        <a href="#" onclick="document.getElementById(\'home-bg\').click();return false;" class="tooltipped"\n           data-position="top" data-delay="50" data-tooltip="点击修改背景图片">\n            <i class="icon-picture"></i>\n        </a>\n    </div>\n</div>'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});