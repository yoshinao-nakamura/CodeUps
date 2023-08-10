
$(document).ready(function() {
  // モバイルメニューをデフォルトで非表示にする
  $('.fullscreen-menu').hide();

  // ボタンがクリックされたときに、モバイルメニューとヘッダーの表示・非表示を切り替える
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    $('.fullscreen-menu').toggleClass('active');
    $('.header').toggleClass('active');
  });

  // モバイルメニュー内のリンクがクリックされたときに、メニューを非表示にする
  $('.fullscreen-menu ul li a').on('click', function() {
    $('.btn-trigger').removeClass('active');
    $('.fullscreen-menu').removeClass('active');
    $('.header').removeClass('active');
  });

  // モバイルメニュー以外の場所をクリックしたときに、メニューを非表示にする
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.fullscreen-menu').length && !$(event.target).closest('.btn-trigger').length) {
      $('.btn-trigger').removeClass('active');
      $('.fullscreen-menu').removeClass('active');
      $('.header').removeClass('active');
    }
  });
});


const splide = new Splide(".splide", {
  autoplay: true, // 自動再生
  type: "fade", // フェード
  rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す
  pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
  pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
  interval: 5000, // 自動再生の間隔
  speed: 2000, // スライダーの移動時間
}).mount();

// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


// const mainSwiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   // Responsive breakpoints
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//     // when window width is >= 640px
//     640: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//     {
//       loop: true, // ループ有効
//       slidesPerView: 3, // 一度に表示する枚数
//       speed: 6000, // ループの時間
//       allowTouchMove: false, // スワイプ無効
//       autoplay: {
//         delay: 0, // 途切れなくループ
//       },
//   },
// });


const mainSwiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
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
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

const additionalSwiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  speed: 6000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
  },
});

jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


});
