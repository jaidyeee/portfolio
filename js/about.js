$(function () {
    $('.p_txt').hide();

    $('.p_tit').on('mouseenter mouseleave', function () {
        $(this).closest('.philo_txtbox').find('.p_txt').stop().slideToggle(300);
    });
    let philosophyswiper2 = new Swiper(".philosophy .slide", {
        loop:true,
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
    });

});