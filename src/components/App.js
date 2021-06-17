import React from 'react';

import api from '../utils/api';
import { popupSelectors } from '../utils/utils';

import { useCurrentUser } from '../contexts/CurrentUserContext';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import EditProfilePopup from './popups/EditProfilePopup';
import EditAvatarPopup from './popups/EditAvatarPopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  const [cards, setCards] = React.useState([]);

  const currentUser = useCurrentUser();

  React.useEffect(() =>
    api.getInitialCards().then(setCards)
  , []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then(newCard =>
        setCards(
          cards.map(c =>
            c._id === card._id
              ? newCard
              : c
          )
        )
      );
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() =>
        setCards(
          cards.filter(c =>
            c._id !== card._id
          )
        )
      );
  }

  const handleCardClick = setSelectedCard;

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }


  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);

    setSelectedCard({});
  }

  function handlePopupClick(e) {
    if (e.target === e.currentTarget || e.target.classList.contains(popupSelectors.closeButtonClass)) {
      closeAllPopups();
    }
  }

  const handleUpdateUser = closeAllPopups;
  const handleUpdateAvatar = closeAllPopups;

  const escHandler = React.useCallback(e => {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener('keydown', escHandler, false);

    return () =>
      document.removeEventListener('keydown', escHandler, false);
  }, [escHandler]);

  return (
    <>

      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        cards={cards}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <Footer />

      <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={handlePopupClick} />

      <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={handlePopupClick} title="Новое место" name="element-editor" buttonTitle="Создать">
        <input type="text" className="popup__input" name="title" id="element-title" placeholder="Название" minLength="2" maxLength="30" required />
        <p className="popup__error" id="element-title-error" />

        <input type="url" className="popup__input" name="link" id="element-link" placeholder="Ссылка на картинку" required />
        <p className="popup__error" id="element-link-error" />
      </PopupWithForm>

      <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={handlePopupClick} />

      <PopupWithForm onClose={handlePopupClick} title="Вы уверены?" name="delete-confirmation" buttonTitle="Да" />

      <ImagePopup card={selectedCard} onClose={handlePopupClick} />

    </>
  );
}

export default App;
