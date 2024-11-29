$(function () {
  /* nav_bg 네비게이션 */
  $('header .h_bottom nav ul.gnb>li,.nav_bg').hover(function () {
    $('ul.sub,.nav_bg').stop().slideDown();
  }, function () {
    $('ul.sub,.nav_bg').stop().slideUp();
  })

  /* slide_next+prev */
  let conutrySwiper = new Swiper(".country_slide", {
    slidesPerView: 2,
    slidePerGroup: 1,
    spaceBetween: 30,
    breakpoints: {
      1024: {
        slidesPerView: 'auto',
        slidePerGroup: 2,
      },
      1337: {
        slidesPerView: 'auto',
        slidePerGroup: 4,
      }
    },
    navigation: {
      nextEl: ".go .next",
      prevEl: ".go .prev",
    },
  });

  let bestSwiper = new Swiper(".best .slide", {
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      1337: {
        slidesPerView: 'auto',
        slidePerGroup: 2,
      }
    },
    navigation: {
      nextEl: ".best .next",
      prevEl: ".best .prev",
    },    
  });
  let privateSwiper = new Swiper(".private .slide", {
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      1337: {
        slidesPerView: 'auto',
        slidePerGroup: 2,
      }
    },
    navigation: {
      nextEl: ".private .next",
      prevEl: ".private .prev",
    },
  });

  /* 캘린더 */
  $('.fa-calendar-days').click(function () {
    $(this).parent().append('<input type="date">');
  });

  /* button */
  let sns_img_src = [[], [], [], []]
  let ft_p = []
  let num = []
  let sns_h4 = []
  let bottom_img_src = []
  let info_strong = []
  let info_span = []


  let changeHtml = `<a href="#">
                                    <div class="from_sns">
                                        <img src="img/from_photo01.png" alt="from_sns_photo01">
                                        <div class="from_txt">
                                            <div class="from_top">
                                                <p><i class="fa-solid fa-location-dot"></i> 영국 - 런던 (LONDON)</p>
                                                <div class="bubble">
                                                    <img src="img/speech bubble.png" alt="comment_icon"><b>12</b>
                                                </div>
                                            </div>
                                            <h4>영국에서 가장 오래된 시장, 버러 마켓</h4>
                                            <div class="from_bottom">
                                                <img src="img/guide_jieun_p.png" alt="guide_p01">
                                                <div class="guide_info">
                                                    <strong>이지은 가이드</strong>
                                                    <span>jieun_lee@aroundtravel.kr</span>
                                                </div>
                                            </div>
                                        </div><!-- //.from_txt -->
                                    </div><!-- //.from_sns -->
                                </a>`

});