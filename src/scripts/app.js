
window.addEventListener('scroll' , function(){
  let header = document.querySelector('.header');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
})


//Slick Slider Zone

$('.portfolio__carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: '25px',
    arrows: false,
    dots:true,
    autoplaySpeed:2000,
    centerMode:true,
    responsive: [
      {
        breakpoint:1280,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
          centerPadding: '10px',
        },
      },
      {
        breakpoint:992,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
      {
        breakpoint:480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          centerMode: true,
          dots: false,
        },
      },
    ]
  });

  AOS.init();


  const mobileMenu = document.querySelector('.mobile__menu');
  const navOpen = document.querySelector('.nav__open');
  const navClose = document.querySelector('.nav__close');

  navOpen.addEventListener('click', function() {
    mobileMenu.classList.toggle('is-active');
    navOpen.classList.toggle('is-active')
  })

  navClose.addEventListener('click', function() {
    mobileMenu.classList.remove('is-active');
  })
