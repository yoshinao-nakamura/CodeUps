
// 既存の JavaScript コードを修正する部分
// $(function() {
//   // メニューを非表示にする
//   $('.fullscreen-menu').hide();

//   // ボタンをクリックしたらメニューとヘッダーを表示・非表示する
//   $('.btn-trigger').on('click', function() {
//     $(this).toggleClass('active');
//     $('.fullscreen-menu').toggleClass('active');
//     $('.header').toggleClass('active');
//     return false;
//   });

//   // メニュー内のリンクがクリックされたらメニューを非表示にする
//   $('.fullscreen-menu ul li a').on('click', function() {
//     $('.btn-trigger').removeClass('active');
//     $('.fullscreen-menu').removeClass('active');
//     $('.header').removeClass('active');
//   });

//   // メニュー以外の場所をクリックしたらメニューを非表示にする
//   $(document).on('click', function(event) {
//     if (!$(event.target).closest('.fullscreen-menu').length && !$(event.target).closest('.btn-trigger').length) {
//       $('.btn-trigger').removeClass('active');
//       $('.fullscreen-menu').removeClass('active');
//       $('.header').removeClass('active');
//     }
//   });
// });
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


const swiper = new Swiper(".swiper", {
  loop: true,
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // スライドの表示枚数
  slidesPerView: 1,
  breakpoints: {
    // スライドの表示枚数：600px以上の場合
    600: {
      slidesPerView: 2,
    },
    // スライドの表示枚数：768px以上の場合
    768: {
      slidesPerView: 1.5,
    },
    // スライドの表示枚数：1025px以上の場合
    1025: {
      slidesPerView: 4,
    },
  },
});


jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


});
