let editProfile = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');

function popupOpen() {
  popup.classList.add('popup_opened');
  console.log(popup.classList);
}
editProfile.addEventListener('click',popupOpen);

let closeProfile = document.querySelector('.popup__close');

function popupClose() {
  popup.classList.remove('popup_opened');
  console.log(popup.classList);
}
closeProfile.addEventListener('click', popupClose);
