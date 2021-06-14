import React from 'react';

import Card from './Card';

import api from '../utils/api';

import { useCurrentUser } from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = useCurrentUser();

  const [cards, setCards] = React.useState([]);

  React.useEffect(() =>
    api.getInitialCards().then(setCards)
  , []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then(newCard => {
      const newCards = cards.map(c => (
        c._id === card._id
          ? newCard
          : c
      ));

      setCards(newCards);
    });
  }

  return (
    <main className="content">

      <section className="profile">
        <button onClick={props.onEditAvatar} type="button" className="profile__avatar-container">
          <img alt="Аватар" className="profile__avatar" src={currentUser.avatar} />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__description">{currentUser.about}</p>
          <button onClick={props.onEditProfile} type="button" className="profile__edit-button" />
        </div>
        <button onClick={props.onAddPlace} type="button" className="profile__add-button" />
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map(card =>
            <Card key={card._id} onCardClick={props.onCardClick} onCardLike={handleCardLike} card={card} />
          )}
        </ul>
      </section>

    </main>
  );
}

export default Main;