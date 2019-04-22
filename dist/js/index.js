'use strict';

$(function () {
  // 在线审核
  $('.check-item input:radio').click(function (e) {
    e.stopPropagation();
    // 如果想要找兄弟元素，先找其父元素然后再找儿子
    $(this).parents('.check-item').find('.user-education').val($(this).val());
    $(this).parents('.check-item').find('.user-job').val($(this).val());
    $(this).parents('.check-item').find('.user-major').val($(this).val());
  });
  // 教材改动
  $(".indicator span").each(function (index, e) {
    $(this).click(function () {
      $($(".modify .modify-item")[index]).addClass("active").siblings().removeClass("active");
      $(e).addClass("active").siblings().removeClass("active");
    });
  });

  // 切换方法
  function tabHandle(ele) {
    ele.each(function (index, e) {
      $(this).click(function () {
        $(e).addClass("active").siblings().removeClass("active");
      });
    });
  }

  // 课本切换
  tabHandle($(".textbook .item"));
  // 名师切换
  tabHandle($(".teacher-row .teacher-item"));

  // 关闭广告
  $(".close").click(function () {
    $(".ad").css("display", "none");
  });

  // 回到顶部
  $(".black-to-top").click(function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});