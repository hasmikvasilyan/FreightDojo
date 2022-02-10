$(document).ready(function() {
   $(window).on('beforeunload', function() {
   $(window).scrollTop(0);
});
   

  $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffsetone = $('.analysis .right').offset().top - window.innerHeight;
        var containerOffsettwo = $('.dataScience .right').offset().top - window.innerHeight;
        var containerOffsetthree = $('.cloudData .right').offset().top - window.innerHeight;
        if (scrollOffset > containerOffsetone) {
          $(".analysis").children(".right").addClass("animateOne");
              // $(document).unbind('scroll');
        }
        if (scrollOffset > containerOffsettwo) {
          // alert("aaaaa");
          $(".dataScience ").children(".right").addClass("animateTwo");
          // $(document).unbind('scroll');
        }
        if (scrollOffset > containerOffsetthree) {
          $(".cloudData").children(".right").addClass("animateThree");
          $(document).unbind('scroll');
        }
        
    });    


});




