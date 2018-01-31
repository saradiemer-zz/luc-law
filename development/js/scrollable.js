$(window).resize(function() {
  if ($(window).width() >= 991) {
    var $body = $('body'),
        $scrolable = $('.scrollable');
    $scrolable.on({
      'mouseenter': function() {
        $body.addClass('noscroll');
      }, // mouseenter
      'mouseleave': function() {
        $body.removeClass('noscroll');
      }, // mouseleave
    }); //$scrollable.on
  } // if
  else {
    $scrolable.on({
      'mouseenter': function() {
        $body.addClass();
      }, // mouseenter
    }); //$scrollable.on
  } // else
}); // function
