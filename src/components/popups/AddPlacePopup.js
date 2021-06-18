import { useState } from 'react';

import PopupWithForm from '../PopupWithForm';

import PopupInput from './PopupInput';

export default function AddPlacePopup(props) {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit() {
    props.onAddPlace(title, link);

    setTitle('');
    setLink('');
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm {...props} onSubmit={handleSubmit} title="Новое место" name="element-editor" buttonTitle="Создать">

      <PopupInput value={title} onChange={handleTitleChange} name="title" id="element-title" placeholder="Название" maxLength="30" />

      <PopupInput value={link} onChange={handleLinkChange} type="url" name="link" id="element-link" placeholder="Ссылка на картинку" />

    </PopupWithForm>
  );
}