(function ($) {
    $.fn.FadingMessage = function () {
        $(document).on('click', '#tryMe', function () {
            var FADE_TIME = 3000;
            var $value = $('#ErrorMsg').val();
            var $div = $('<div class="fadeBox"></div>').text($value);
            $('body').append($div).css('color','red').append('<br>');
            $('.fadeBox').fadeOut(FADE_TIME);
        });
    }
})(jQuery);

$('#tryMe').FadingMessage();