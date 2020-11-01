const mailBtn = document.querySelector(".btn-text-us");
const mailPopup = document.querySelector(".modal-mail");
const mailClose = mailPopup.querySelector(".modal-close-mail");
const mailForm = mailPopup.querySelector(".mail-form");
const mailName = mailPopup.querySelector("[name=name]");
const mailEmail = mailPopup.querySelector("[name=email]");

const mapImg = document.querySelector(".contacts-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close-map");

const sliderControls = document.querySelectorAll(".slider-control");
const slides = document.querySelectorAll(".slide");
const serviceLinks = document.querySelectorAll(".service-link");
const serviceBlocks = document.querySelectorAll(".service-block");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

mailBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  mailPopup.classList.add("modal-show");
  if (storage) {
    mailName.value = storage;
    mailEmail.focus();
  } else {
    mailName.focus();
  }
});

mailClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mailPopup.classList.remove("modal-show");
  mailPopup.classList.remove("modal-error");
});

mailForm.addEventListener("submit", function (evt) {
  if (!mailName.value || !mailEmail.value) {
    evt.preventDefault();
    mailPopup.classList.remove("modal-error");
    mailPopup.offsetWidth = mailPopup.offsetWidth;
    mailPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", mailName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (
      mailPopup.classList.contains("modal-show") ||
      mapPopup.classList.contains("modal-show")
    ) {
      evt.preventDefault();
      mailPopup.classList.remove("modal-show");
      mailPopup.classList.remove("modal-error");
      mapPopup.classList.remove("modal-show");
    }
  }
});

mapImg.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

var showSlide = function (sliderControl, slide) {
  sliderControl.addEventListener("click", function () {
    slide.classList.add("slide-current");
    sliderControl.classList.add("slider-control-active");
  });
};

for (var i = 0; i < sliderControls.length; i++) {
  showSlide(sliderControls[i], slides[i]);
}
