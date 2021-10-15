const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonCloseProfile = document.querySelector('.popup__close');
const popupElement = document.querySelector('.popup');
const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__name');
const jobInput = formElement.querySelector('.popup__about-me');
const nameElement = document.querySelector('.profile__name');
const jobElement = document.querySelector('.profile__about-me');


function openPopup() {
  popupElement.classList.add('popup_opened');
}
function closePopup() {
  popupElement.classList.remove('popup_opened');
}
function closePopupWithoutSave() {
  if (nameInput.value === nameElement&&jobInput.value === jobElement) {
    closePopup;
  }
  else {
    nameInput.value = nameElement.textContent;
    jobInput.value = jobElement.textContent;
    closePopup;
  }
}

buttonEditProfile.addEventListener('click',openPopup);
buttonCloseProfile.addEventListener('click', closePopupWithoutSave);

function formSubmitHandler (evt) {
    evt.preventDefault();

    const nameValue = nameInput.value;
    const jobValue = jobInput.value;

    nameElement.textContent =  nameValue;
    jobElement.textContent = jobValue;
    closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);


