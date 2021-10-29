const buttonEditProfile = document.querySelector(".profile__edit-button");                 // кнопка редактирования профиля
const popupEditProfileElement = document.querySelector(".popup_type_edit-profile");        // popup c редактированием профиля
const buttonCloseProfile = popupEditProfileElement.querySelector(".popup__close");         // кнопка закрытия popup
const formEditProfileElement = popupEditProfileElement.querySelector(".popup__container"); // форма редактирования профиля
const nameInput = formEditProfileElement.querySelector(".popup__input_type_name");         // name в input
const jobInput = formEditProfileElement.querySelector(".popup__input_type_job");           // job в input
const buttonAddPhoto = document.querySelector(".profile__add-button");                     // кнопка добавления фото
const popupAddPhotoElement = document.querySelector(".popup_type_add-photo");              // popup добавления фото
const buttonCloseAddPhoto = popupAddPhotoElement.querySelector(".popup__close");           // кнопка закрытия popup
const nameElement = document.querySelector(".profile__name");                              // name на сайте
const jobElement = document.querySelector(".profile__about-me");                           // job на сайте
const initialCards = [                                                                     // массив фотографий
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
const cardTemplate = document.querySelector(".card_template").content; // получили template

const cardImageElement = cardTemplate.querySelector(".cards__image");  // находим в template фото
const cardTitleElement = cardTemplate.querySelector(".cards__title");  // находим в template заголовок

// for (let i = 0; i <= initialCards.length; i++) {
//   cardTitleElement.textContent = initialCards[i]['name'];
//   cardImageElement.src = initialCards[i].link;


//   let cardElement = cardTemplate.querySelector(".cards__card").cloneNode(true);

//   cardContainer.append(cardElement);
// }

// initialCards.forEach(function(item) {
//   cardTitleElement.textContent = item.name; // присвоили из массива заголовок
//   cardImageElement.src = item.link;         // присвоили из массива ссылку на фото
//   cardImageElement.alt = item.name;         // присвоили из массива alt фото
//   const cardElement = cardTemplate.querySelector(".cards__card").cloneNode(true); // клонировали c вложением

//   cardContainer.append(cardElement);                  // вставили в конец контейнера
// })

function main() {
  initialCards.forEach(function(element) {             // прошли по всем элементам массива
    renderPhoto(element.name, element.link);
  })
}

function renderPhoto(name, link) {
  const cardElement = cardTemplate.querySelector(".cards__card").cloneNode(true); // клонировали c вложением

  cardTitleElement.textContent = name;                // присвоили из массива заголовок
  cardImageElement.src = link;                        // присвоили из массива ссылку на фото
  cardImageElement.alt = name;                        // присвоили из массива alt фото

  cardContainer.append(cardElement);                  // вставили в конец контейнера
}












function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
  if (popupElement === popupEditProfileElement) {        // если popup редактирования профиля
  nameInput.value = nameElement.textContent;             // то значения с сайта переносим в input
  jobInput.value = jobElement.textContent;
  }
}
function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;             // значения из input переносим на сайт
  jobElement.textContent = jobInput.value;
  closePopup(popupEditProfileElement);
}



buttonEditProfile.addEventListener("click", openPopup);
formElement.addEventListener("submit", formSubmitHandler);
buttonCloseProfile.addEventListener("click", closePopup);

main();
