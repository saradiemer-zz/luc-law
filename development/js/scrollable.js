$(document).ready(function() {
  function checkWidth() {
    var $body = $('body'),
      $scrolable = $('.scrollable'),
      windowSize = $(window).width();

    if (windowSize >= 991) {
      console.log("screen width is greater than or equal to 991");
      $scrolable.on({
        'mouseenter': function() {
          $body.addClass('noscroll');
        }, // mouseenter
        'mouseleave': function() {
          $body.removeClass('noscroll');
        }, // mouseleave
      }); // $scrollable.on
    } else if (windowSize <= 990) {
      console.log("screen width is less than or equal to 990");
      $scrolable.on({
        'mouseenter': function() {
          $body.removeClass('noscroll');
        }, // mouseenter
      }); // $scrollable.on
    }
  }
  // Execute on load
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);
});​
