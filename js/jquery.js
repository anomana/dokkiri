// クリックでなめらかに移動
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var header = $('header').height();
    //ヘッダーの高さを引く
    var position = target.offset().top - header;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
// Topに戻る
$(function(){
  var pagetop = $('#page_top');
  pagetop.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});
// warnning
$(function(){
  var judje = 0;
  var warnning = $('#warnning');
  warnning.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000 && judje == 0) {
      judje = 1;
      warnning.fadeIn();
      var sec = 0;
      var min = 5;
      var timer = setInterval(function() {
        // タイマー停止
        if (min == 0 && sec == 1) {
          clearInterval(timer);
        }
        sec -= 1;
        if (sec < 1 && min > 0) {
          sec = 59;
          min -= 1;
        }
        sec_number = ('0' + sec).slice(-2);
        min_number = ('0' + min).slice(-2);
        $('#time_limit').text(min_number + ':' + sec_number);
      },1000); 
    }
  });
});
// mobile
$(function(){
  $('.mobile').on('click', function () {
    $('.mobile, .header-list, #page_top').toggleClass('show');
  });
});
// ハンバーガーメニュー内リンククリック
$(function(){
  $('.header-list a[href]').on('click', function(event) {
    $('.mobile').trigger('click');
  });
});

$(document).on('click', function(e) {
  if (!$(e.target).closest('.mobile').length) {
    $('.mobile').trigger('click');
  }
});
