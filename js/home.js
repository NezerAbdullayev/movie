"use strict";

// hero slider
function heroSlider() {
  const sliderContainer = document.querySelector(".hero-slider_container");
  const allButtonsContainer = document.querySelector(".hero-circle_container");
  const Allbuttons = document.querySelectorAll(".circle_btn");

  carousel(sliderContainer, allButtonsContainer, Allbuttons);
}
heroSlider();

//  canal next btn
function nextCanalMovie() {
  const onClickButton = document.querySelector(".new_canal");
  const transformItem = document.querySelector(".stream_container");

  nextButton(onClickButton, transformItem, 193);
}
nextCanalMovie();

//  just release next btn

function nextReleaseMovie() {
  const onClickButton = document.querySelector(".next_btn_1");
  const transformItem = document.querySelector(".movies__container_1");

  nextButton(onClickButton, transformItem, 296);
}
nextReleaseMovie();

// movie 2 next btn
function nextPopulerMovie() {
  const onClickButton = document.querySelector(".next_btn_2");
  const transformItem = document.querySelector(".movies__container_2");

  nextButton(onClickButton, transformItem, 366);
}
nextPopulerMovie();
