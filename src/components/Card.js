function Card(props) {
  return (
    <>
      <img className="element__image" alt={props.card.name} src={props.card.link} />
      <button type="reset" className="element__trash-button" />
      <div className="element__container">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__likes">
          <button type="button" className="element__like-button" />
          <p className="element__like-counter">
            {props.card.likes.length}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;