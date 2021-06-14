import React from 'react';

import CurrentUserContext from "../contexts/CurrentUserContext";

function Card(props) {
  const card = props.card;

  function handleClick() {
    props.onCardClick(props.card);
  }

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = (
    'element__trash-button' + (isOwn ? ' element__trash-button_visible' : '')
  );

  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = (
    'element__like-button' + (isLiked ? ' element__like-button_active' : '')
  );

  return (
    <li className="element">
      <img onClick={handleClick} className="element__image" alt={card.name} src={card.link} />
      <button type="reset" className={cardDeleteButtonClassName} />
      <div className="element__container">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__likes">
          <button type="button" className={cardLikeButtonClassName} />
          <p className="element__like-counter">
            {card.likes.length}
          </p>
        </div>
      </div>
    </li>
  );
}

export default Card;