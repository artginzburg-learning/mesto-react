import React from 'react';

import { useCurrentUser, useCurrentUserDispatcher, sendApiUpdate } from '../../contexts/CurrentUserContext';

import PopupWithForm from '../PopupWithForm';
import PopupInput from '../PopupInput';

export default function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [about, setAbout] = React.useState('');

  const currentUser = useCurrentUser();
  const setCurrentUser = useCurrentUserDispatcher();

  React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  function handleSubmit() {
    sendApiUpdate(setCurrentUser, currentUser, {
      name,
      about,
    }, 'editProfile');

    props.onUpdateUser();
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAboutChange(e) {
    setAbout(e.target.value);
  }

  return (
    <PopupWithForm {...props} onSubmit={handleSubmit} title="Редактировать профиль" name="profile-editor">

      <PopupInput isFocused={props.isOpen} value={name} onChange={handleNameChange} autoComplete="name" autoCapitalize="words" name="name" id="profile-name" placeholder="Имя" maxLength="40" />

      <PopupInput value={about} onChange={handleAboutChange} name="about" id="profile-about" placeholder="О себе" maxLength="200" />

    </PopupWithForm>
  );
}