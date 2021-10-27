const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonCloseProfile = document.querySelector(".popup__close");
const popupElement = document.querySelector(".popup");
const formElement = document.querySelector(".popup__container"); // форма
const nameInput = formElement.querySelector(".popup__input_type_name"); // name в input
const jobInput = formElement.querySelector(".popup__input_type_job"); // job в input
const nameElement = document.querySelector(".profile__name"); // name на сайте
const jobElement = document.querySelector(".profile__about-me"); // job на сайте
const initialCards = [                                           // массив фотографий
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
const cardContainer = document.querySelector(".cards"); // получили контейнер
const cardTemplate = document.querySelector("#card-template").content; // получили template

const cardImageElement = cardTemplate.querySelector(".cards__image"); // находим в template фото
const cardTitleElement = cardTemplate.querySelector(".cards__title"); // находим в template заголовок

// for (let i = 0; i <= initialCards.length; i++) {
//   cardTitleElement.textContent = initialCards[i]['name'];
//   cardImageElement.src = initialCards[i].link;


//   let cardElement = cardTemplate.querySelector(".cards__card").cloneNode(true);

//   cardContainer.append(cardElement);
// }

initialCards.forEach(function(item) {
  cardTitleElement.textContent = item.name; // присвоили из массива заголовок
  cardImageElement.src = item.link;         // присвоили из массива ссылку на фото
  cardImageElement.alt = item.name;         // присвоили из массива alt фото
  const cardElement = cardTemplate.querySelector(".cards__card").cloneNode(true); // клонировали c вложением

  cardContainer.append(cardElement);                  // вставили в конец
})














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
