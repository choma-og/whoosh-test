import { S as Swiper, N as Navigation } from "./vendor.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const style = "";
const burgerMenu = {
  icon: document.querySelector(".menu__icon"),
  body: document.querySelector(".menu__body")
};
if (burgerMenu.icon) {
  burgerMenu.icon.addEventListener("click", () => {
    document.body.classList.toggle("_lock");
    burgerMenu.icon.classList.toggle("_active");
    burgerMenu.body.classList.toggle("_active");
  });
}
new Swiper(".partners__swiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  spaceBetween: 19,
  breakpoints: {
    640: { spaceBetween: 20 },
    1e3: { slidesPerView: 5, spaceBetween: 30 }
  }
});
new Swiper(".payment__content", {
  slidesPerView: "auto",
  loop: true,
  centeredSlides: false,
  spaceBetween: 64,
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    720: { centeredSlides: true, slidesPerView: 4, spaceBetween: 90 },
    1020: { centeredSlides: true, slidesPerView: 5, spaceBetween: 95 },
    1200: { centeredSlides: false, slidesPerView: 6, spaceBetween: 104 }
  }
});
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
const textBlock = {
  hidden: document.querySelector(".text__hidden"),
  btn: document.getElementById("text__btn")
};
textBlock.btn.onclick = () => {
  textBlock.hidden.classList.toggle("_more");
};
