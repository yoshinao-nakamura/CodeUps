
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
    // 375: {
    //   slidesPerView: 1.5,
    //   spaceBetween: 20,
    // },
    // when window width is >= 640px
    768: {
      slidesPerView: 3.5,
      spaceBetween: 40,
      width: 1265.5,
    },
  },
});




//要素の取得とスピードの設定
var box = $('.colorbox'),
    speed = 700;  
 
//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;
 
    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
$(this).delay(200).animate({'width':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'left':'0' , 'right':'auto'});
                   $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
     });
});
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


});
