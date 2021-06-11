function Main() {
  function handleEditAvatarClick() {
    document.querySelector('#avatar-editor').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('#profile-editor').classList.add('popup_opened');

  }

  function handleAddPlaceClick() {
    document.querySelector('#element-editor').classList.add('popup_opened');
  }

  return (
    <main className="content">

      <section className="profile">
        <button onClick={handleEditAvatarClick} type="button" className="profile__avatar-container">
          <img alt="Аватар" className="profile__avatar" src="#" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">Неизвестный</h1>
          <p className="profile__description">Потеряно соединение с сервером</p>
          <button onClick={handleEditProfileClick} type="button" className="profile__edit-button"></button>
        </div>
        <button onClick={handleAddPlaceClick} type="button" className="profile__add-button"></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
        </ul>
      </section>

    </main>
  );
}

export default Main;