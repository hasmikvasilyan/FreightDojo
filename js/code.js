$(document).ready(function() {
  
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    $(".responsiveMenu").removeClass("open");
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
   $(".burgerMenu").click(function(){
    $(".responsiveMenu").addClass("open");
 });
  $('.playBtn').click(function(){
    $(".popupWrap").addClass("show");
 });
  $('.fa-times').click(function(){
    $(".popupWrap").removeClass("show");
       $('.video').attr('src', $('iframe').attr('src'));
       
       // $('.video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
 });
 
 $(".close").click(function(){
    $(".responsiveMenu").removeClass("open");
 });
 $(".message .btn").click(function(){
    $(".message").addClass("hide");
 });
$(".faqItem").click(function(){
  $(this).toggleClass("active");
  $(this).children("p").slideToggle();
});

$('.career').click(function(){  
    $('.career').removeClass("selected");
    $(this).addClass("selected");
    $('.jobPost').removeClass("active");
    $('.jobPost[data-type="' + $(this).attr('data-type') + '"]').addClass('active');
});
$(".arrowDown").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutUs").offset().top
    }, 1000);
  });
$('.careerSelect').change(function(){
  // alert("aaaa");
  $('.jobPost').removeClass("active");
  console.log($(this).attr('data-type'));
    $('.jobPost[data-type="' + $(this).find(':selected').attr('data-type') + '"]').addClass('active');
});
$( ".heading" ).click(function() {
  $(this).toggleClass("open");
  $(this).siblings().slideToggle( "slow", function() {
    // Animation complete.
  });
});
  $(window).scroll(function(){
    if ($(this).scrollTop() > $("#aboutUs").offset().top) {
      $('.goUp').fadeIn();
    } 
    else {
      $('.goUp').fadeOut();
    }
  });

  $('.goUp').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});
});


