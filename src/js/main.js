import Swiper, { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import '@/styles/style.scss';

// Burger menu
const burgerMenu = {
  icon: document.querySelector('.menu__icon'),
  body: document.querySelector('.menu__body'),
};

if (burgerMenu.icon) {
  burgerMenu.icon.addEventListener('click', () => {
    document.body.classList.toggle('_lock');
    burgerMenu.icon.classList.toggle('_active');
    burgerMenu.body.classList.toggle('_active');
  });
}

// Slider partners
const swiperPartners = new Swiper('.partners__swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  spaceBetween: 19,
  breakpoints: {
    640: { spaceBetween: 20 },
    1000: { slidesPerView: 5, spaceBetween: 30 },
  },
});

// Slider payment
const swiperPayment = new Swiper('.payment__content', {
  slidesPerView: 'auto',
  loop: true,
  centeredSlides: false,
  spaceBetween: 64,
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    720: { centeredSlides: true, slidesPerView: 4, spaceBetween: 90 },
    1020: { centeredSlides: true, slidesPerView: 5, spaceBetween: 95 },
    1200: { centeredSlides: false, slidesPerView: 6, spaceBetween: 104 },
  },
});

/*=============== POPUPCITY ===============*/
const popupBody = document.querySelector(".popup-city__body");
const cityButton = document.querySelector(".menu__city-btn");
const cityList = document.querySelector(".popup-city__list");

cityButton.addEventListener("click", () => popupBody.classList.add("_active"));

document.addEventListener("click", (e) => {
  if (!popupBody.contains(e.target) && !cityButton.contains(e.target)) {
    popupBody.classList.remove("_active");
  }
});

cityList.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup-city__item")) {
    popupBody.classList.remove("_active");
  }
});

// Text block
const textBlock = {
  hidden: document.querySelector('.text__hidden'),
  btn: document.getElementById('text__btn'),
};

textBlock.btn.onclick = () => {
  textBlock.hidden.classList.toggle('_more');
};