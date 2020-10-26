const mailBtn = document.querySelector(".btn-text-us");
const mailPopup = document.querySelector(".modal-mail");
const mailForm = mailPopup.querySelector(".mail-form");
const mailClose = mailPopup.querySelector(".modal-close");
const mailName = mailPopup.querySelector(".input-name");
const mailEmail = mailPopup.querySelector(".input-email");

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
    if (mailPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mailPopup.classList.remove("modal-show");
      mailPopup.classList.remove("modal-error");
    }
  }
});
