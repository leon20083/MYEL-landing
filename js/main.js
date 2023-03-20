$(document).ready(function(){
    $(".slide-one").owlCarousel({
        loop: 1,
        items: 1,
        nav: true,
        navText: ["<img src='img/arrow_left.png'>", "<img src='img/arrow_right.png'>"],
    });
    $(".slide-two").owlCarousel({
        loop: true,
        margin: 27,
        items: 3,
        nav: true,
        dots: true,
        navText: ["<img src='img/arrow_left.png'>", "<img src='img/arrow_right.png'>"],
    });
  });