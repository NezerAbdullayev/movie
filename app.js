"use strict";
///navbar
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (!header) return;
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//burger
function handleClickMobulButton() {
  const mobilContainer = document.querySelector(".mobil_container");
  const mobilButton = document.querySelector(".burger");

  if (!mobilContainer || !mobilButton) return;
  mobilContainer.addEventListener("click", () => {
    mobilButton.classList.toggle("active_burger");
  });
}
handleClickMobulButton();

// next element
function nextButton(onClickButton, transformItem, amount) {
  onClickButton.addEventListener("click", () => {
    transformItem.scrollLeft += amount;
  });
}

// form hidden or show btn
function togglePasswordBtn(showBtn, hiddenBtn, input) {
  showBtn.addEventListener("click", () => {
    showBtn.classList.add("hidden");
    hiddenBtn.classList.remove("hidden");
    input.type = "password";
  });

  hiddenBtn.addEventListener("click", () => {
    hiddenBtn.classList.add("hidden");
    showBtn.classList.remove("hidden");
    input.type = "text";
  });
}

// hero  carousel function
function carousel(sliderContainer, allButtonsContainer, Allbuttons) {
  //event delegation
  allButtonsContainer.addEventListener("click", (e) => {
    // control
    if (!e.target || e.target.tagName !== "BUTTON") return;
    // current Btn id
    const curBtnId = e.target.dataset.hero;

    // insert active class
    Allbuttons.forEach((btn) => {
      if (btn.dataset.hero == curBtnId) {
        btn.classList.add("active-circle_btn");
      } else {
        btn.classList.remove("active-circle_btn");
      }
    });

    sliderContainer.style.transform = `translateX(-${curBtnId * 100}%)`;
  });
}
