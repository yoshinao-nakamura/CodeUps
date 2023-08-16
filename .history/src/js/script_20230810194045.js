
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
  // slidesPerView: "auto",
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
      slidesPerView: 4,
      spaceBetween: 40,
      // width: 1265.5,
    },
  },
});
// const swiperSlides = document.querySelectorAll(".swiper-slide");
// swiperSlides.forEach(slide => {
//   slide.style.width = "333px";
//   slide.style.marginRight = "40px";
// });




!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function i(){var b,c,d={height:f.innerHeight,width:f.innerWidth};return d.height||(b=e.compatMode,(b||!a.support.boxModel)&&(c="CSS1Compat"===b?g:e.body,d={height:c.clientHeight,width:c.clientWidth})),d}function j(){return{top:f.pageYOffset||g.scrollTop||e.body.scrollTop,left:f.pageXOffset||g.scrollLeft||e.body.scrollLeft}}function k(){if(b.length){var e=0,f=a.map(b,function(a){var b=a.data.selector,c=a.$element;return b?c.find(b):c});for(c=c||i(),d=d||j();e<b.length;e++)if(a.contains(g,f[e][0])){var h=a(f[e]),k={height:h[0].offsetHeight,width:h[0].offsetWidth},l=h.offset(),m=h.data("inview");if(!d||!c)return;l.top+k.height>d.top&&l.top<d.top+c.height&&l.left+k.width>d.left&&l.left<d.left+c.width?m||h.data("inview",!0).trigger("inview",[!0]):m&&h.data("inview",!1).trigger("inview",[!1])}}}var c,d,h,b=[],e=document,f=window,g=e.documentElement;a.event.special.inview={add:function(c){b.push({data:c,$element:a(this),element:this}),!h&&b.length&&(h=setInterval(k,250))},remove:function(a){for(var c=0;c<b.length;c++){var d=b[c];if(d.element===this&&d.data.guid===a.guid){b.splice(c,1);break}}b.length||(clearInterval(h),h=null)}},a(f).on("scroll resize scrollstop",function(){c=d=null}),!g.addEventListener&&g.attachEvent&&g.attachEvent("onfocusin",function(){d=null})});



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
