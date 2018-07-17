/* Navigation Scolling Background */

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".nav-scroll-bg").css("background-color", "rgba(87, 88, 91, 0.8)");
      $(".navbar-brand img").removeClass("p-md-3");
      $(".navbar-brand img").addClass("px-md-3");
    } else {
      $(".nav-scroll-bg").css("background-color", "transparent");
      $(".navbar-brand img").addClass("p-md-3");
      $(".navbar-brand img").removeClass("px-md-3");
    }
  });
});
