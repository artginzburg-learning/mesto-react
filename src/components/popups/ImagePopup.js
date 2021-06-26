import { popupSelectors } from '../../utils/utils';

import Popup from '../Popup';

function ImagePopup(props) {
  const card = props.card;

  return (
    <Popup isOpen={props.isOpen} onClick={props.onClose} className="popup_type_image" id="image-viewer">
      <figure className="popup__figure">

        <button type="button" className={`${popupSelectors.closeButtonClass} ${popupSelectors.closeButtonClass}_parent-corners_straight`} />
        <img className="popup__image" alt={card.name} src={card.link} />
        <figcaption className="popup__caption">{card.name}</figcaption>

      </figure>
    </Popup>
  );
}

export default ImagePopup;