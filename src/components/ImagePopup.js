import { popupSelectors } from '../utils/utils';

function ImagePopup(props) {
  return (
    <section onClick={props.onClose} className={'popup popup_type_image' + (props.card.name ? ' popup_opened' : '')} id="image-viewer">
      <figure className="popup__figure">
        <button type="button" className={`${popupSelectors.closeButtonClass} popup__close-button_parent-corners_straight`} />
        <img className="popup__image" alt={props.card.name} src={props.card.link} />
        <figcaption className="popup__caption">{props.card.name}</figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;