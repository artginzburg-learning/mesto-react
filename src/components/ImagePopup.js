function ImagePopup() {
  return (
    <section className="popup popup_type_image" id="image-viewer">
      <figure className="popup__figure">
        <button type="button" className="popup__close-button popup__close-button_parent-corners_straight" />
        <img className="popup__image" alt="#" src="#" />
        <figcaption className="popup__caption" />
      </figure>
    </section>
  );
}

export default ImagePopup;