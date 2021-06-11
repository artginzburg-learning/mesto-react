function PopupWithForm(props) {
  return (
    <section className="popup" id={props.name}>
      <div className="popup__container">

        <button type="reset" className="popup__close-button"></button>
        <h2 className="popup__title">{props.title}</h2>

        <form className="popup__form" action="#">

          {props.children}

          <button type="submit" className="popup__button">{props.buttonTitle ?? 'Сохранить'}</button>

        </form>

      </div>
    </section>
  );
}

export default PopupWithForm;