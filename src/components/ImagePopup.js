import { popupSelectors } from '../utils/utils';

function ImagePopup(props) {
  const card = props.card;

  return (
    <section onClick={props.onClose} className={'popup popup_type_image' + (card.name ? ' popup_opened' : '')} id="image-viewer">
      <figure className="popup__figure">

        <button type="button" className={`${popupSelectors.closeButtonClass} popup__close-button_parent-corners_straight`} />
        <img className="popup__image" alt={card.name} src={card.link} />
        <figcaption className="popup__caption">{card.name}</figcaption>

      </figure>
    </section>
  );
}

export default ImagePopup;