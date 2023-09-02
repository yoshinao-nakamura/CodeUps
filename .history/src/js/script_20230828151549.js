
$(document).ready(function() {
  $("#btn02").click(function() {
    $(this).toggleClass("active");
    $("#menu").toggleClass("active");
    $(".header").toggleClass("active");
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


const mainSwiper = new Swiper(".mySwiper", {
  loop: true, // 無限ループを有効にする
  spaceBetween: 30,
  centeredSlides: false, // centeredSlidesをfalseに設定
  slidesPerView: 1,     // 1枚表示
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
    375: {
      slidesPerView: 1, 
      spaceBetween: 24,
      width: 280,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
      width: 1440,
    },
  },
});
const swiperSlides = document.querySelectorAll(".swiper-slide");
swiperSlides.forEach(slide => {
  autoHeight: true,
  slide.style.width = "333px";
  slide.style.marginRight = "40px";
});


// $(document).ready(function() {
// //要素の取得とスピードの設定
// var box = $('.colorbox'),
//     speed = 700;  
 
// //.colorboxの付いた全ての要素に対して下記の処理を行う
// box.each(function(){
//     $(this).append('<div class="color"></div>')
//     var color = $(this).find($('.color')),
//     image = $(this).find('img');
//     var counter = 0;
 
//     image.css('opacity','0');
//     color.css('width','0%');
//     //inviewを使って背景色が画面に現れたら処理をする
//     color.on('inview', function(){
//         if(counter == 0){
//             $(this).delay(200).animate({'width':'100%'},speed,function(){
//                    image.css('opacity','1');
//                    $(this).css({'left':'0' , 'right':'auto'});
//                    $(this).animate({'width':'0%'},speed);
//                 })
//             counter = 1;
//           }
//      });
// });
// });





$(function () {
  const pageTop = $("#page-top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) { // 100pxスクロールしたら発火
      pageTop.fadeIn(); // 100px以上スクロールしたらボタンをフェードイン
    } else {
      pageTop.fadeOut(); // 100px以下になったらボタンをフェードアウト
    }
  });
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500 // 500ミリ秒かけてページトップに戻る
    );
    return false;
  });
});

jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


});

