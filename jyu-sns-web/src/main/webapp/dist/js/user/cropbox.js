/**
 * Created by clouder on 16-11-19.
 */
var options = {
    thumbBox: '.thumbBox',
    spinner: '.spinner',
    imgSrc: ''
}

var cropper = $('.imageBox').cropbox(options);
var img = "";
$('#upload-file').on('change', function () {
    var reader = new FileReader();
    reader.onload = function (e) {
        options.imgSrc = e.target.result;
        cropper = $('.imageBox').cropbox(options);
        getImg();
    }
    reader.readAsDataURL(this.files[0]);
    this.files = [];
    //getImg();
})

function getImg() {
    img = cropper.getDataURL();
    $('.cropped').html('');
    $('.cropped').append('<img src="' + img + '" align="absmiddle" style="width:160px;margin-top:4px;border-radius:160px;box-shadow:0px 0px 12px #7E7E7E;"><p>180px*180px</p>');
    $('.cropped').append('<img src="' + img + '" align="absmiddle" style="width:106px;margin-top:4px;border-radius:106px;box-shadow:0px 0px 12px #7E7E7E;"><p>128px*128px</p>');
    $('.cropped').append('<img src="' + img + '" align="absmiddle" style="width:48px;margin-top:4px;border-radius:48px;box-shadow:0px 0px 12px #7E7E7E;" ><p>64px*64px</p>');
}

$(".imageBox").on("mouseup", function () {
    getImg();
});

$('#btnZoomIn').on('click', function () {
    cropper.zoomIn();
});

$('#btnZoomOut').on('click', function () {
    cropper.zoomOut();
});

$('#btn-crop').on('click', function () {
    var avatar = cropper.getDataURL();
    uploadAvatar(avatar);
});



function uploadAvatar(avatar) {
    $.ajax({
        url:'user/update-avatar',
        type:'post',
        data:{
            avatar:avatar
        },
        success:function (result,status) {
            if (status == 'success') {
                Materialize.toast("头像上传成功",1000);
                window.location.href = '/edit-info';
            }
        },
        error:function () {
            Materialize.toast("头像上传失败",1000);
        }
    });
}