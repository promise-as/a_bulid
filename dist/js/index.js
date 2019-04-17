'use strict';

$(function () {
    $('.check-item input:radio').click(function (e) {
        // console.log(1111, e);
        e.stopPropagation();
        // 如果想要找兄弟元素，先找其父元素然后再找儿子
        // $(this).parents('.check-item').find('.user-con').removeClass('error');
        $(this).parents('.check-item').find('.user-education').val($(this).val());
        $(this).parents('.check-item').find('.user-job').val($(this).val());
        $(this).parents('.check-item').find('.user-major').val($(this).val());
    });
});