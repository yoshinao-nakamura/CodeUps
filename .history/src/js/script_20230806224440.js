
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





jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


});
