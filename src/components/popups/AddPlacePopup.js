import { useState } from 'react';

import PopupWithForm from '../PopupWithForm';

export default function AddPlacePopup(props) {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace(title, link);

    setTitle('');
    setLink('');
  }

  return (
    <PopupWithForm {...props} onSubmit={handleSubmit} title="Новое место" name="element-editor" buttonTitle="Создать">

      <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="popup__input" name="title" id="element-title" placeholder="Название" minLength="2" maxLength="30" required />
      <p className="popup__error" id="element-title-error" />

      <input value={link} onChange={e => setLink(e.target.value)} type="url" className="popup__input" name="link" id="element-link" placeholder="Ссылка на картинку" required />
      <p className="popup__error" id="element-link-error" />

    </PopupWithForm>
  );
}