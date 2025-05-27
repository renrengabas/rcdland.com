document.getElementById('menuToggle').addEventListener('click', function () {
  const menu = document.getElementById('mobileMenu');
  if (menu.classList.contains('max-h-0')) {
    menu.classList.remove('max-h-0');
    menu.classList.add('max-h-screen');
  } else {
    menu.classList.remove('max-h-screen');
    menu.classList.add('max-h-0');
  }
});

document.addEventListener('DOMContentLoaded', function () {
      const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        speed: 600,
        effect: 'slide',

      });
    });