"use strict";
// ///////////////////////////////////////////////////////////////////////

// password input btn
function passwordHiddenAndShowBtn() {
  const input = document.querySelector("#signup_password");
  const showBtn = document.querySelector(".password_show");
  const hiddenBtn = document.querySelector(".password_hidden");

  togglePasswordBtn(showBtn, hiddenBtn, input);
}
passwordHiddenAndShowBtn();

// confirm password btn

function confirmPasswordHiddenAndShowBtn() {
  const input = document.querySelector("#confirm_signup_password");
  const showBtn = document.querySelector(".confirm_password_show");
  const hiddenBtn = document.querySelector(".confirm_password_hidden");

  togglePasswordBtn(showBtn, hiddenBtn, input);
}
confirmPasswordHiddenAndShowBtn();

// sign up mobile back btn

function signupMobileBack(){
  const backBtn =document.querySelector(".signup_mobile_back");
  backBtn.addEventListener("click",()=>{
    history.back()
  })
}
signupMobileBack()


// close btn
function closeBtn() {
  const backBtn = document.querySelector(".form_close_btn");
  backBtn.addEventListener("click", () => {
    history.back();
  });
}
closeBtn();