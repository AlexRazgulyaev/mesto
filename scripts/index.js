const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonCloseProfile = document.querySelector(".popup__close");
const popupElement = document.querySelector(".popup");
const formElement = document.querySelector(".popup__container"); // форма
const nameInput = formElement.querySelector(".popup__input_type_name"); // name в input
const jobInput = formElement.querySelector(".popup__input_type_job"); // job в input
const nameElement = document.querySelector(".profile__name"); // name на сайте
const jobElement = document.querySelector(".profile__about-me"); // job на сайте

function openPopup() {
  popupElement.classList.add("popup_opened");
  nameInput.value = nameElement.textContent; // значения с сайта переносим в input
  jobInput.value = jobElement.textContent;
}
function closePopup() {
  popupElement.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value; // значения из input переносим на сайт
  jobElement.textContent = jobInput.value;
  closePopup();
}

buttonEditProfile.addEventListener("click", openPopup);
formElement.addEventListener("submit", formSubmitHandler);
buttonCloseProfile.addEventListener("click", closePopup);
