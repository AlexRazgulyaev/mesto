const buttonEditProfile = document.querySelector(".profile__edit-button");          // кнопка редактирования профиля
const popupEditProfileElement = document.querySelector(".popup_type_edit-profile"); // popup c редактированием профиля
const buttonCloseProfile = popupEditProfileElement.querySelector(".popup__close");          // кнопка закрытия popup
const formEditProfileElement = popupEditProfileElement.querySelector(".popup__container");  // форма редактирования профиля
const nameInput = formEditProfileElement.querySelector(".popup__input_type_name"); // name в input
const jobInput = formEditProfileElement.querySelector(".popup__input_type_job");   // job в input
const buttonAddPhoto = document.querySelector(".profile__add-button");             // кнопка добавления фото
const popupAddPhotoElement = document.querySelector(".popup_type_add-photo");      // popup добавления фото
const buttonCloseAddPhoto = popupAddPhotoElement.querySelector(".popup__close");   // кнопка закрытия popup
const formAddPhotoElement = popupAddPhotoElement.querySelector(".popup__container");  // форма добавления фото
const namePlaceInput = formAddPhotoElement.querySelector(".popup__input_type_name-place"); // название места в input
const linkInput = formAddPhotoElement.querySelector(".popup__input_type_link");            // ссылка на место в input
const popupPhoto = document.querySelector(".popup_type_image");                    // popup фото
const buttonClosePhoto = popupPhoto.querySelector(".popup__close");                // кнопка закрытия popup с фото
const photoElement = popupPhoto.querySelector(".popup__image");                    // элемент с фото
const photoTitleElement = popupPhoto.querySelector(".popup__photo-title");         // элемент с подписью
const nameElement = document.querySelector(".profile__name");                      // name на сайте
const jobElement = document.querySelector(".profile__about-me");                   // job на сайте
const initialCards = [                                                             // массив фотографий
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
const cardTemplate = document.querySelector(".card-template").content; // получили template
const cardImageElement = cardTemplate.querySelector(".cards__image"); // находим в template фото
const cardTitleElement = cardTemplate.querySelector(".cards__title"); // находим в template заголовок

function main() {
  initialCards.forEach((element) => {           // прошли по всем элементам массива
    renderPhoto(element.name, element.link);
  });

  formAddPhotoElement.addEventListener("submit", formAddSubmitHandler);  // слушаем кнопку добавить фото
}

function renderPhoto(name, link) {
  cardTitleElement.textContent = name; // присвоили из массива заголовок
  cardImageElement.src = link; // присвоили из массива ссылку на фото
  cardImageElement.alt = name; // присвоили из массива alt фото

  const cardElement = cardTemplate.cloneNode(true); // клонировали c вложением

  cardElement.querySelector(".cards__like").addEventListener("click", likePhotoHandler); // слушаем клик по элементу like
  cardElement.querySelector(".cards__delete").addEventListener("click", deletePhotoHandler); // слушаем клик по элементу delete
  cardElement.querySelector(".cards__image").addEventListener("click", openPhoto);   // слушаем клик по картинке
  cardContainer.prepend(cardElement); // вставили в начало контейнера
}

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
  if (popupElement === popupEditProfileElement) {        // если popup редактирования профиля
    nameInput.value = nameElement.textContent;           // то значения с сайта переносим в input
    jobInput.value = jobElement.textContent;
  }
}
function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
}
function formProfileSubmitHandler(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value; // значения из input переносим на сайт
  jobElement.textContent = jobInput.value;
  closePopup(popupEditProfileElement);
}
function formAddSubmitHandler(evt) {
  evt.preventDefault();
  const name = namePlaceInput.value;      // значения из input добавления фото
  const link = linkInput.value;
  renderPhoto(name, link);                // отрисовываем фото
  closePopup(popupAddPhotoElement);
}
function likePhotoHandler(evt) {
 evt.target.closest(".cards__like").classList.toggle("cards__like_active");  //находим ближайшей элемент like и переключаем модификатор
}
function deletePhotoHandler(evt) {
  evt.target.closest(".cards__card").remove();   //находим ближайшую карточку и удаляем
}
function openPhoto(evt) {
  popupPhoto.classList.add("popup_opened");
  const photo = evt.target.closest(".cards__image");                                // находим ближайшую картинку
  const title = evt.target.closest(".cards__card").querySelector(".cards__title");  // находим ближайший текст картинки
  photoElement.src = photo.src;                        // элементу с фото присваиваем src
  photoElement.alt = photo.alt;                        // элементу с фото присваиваем alt
  photoTitleElement.textContent = title.textContent;   // элементу с подписью присваиваем текст
}

buttonEditProfile.addEventListener("click", function () {
  openPopup(popupEditProfileElement);
});
formEditProfileElement.addEventListener("submit", formProfileSubmitHandler);
buttonAddPhoto.addEventListener("click", function () {
  openPopup(popupAddPhotoElement);
});
buttonCloseProfile.addEventListener("click", function () {
  closePopup(popupEditProfileElement);
});
buttonCloseAddPhoto.addEventListener("click", function () {
  closePopup(popupAddPhotoElement);
});
buttonClosePhoto.addEventListener("click", function() {
  closePopup(popupPhoto);
})

main();
