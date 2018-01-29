var $document = $(document),
    $body = $('body'),
    $scrolable = $('.scrollable');
$scrolable.on({
  'mouseenter': function () {
    $body.addClass('noscroll');
  },
  'mouseleave': function () {
    $body.removeClass('noscroll');
  }
});