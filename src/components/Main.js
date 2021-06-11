function Main(props) {
  return (
    <main className="content">

      <section className="profile">
        <button onClick={props.onEditAvatar} type="button" className="profile__avatar-container">
          <img alt="Аватар" className="profile__avatar" src="#" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">Неизвестный</h1>
          <p className="profile__description">Потеряно соединение с сервером</p>
          <button onClick={props.onEditProfile} type="button" className="profile__edit-button" />
        </div>
        <button onClick={props.onAddPlace} type="button" className="profile__add-button" />
      </section>

      <section className="elements">
        <ul className="elements__list" />
      </section>

    </main>
  );
}

export default Main;