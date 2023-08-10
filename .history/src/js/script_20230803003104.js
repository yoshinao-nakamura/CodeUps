
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



const splide = new Splide(".splide", {
  autoplay: true, // 自動再生
  type: "fade", // フェード
  rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す
  pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
  pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
  interval: 5000, // 自動再生の間隔
  speed: 2000, // スライダーの移動時間
}).mount();



スワイパーで複数のカードを一度に表示するには、スワイパー構成で「slidesPerView」プロパティを設定できます。さらに、カードの表示の問題を防ぐために、各カードとスワイパー コンテナの幅を調整する必要がある場合があります。コードを変更する方法は次のとおりです。

HTML: スワイパー コンテナにクラスを追加して、CSS のターゲットにします。
html

コードをコピーする
<div class="swiper mySwiper multiple-slides">
  <!-- Your swiper slides here -->
</div>
CSS: 複数のカードに合わせてカードの幅とスワイパー コンテナの幅を調整します。また、表示の問題を避けるために、card__meta 要素の境界線を削除します。
css
Copy code
/* Existing styles */
.cards {
  display: flex;
  gap: 1.5rem;
}

.card {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  /* Set the card width to fit multiple cards */
  width: calc(33% - 1.5rem); /* Subtract the gap width to avoid wrapping */
}

.card__img {
  position: relative;
}

.card__img::before {
  content: "";
  display: block;
  padding-top: 62.686567%;
}
.card__img img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card__body {
  padding: 1rem;
}

.card__top {
  border: #408F95 solid 0.0625rem;
  padding: 0.25rem 0.75rem;
  color: #408F95;
  font-size: 0.75rem;
  line-height: 1.83;
}

.card__sub-title {
  font-weight: $normal;
  line-height: 1.5;
}

.card__text {
  display: flex;
  justify-content: center;
  align-items: baseline;
}
.card__meta {
  text-align: center;
  /* Remove the border to avoid display issues */
  /* border-top: 1px solid #408F95; */
}
.card__meta-title {
  font-size: 0.875rem;
  font-weight: $regular;
  line-height: 1.714;
  color: #0D2936;
  padding-top: 0.5rem;
}

.card__price {
  font-size: 1.25rem;
  font-weight: $bold;
  font-family: Lato;
  line-height: 1;
  vertical-align: bottom;
  color: #C94800;
  text-decoration: line-through;
}
.card__price span {
  color: #0D2936;
}
.card__price-down {
  color: #408F95;
  font-weight: $bold;
  font-size: 2rem;
  font-family: Lato;
  line-height: 1;
}
JavaScript: 「slidesPerView」プロパティを、一度に表示するカードの数に設定します。
JavaScript

コードをコピーする
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Set the number of slides per view
  slidesPerView: 3, // Adjust this number as needed
});


 var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      freeMode: true,
      freeModeSticky: true,
      touchRatio: .03,
      grabCursor: true
    });

jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


});
