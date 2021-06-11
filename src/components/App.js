import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />

      <Main />

      <Footer />

      <section className="popup" id="avatar-editor">
        <div className="popup__container">
          <button type="reset" className="popup__close-button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" action="#">
            <input type="url" className="popup__input" name="avatar" id="profile-avatar" placeholder="Ссылка на картинку" required />
            <p className="popup__error" id="profile-avatar-error"></p>
            <button type="submit" className="popup__button">Сохранить</button>
          </form>
        </div>
      </section>

      <section className="popup" id="profile-editor">
        <div className="popup__container">
          <button type="reset" className="popup__close-button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" action="#">
            <input type="text" autoComplete="name" autoCapitalize="words" className="popup__input" name="name" id="profile-name" placeholder="Имя" minLength="2" maxLength="40" required />
            <p className="popup__error" id="profile-name-error"></p>
            <input type="text" className="popup__input" name="about" id="profile-about" placeholder="О себе" minLength="2" maxLength="200" required />
            <p className="popup__error" id="profile-about-error"></p>
            <button type="submit" className="popup__button">Сохранить</button>
          </form>
        </div>
      </section>

      <section className="popup" id="element-editor">
        <div className="popup__container">
          <button type="button" className="popup__close-button"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" action="#">
            <input type="text" className="popup__input" name="title" id="element-title" placeholder="Название" minLength="2" maxLength="30" required />
            <p className="popup__error" id="element-title-error"></p>
            <input type="url" className="popup__input" name="link" id="element-link" placeholder="Ссылка на картинку" required />
            <p className="popup__error" id="element-link-error"></p>
            <button type="submit" className="popup__button">Создать</button>
          </form>
        </div>
      </section>

      <section className="popup" id="delete-confirmation">
        <div className="popup__container">
          <button type="button" className="popup__close-button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form">
            <button type="submit" className="popup__button">Да</button>
          </form>
        </div>
      </section>

      <section className="popup popup_type_image" id="image-viewer">
        <figure className="popup__figure">
          <button type="button" className="popup__close-button popup__close-button_parent-corners_straight"></button>
          <img className="popup__image" alt="#" src="#" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </section>

      <template id="element-template">
        <li className="element">
          <img className="element__image" alt="#" />
          <button type="reset" className="element__trash-button"></button>
          <div className="element__container">
            <h2 className="element__title">#</h2>
            <div className="element__likes">
              <button type="button" className="element__like-button"></button>
              <p className="element__like-counter"></p>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;
