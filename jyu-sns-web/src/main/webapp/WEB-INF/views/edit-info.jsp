<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="${ctx}/dist/Font-Awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="${ctx}/dist/materialize/css/materialize.min.css">
    <link rel="stylesheet" href="${ctx}/dist/css/home/home.css">
    <link rel="stylesheet" href="${ctx}/dist/css/common/cropbox.css">

    <title>个人资料</title>
</head>
<body>
<!--侧边导航栏-->
<div id="nav"></div>


<div id="avatar-modal" class="modal bottom-sheet">
    <div class="modal-content">
        <div class="row">
            <div class="col m4 offset-m3 s10 offset-s1">
                <div class="row">
                    <div class="imageBox col s12">
                        <div class="thumbBox"></div>
                        <div class="spinner" style="display: none"></div>
                    </div>
                    <div class="action col s12">
                            <div class="new-contentarea tc">
                                <input type="file" class="" name="upload-file" id="upload-file"/>

                                <a href="javascript:void(0)" class="upload-img">
                                     请先选择图片...
                                </a>
                            </div>
                        <button id="btnZoomIn" type="button" class="waves-effect waves-light btn"><i
                                class="icon-plus"></i></button>
                        <button id="btnZoomOut" type="button" class="waves-effect waves-light btn"><i
                                class="icon-minus"></i></button>
                        <button id="btn-crop" type="button" class="waves-effect waves-light btn">保存</button>


                        <%--<input id="btn-crop" type="button" class="Btnsty_peyton" value="OK">--%>
                        <%--<input type="button" id="btnZoomIn" class="Btnsty_peyton" value="+">--%>
                        <%--<input type="button" id="btnZoomOut" class="Btnsty_peyton" value="-">--%>
                        <%----%>
                    </div>
                </div>
            </div>
            <div class="col m3 s10 offset-s1">
                <div class="cropped"></div>
            </div>
            <div class="col m5 offset-m3">

            </div>
        </div>
    </div>
</div>


</body>
<script src="${ctx}/dist/js/common/jquery.min.js"></script>
<script src="${ctx}/build/template.js"></script>
<script>
    var nav = template('nav', null);
    $('#nav').append(nav);




</script>
<script src="${ctx}/dist/materialize/js/materialize.min.js"></script>
<script src="${ctx}/dist/js/common/cropbox.js"></script>
<script src="${ctx}/dist/js/user/cropbox.js"></script>
<script src="${ctx}/controller/user.js"></script>
<script>
    $(function () {
        $('ul.tabs').tabs('select_tab', 'tab_id');
        $('.modal-trigger').leanModal();
    });

</script>
</html>