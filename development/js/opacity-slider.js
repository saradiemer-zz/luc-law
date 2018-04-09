$('#bgopacity').on('input', function (value) {
  $('.opacity-slider-layer-01').css({
    opacity: $(this).val() * '.01'
  });
});
