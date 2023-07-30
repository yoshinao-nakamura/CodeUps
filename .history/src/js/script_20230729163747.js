
$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
});
$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    $('.sp-nav').toggleClass('is-active'); // Toggle the class to show/hide the navigation menu
    return false;
  });
});

jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


});
