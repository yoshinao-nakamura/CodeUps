
$(function() {
  // メニューを非表示にする
  $('.fullscreen-menu').hide();

  // ボタンをクリックしたらメニューを表示・非表示する
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    $('.fullscreen-menu').toggle();
    return false;
  });

  // メニュー内のリンクがクリックされたらメニューを非表示にする
  $('.fullscreen-menu ul li a').on('click', function() {
    $('.btn-trigger').removeClass('active');
    $('.fullscreen-menu').hide();
  });

  // メニュー以外の場所をクリックしたらメニューを非表示にする
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.fullscreen-menu').length && !$(event.target).closest('.btn-trigger').length) {
      $('.btn-trigger').removeClass('active');
      $('.fullscreen-menu').hide();
    }
  });
});

jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


});
