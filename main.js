"use strict";
const learnMore = document.querySelectorAll(".learn");
const overlay = document.querySelector(".overlay");

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
