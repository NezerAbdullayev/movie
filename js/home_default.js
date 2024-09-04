"use strict";
// ///////////////////////////////////////////////////////////////////////


// movie 3 nex btn
function next3Btn() {
  const onClickButton = document.querySelector(".next_btn_3");
  const transformItem = document.querySelector(".movies__container_3");

  nextButton(onClickButton, transformItem, 296);
}
next3Btn();

// movie 4 next btn
function next4Btn() {
  const onClickButton = document.querySelector(".next_btn_4");
  const transformItem = document.querySelector(".movies__container_4");

  nextButton(onClickButton, transformItem, 296);
}
next4Btn();

// movie 5 next btn
function next5Btn() {
  const onClickButton = document.querySelector(".next_btn_5");
  const transformItem = document.querySelector(".movies__container_5");

  nextButton(onClickButton, transformItem, 296);
}
next5Btn();

// movie 6 next btn
function next6Btn() {
  const onClickButton = document.querySelector(".next_btn_6");
  const transformItem = document.querySelector(".movies__container_6");

  nextButton(onClickButton, transformItem, 296);
}
next6Btn();

// fast next and prev btn

function fastNextAndPrevBtn(){
    const nextBtn = document.querySelector(".fast__next_btn");
    const prevBtn = document.querySelector(".fast__prev_btn");
    const transformItem = document.querySelector(".films_container_js");
  
    nextButton(nextBtn, transformItem, 260);
    nextButton(prevBtn, transformItem, -260);
}
fastNextAndPrevBtn()

//  live next and prev btn

function lastNextAndPrevBtn(){
    const nextBtn = document.querySelector(".last__next_btn");
    const prevBtn = document.querySelector(".last__prev_btn");
    const transformItem = document.querySelector(".films_container_js_2");
  
    nextButton(nextBtn, transformItem, 260);
    nextButton(prevBtn, transformItem, -260);
}
lastNextAndPrevBtn();