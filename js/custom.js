$(function () {

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Popular Slider

  var swiper = new Swiper(".popularSwipper", {
    slidesPerView: 4,
    spaceBetween: 10,
    freeMode: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2, 
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });

  // Back to Top 
  var btn = $('.backtotop');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });


  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  
  $(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
       $('.header_main').addClass('headerFloating');
    } else {
       $('.header_main').removeClass('headerFloating');
    }
  });

  new VenoBox({
    selector: '.my-video-links',
  });

});
