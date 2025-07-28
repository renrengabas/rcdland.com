var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/6849217eddf9cd19094b3d57/1iteqllkn';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();

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

let currentIndex = 0;
const slides = document.querySelectorAll('#carouselSlides > div');
const totalSlides = slides.length;
const slideContainer = document.getElementById('carouselSlides');
const dots = document.querySelectorAll('.carousel-indicator');

// Function to show the slide based on currentIndex
function showSlide(index) {
  // Update the transform property to slide the images
  slideContainer.style.transform = `translateX(-${index * 100}%)`;

  // Update the active dot
  dots.forEach(dot => dot.classList.remove('bg-green-600'));
  dots[index].classList.add('bg-green-600');
}

// Prev button functionality
document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
  showSlide(currentIndex);
});

// Next button functionality
document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
  showSlide(currentIndex);
});

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

// Initialize the carousel
showSlide(currentIndex);

const tabs = document.querySelectorAll('.tab-link');
const contents = document.querySelectorAll('.tab-content');

function resetTabs() {
  tabs.forEach(tab => {
    tab.classList.remove('border-green-600', 'font-bold');
    tab.classList.add('text-gray-600');
  });
  contents.forEach(content => {
    content.classList.add('hidden');
  });
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    resetTabs();
    tab.classList.add('border-green-600', 'font-bold');
    tab.classList.remove('text-gray-600');

    const tabId = tab.getAttribute('data-tab');
    document.getElementById(tabId).classList.remove('hidden');
  });
});

// Initialize first tab as active on page load
if (tabs.length > 0) {
  tabs[0].click();
}

//Script to show the video on button click
function showVideo(button) {
  const container = button.parentElement;
  const iframe = container.querySelector("iframe");
  button.style.display = "none"; // hide button
  iframe.classList.remove("hidden"); // show video
}

// Custom select dropdown functionality for House-catalog
const customSelect = document.querySelector('.custom-select');
const select = customSelect.querySelector('select');

select.addEventListener('focus', () => {
  customSelect.classList.add('open');
});

select.addEventListener('blur', () => {
  customSelect.classList.remove('open');
});

// tailwind.config.js
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}