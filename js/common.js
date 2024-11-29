$(function(){
      //햄버거
  $('.hamburger_slim').click(function () {
    $('.main_menu').slideToggle();
  });


  $('.main_menu li a').click(function (e) {
    e.preventDefault();
    let thishref = $(this).attr('href');
    $('.main_menu').slideUp(500, function () {
      location.href = thishref;
    });
  });

  // 스크롤 시 배경 변경 효과
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('header').addClass('scrolled');
    } else {
      $('header').removeClass('scrolled');
    }
  });
  
});