import React from 'react';

import api from '../utils/api';
import { popupSelectors } from '../utils/utils';

import { useCurrentUser } from '../contexts/CurrentUserContext';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import EditProfilePopup from './popups/EditProfilePopup';
import EditAvatarPopup from './popups/EditAvatarPopup';
import AddPlacePopup from './popups/AddPlacePopup';
import ConfirmDeletePopup from './popups/ConfirmDeletePopup';
import ImagePopup from './popups/ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  const [cards, setCards] = React.useState([]);


  const currentUser = useCurrentUser();

  React.useEffect(() =>
    api.getInitialCards().then(setCards)
  , []);


  async function handleCardLike(card) {
    const oldCards = cards;

    const isLiked = card.likes.some(i => i._id === currentUser._id);

    const expectedCardLikes = isLiked
      ? card.likes.filter(like => like._id !== currentUser._id)
      : [...card.likes, currentUser];

    const expectedCard = {...card, likes: expectedCardLikes};

    setCards(
      cards.map(c =>
        c._id === card._id
          ? expectedCard
          : c
      )
    );

    try {
      const newCard = await api.changeLikeCardStatus(card._id, !isLiked);
      setCards(
        cards.map(c =>
          c._id === card._id
            ? newCard
            : c
        )
      );
    } catch (error) {
      setCards(oldCards);
      throw error;
    }
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmDeletePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  function handleCardDelete(card) {
    const oldCards = cards;

    setCards(
      cards.filter(c =>
        c._id !== card._id
      )
    );

    api.deleteCard(card._id)
      .catch(error => {
        setCards(oldCards);
        throw error;
      })
    ;

    closeAllPopups();
  }


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleConfirmDeleteClick(card) {
    setSelectedCard(card);

    setIsConfirmDeletePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);

    setIsImagePopupOpen(true);
  }

  function handlePopupClick(e) {
    if (e.target === e.currentTarget || e.target.classList.contains(popupSelectors.closeButtonClass)) {
      closeAllPopups();
    }
  }

  const handleUpdateUser = closeAllPopups;
  const handleUpdateAvatar = closeAllPopups;

  function handleAddPlaceSubmit(title, link) {
    const oldCards = cards;

    const expectedCard = {
      isTemporarilyLocal: true,
      name: title,
      link
    };

    setCards([expectedCard, ...cards]);

    api.addCard(title, link)
      .then(newCard =>
        setCards([newCard, ...cards])
      )
      .catch(() =>
        setCards(oldCards)
      );

    closeAllPopups();
  }


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
        onCardDelete={handleConfirmDeleteClick}
      />
      <Footer />

      <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={handlePopupClick} />

      <AddPlacePopup onAddPlace={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={handlePopupClick} />

      <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={handlePopupClick} />

      <ConfirmDeletePopup card={selectedCard} onCardDelete={handleCardDelete} isOpen={isConfirmDeletePopupOpen} onClose={handlePopupClick} />

      <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={handlePopupClick} />

    </>
  );
}

export default App;
