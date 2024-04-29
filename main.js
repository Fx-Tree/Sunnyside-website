"use strict";
const learnMore = document.querySelectorAll(".learn");
const overlay = document.querySelector(".overlay");
const email = document.querySelector(".sign-up-email");
const password = document.querySelector(".sign-up-password");
const signUp = document.querySelector(".sign-up-button");

function showModal() {
  overlay.classList.remove("hide");
}

function hideModal() {
  overlay.classList.add("hide");
}

for (let i = 0; i < learnMore.length; i++) {
  learnMore[i].addEventListener("click", showModal);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !overlay.classList.contains("hide")) {
    hideModal();
  }
});

overlay.addEventListener("click", hideModal);

signUp.addEventListener("click", function () {
  console.log(email.textContent);
  console.log(password.textContent);
});
