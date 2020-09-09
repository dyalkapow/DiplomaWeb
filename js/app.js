$('.slick-wrapper').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('.gallery-slick-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
});


var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".hamburger-nav");


hamburger.addEventListener("click", function(){
    navMenu.classList.toggle("active");
});