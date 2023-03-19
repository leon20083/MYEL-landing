$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: 1,
        items: 1,
        nav: true,
        navText: ["<img src='img/arrow_left.png'>", "<img src='img/arrow_right.png'>"],
    });
    $(".browse__by__categories-photo").owlCarousel({
        loop: false,
        items: 3,
        nav: true,
        navText: ["<img src='img/arrow_left.png'>", "<img src='img/arrow_right.png'>"],
    });
  });