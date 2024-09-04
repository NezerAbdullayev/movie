"use strict";
// ///////////////////////////////////////////////////////////////////////

// password hidden and show btn
function emailShowAndHiddenBtn() {
  const input = document.querySelector("#login_password");
  const showBtn = document.querySelector(".password_show");
  const hiddenBtn = document.querySelector(".password_hidden");

  togglePasswordBtn(showBtn, hiddenBtn, input);
}
emailShowAndHiddenBtn();

// loginMobileBack
function loginMobileBack() {
  const backBtn = document.querySelector(".login_mobile_back");
  backBtn.addEventListener("click", () => {
    history.back();
  });
}
loginMobileBack();

// close btn
function closeBtn() {
  const backBtn = document.querySelector(".form_close_btn");
  backBtn.addEventListener("click", () => {
    history.back();
  });
}
closeBtn();
