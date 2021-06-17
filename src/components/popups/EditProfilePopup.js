import React from 'react';

import { useCurrentUser, useCurrentUserDispatcher, updateUser } from '../../contexts/CurrentUserContext';

import PopupWithForm from '../PopupWithForm';

export default function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [about, setAbout] = React.useState('');

  const currentUser = useCurrentUser();
  const setCurrentUser = useCurrentUserDispatcher();

  React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    updateUser(setCurrentUser, currentUser, {
      name,
      about,
    });

    props.onUpdateUser();
  }
  
  return (
    <PopupWithForm {...props} onSubmit={handleSubmit} title="Редактировать профиль" name="profile-editor">

      <input value={name} onChange={e => setName(e.target.value)} type="text" autoComplete="name" autoCapitalize="words" className="popup__input" name="name" id="profile-name" placeholder="Имя" minLength="2" maxLength="40" required />
      <p className="popup__error" id="profile-name-error" />

      <input value={about} onChange={e => setAbout(e.target.value)} type="text" className="popup__input" name="about" id="profile-about" placeholder="О себе" minLength="2" maxLength="200" required />
      <p className="popup__error" id="profile-about-error" />

    </PopupWithForm>
  );
}