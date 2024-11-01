"use strict";
const modalButton = document.querySelector(".back_this_project");
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".close_modal");
const bambooRadioButton = document.querySelector("input[name='bamboo_pledge']");
const mobileBambooRadioButton = document.querySelector("input[name='mobile_bamboo_pledge']");
const blackEditionRadioButton = document.querySelector("input[name='edition_pledge']");
const mobileBlackEditionRadioButton = document.querySelector("input[name='mobile_edition_pledge']");
const pledgeAmount = document.querySelector(".pledge_amount");
const editionPledgeAmount = document.querySelector(".edition_pledge_amount");
const completeModal = document.querySelector(".modal_completed");
const continueButton = document.querySelector(".continue");
const checkoutButton = document.querySelector(".checkout");
const bookmark = document.querySelector(".bookmark_button");
const markedText = document.querySelector(".marked_text");
const bambooPost = Array.from(document.querySelectorAll(".mobile_modal_post"));
const mobilePledgeAmount = document.querySelector(".mobile_pledge_amount");
const mobileEditionAmount = document.querySelector(".mobile_edition_amount");
const mobileContinueButton = document.querySelector(".mobile_continue");
const menuButton = document.querySelector(".mobile_nav_toggle");
const navItems = document.querySelector(".nav_items");
const body = document.querySelector("body");
let isClicked = true;
let isBookmarked = true;

modalButton.addEventListener("click", () => {
  modal.classList.remove("hide");
});

menuButton.addEventListener("click", () => {
  const visibility = navItems.getAttribute("data-visible");

  if (visibility === "false") {
    navItems.setAttribute("data-visible", "true");
    menuButton.setAttribute("aria-expanded", "true");
  } else {
    navItems.setAttribute("data-visible", "false");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

bookmark.addEventListener("click", () => {
  if (isBookmarked) {
    markedText.textContent = "Bookmarked";
    markedText.style.color = "var(--MOODERATE_CYAN)";
    isBookmarked = false;
  } else {
    markedText.textContent = "Bookmark";
    markedText.style.color = "var(--DARK_GRAY)";
    isBookmarked = true;
  }
});
closeModalButton.addEventListener("click", () => {
  modal.classList.add("hide");
});

bambooRadioButton.addEventListener("click", () => {
  if (isClicked) {
    pledgeAmount.classList.remove("hidden");
    isClicked = false;
  } else {
    pledgeAmount.classList.add("hidden");
    isClicked = true;
    bambooRadioButton.checked = false;
  }
});

blackEditionRadioButton.addEventListener("click", () => {
  if (isClicked) {
    editionPledgeAmount.classList.remove("conceal");
    isClicked = false;
  } else {
    editionPledgeAmount.classList.add("conceal");
    isClicked = true;
    blackEditionRadioButton.checked = false;
  }
});
continueButton.addEventListener("click", () => {
  modal.classList.add("hide");
  completeModal.classList.remove("veil");
});
mobileContinueButton.addEventListener("click", () => {
  modal.classList.add("hide");
  completeModal.classList.remove("veil");
});
checkoutButton.addEventListener("click", () => {
  completeModal.classList.add("veil");
});

mobileBambooRadioButton.addEventListener("click", () => {
  if (isClicked) {
    mobilePledgeAmount.classList.remove("conceal");
    isClicked = false;
    bambooPost[1].style.border = "1px solid var(--MOODERATE_CYAN)";
  } else {
    mobilePledgeAmount.classList.add("conceal");
    isClicked = true;
    mobileBambooRadioButton.checked = false;
  }
});
mobileBlackEditionRadioButton.addEventListener("click", () => {
  if (isClicked) {
    mobileEditionAmount.classList.remove("keep");
    isClicked = false;
    bambooPost[2].style.border = "1px solid var(--MOODERATE_CYAN)";
  } else {
    mobileEditionAmount.classList.add("keep");
    isClicked = true;
    mobileBlackEditionRadioButton.checked = false;
  }
});
