function Main() {
  return (
    <main className="content">

    <section className="profile">
      <button type="button" className="profile__avatar-container">
        <img alt="Аватар" className="profile__avatar" src="#" />
      </button>
      <div className="profile__info">
        <h1 className="profile__name">Неизвестный</h1>
        <p className="profile__description">Потеряно соединение с сервером</p>
        <button type="button" className="profile__edit-button"></button>
      </div>
      <button type="button" className="profile__add-button"></button>
    </section>

    <section className="elements">
      <ul className="elements__list">
      </ul>
    </section>

    </main>
  );
}

export default Main;