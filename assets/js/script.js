$(function() {
    if ($(window).width() > 768) {
        var lastScrollHeight = 0;
        var lastSwitchHeight = 0;
        $(window).scroll(function(event) {
           var curTop = $(this).scrollTop();
           if (curTop == 0) {
               $(".navbar").css("padding", "20px 0");
           }
           if (lastScrollHeight - curTop > 0) {
               // Scrolled up.
               $(".navbar").stop().animate({ "marginTop" : "0px" }, 30);
               if (curTop != 0) {
                   $(".navbar").css("padding", "0");
               } else {
                   $(".navbar").css("padding", "20px 0");
               }
               lastSwitchHeight = curTop;
           }
           else if (curTop - lastSwitchHeight > 140) {
               // Scrolled down significantly.
               $(".navbar").css("padding", "0");
               $(".navbar").stop().animate({ "marginTop" : "-50px" }, 100);
               lastSwitchHeight = curTop;
           }
           lastScrollHeight = curTop;
        });
    }
});
