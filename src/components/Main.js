import Card from './Card';

import { useCurrentUser } from '../contexts/CurrentUserContext';

export default function Main(props) {
  const currentUser = useCurrentUser();

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
          {props.cards.map(card =>
            <Card key={card._id} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} card={card} />
          )}
        </ul>
      </section>

    </main>
  );
}