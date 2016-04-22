$(function(){
  var pageTop = $(".page-top");
  pageTop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
  $(window).scroll(function () {
    if($(this).scrollTop() >= 200) {
      pageTop.css( "transform", "rotateY(0deg)" );
    } else {
      pageTop.css( "transform", "rotateY(270deg)" );
    }
  });
});