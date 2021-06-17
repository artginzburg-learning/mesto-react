import { useCurrentUser } from '../contexts/CurrentUserContext';

function Card(props) {
  const card = props.card;

  card.likes = card.likes ?? [];

  const currentUser = useCurrentUser();

  if (card.isTemporarilyLocal) {
    card.owner = currentUser;
  }

  const isOwn = card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = (
    'element__trash-button' + (isOwn ? ' element__trash-button_visible' : '')
  );

  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = (
    'element__like-button' + (isLiked ? ' element__like-button_active' : '')
  );

  function handleImageClick() {
    props.onCardClick(card);
  }

  function handleLikeClick() {
    if (card.isTemporarilyLocal) return;
    props.onCardLike(card);
  }

  function handleDeleteClick() {
    if (card.isTemporarilyLocal) return;
    props.onCardDelete(card);
  }

  return (
    <li className="element">
      <img onClick={handleImageClick} className="element__image" alt={card.name} src={card.link} />
      <button onClick={handleDeleteClick} type="reset" className={cardDeleteButtonClassName} />
      <div className="element__container">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__likes">
          <button onClick={handleLikeClick} type="button" className={cardLikeButtonClassName} />
          <p className="element__like-counter">
            {card.likes.length}
          </p>
        </div>
      </div>
    </li>
  );
}

export default Card;