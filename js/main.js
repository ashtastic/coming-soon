var $wholeHead = $('#whole-head');

$wholeAntenna.on('click', function () {
  if ($wholeAntenna.hasClass('flick')) {
    $wholeAntenna.removeClass('flick');
  } else {
    $wholeAntenna.addClass('flick');
  }
});
