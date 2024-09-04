"use strict";

// Continue Watching next btn
function nextReleaseMovie() {
  const onClickButton = document.querySelector(".home_next_btn_1");
  const transformItem = document.querySelector(".movies_container--1");

  nextButton(onClickButton, transformItem, 431);
}
nextReleaseMovie();

//Your Watchlist next button
function handleSmillarClickButton() {
  const nextBtn = document.querySelector(".next_video_button-2");
  const filmsContainer = document.querySelector(".smillar__containers");

  nextButton(nextBtn, filmsContainer, 296);
}

handleSmillarClickButton();

//Your Watchlist next button
function handleWatchlistClickButton() {
  const nextBtn = document.querySelector(".likes_next_btn");
  const filmsContainer = document.querySelector(".likes_container");

  nextButton(nextBtn, filmsContainer, 296);
}
handleWatchlistClickButton();

// next movie view btn
function handleNext_2_ClickButton() {
  const nextBtn = document.querySelector(".next_movie__mini_btn");
  const filmsContainer = document.querySelector(".next_movie_view");

  const transformValue = window.innerWidth < 971 ? 169 : 222;

  nextButton(nextBtn, filmsContainer, transformValue);
}

handleNext_2_ClickButton();

// hero slider
function heroSliderBtn() {
  const sliderContainer = document.querySelector(".slider_container_2");
  const allButtonsContainer = document.querySelector(".slider_buttons_2");
  const Allbuttons = document.querySelectorAll(".circle_btn_2");

  carousel(sliderContainer, allButtonsContainer, Allbuttons);
}
heroSliderBtn();

// ****************************************************************************

// container onclick
function onClickToContainerBtn() {
  const BtnContainer = document.querySelector(".next_movie_view");
  BtnContainer.addEventListener("click", handleBtnClick);
}
onClickToContainerBtn();

// handle current active img
function handleBtnClick(e) {
  const allBtns = document.querySelectorAll(".mini_movie_box");
  const allBackgroundImg = document.querySelectorAll(".slider_container_2 img");

  const curImgBtn = e.target.closest(".mini_movie_box");
  if (!curImgBtn) return;

  const curBtnId = curImgBtn.dataset.id;
  const relativePath = imgPathName(curImgBtn);

  sayActiveElement(allBtns, curBtnId);
  updateImageSrc(allBackgroundImg, relativePath);
}

// image path name
function imgPathName(curImgBtn) {
  const newSrc = curImgBtn.querySelector("img").src;
  const relativePath = newSrc.substring(newSrc.indexOf("images/"));
  return relativePath;
}

// current active btn
function sayActiveElement(allBtns, curBtnId) {
  allBtns.forEach((btn) => {
    btn.classList.toggle("mini_movie_active", btn.dataset.id == curBtnId);
  });
}

// update img path
function updateImageSrc(allImgs, src) {
  allImgs.forEach((img) => {
    img.src = src;
  });
}

// handle click next btn
function handleNextBtnClick() {
  const nextBtn = document.querySelector(".next_img__btn");
  nextBtn.addEventListener("click", () => changeImage("next"));
}
handleNextBtnClick();

// handle btn prev btn
function handlePrevBtnClick() {
  const prevBtn = document.querySelector(".prev_img__btn");
  prevBtn.addEventListener("click", () => changeImage("prev"));
}
handlePrevBtnClick();

// change img function
function changeImage(direction) {
  const allBtns = document.querySelectorAll(".mini_movie_box");
  const allBackgroundImg = document.querySelectorAll(".slider_container_2 img");

  let currentID =
    direction === "next" ? getNextID(allBtns) : getPrevID(allBtns);
  sayActiveElement(allBtns, currentID);

  const activeMiniImgBtn = document.querySelector(".mini_movie_active");
  const relativePath = imgPathName(activeMiniImgBtn);

  updateImageSrc(allBackgroundImg, relativePath);
}

// Next ID function
function getNextID(allBtns) {
  let nextId;
  allBtns.forEach((btn) => {
    if (btn.classList.contains("mini_movie_active")) {
      nextId = (Number(btn.dataset.id) + 1) % allBtns.length;
    }
  });
  return nextId;
}

// Prev ID function
function getPrevID(allBtns) {
  let prevId;
  allBtns.forEach((btn) => {
    if (btn.classList.contains("mini_movie_active")) {
      prevId = (Number(btn.dataset.id) - 1 + allBtns.length) % allBtns.length;
    }
  });
  return prevId;
}
