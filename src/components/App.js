import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(0);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(0);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(0);

  function handleEditAvatarClick() {
    // document.querySelector('#avatar-editor').classList.add('popup_opened');
    setIsEditAvatarPopupOpen(1);
  }

  function handleEditProfileClick() {
    // document.querySelector('#profile-editor').classList.add('popup_opened');
    setIsEditProfilePopupOpen(1);
  }

  function handleAddPlaceClick() {
    // document.querySelector('#element-editor').classList.add('popup_opened');
    setIsAddPlacePopupOpen(1);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(0);
    setIsEditProfilePopupOpen(0);
    setIsAddPlacePopupOpen(0);
  }

  return (
    <>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />

      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} title="Редактировать профиль" name="profile-editor">
        <input type="text" autoComplete="name" autoCapitalize="words" className="popup__input" name="name" id="profile-name" placeholder="Имя" minLength="2" maxLength="40" required />
        <p className="popup__error" id="profile-name-error" />

        <input type="text" className="popup__input" name="about" id="profile-about" placeholder="О себе" minLength="2" maxLength="200" required />
        <p className="popup__error" id="profile-about-error" />
      </PopupWithForm>

      <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} title="Новое место" name="element-editor" buttonTitle="Создать">
        <input type="text" className="popup__input" name="title" id="element-title" placeholder="Название" minLength="2" maxLength="30" required />
        <p className="popup__error" id="element-title-error" />

        <input type="url" className="popup__input" name="link" id="element-link" placeholder="Ссылка на картинку" required />
        <p className="popup__error" id="element-link-error" />
      </PopupWithForm>

      <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} title="Обновить аватар" name="avatar-editor">
        <input type="url" className="popup__input" name="avatar" id="profile-avatar" placeholder="Ссылка на картинку" required />
        <p className="popup__error" id="profile-avatar-error" />
      </PopupWithForm>

      <PopupWithForm onClose={closeAllPopups} title="Вы уверены?" name="delete-confirmation" buttonTitle="Да" />

      <ImagePopup />

      <template id="element-template">
        <li className="element">
          <img className="element__image" alt="#" />
          <button type="reset" className="element__trash-button" />
          <div className="element__container">
            <h2 className="element__title">#</h2>
            <div className="element__likes">
              <button type="button" className="element__like-button" />
              <p className="element__like-counter" />
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;
