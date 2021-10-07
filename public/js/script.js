(function($) {
    "use strict";
$(window).on('scroll load', function() {
    if ($(".navbar").offset().top > 60) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
    
});})(jQuery);