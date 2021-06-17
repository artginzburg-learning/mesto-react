import { createRef } from 'react';

import { useCurrentUser, useCurrentUserDispatcher, updateAvatar } from '../../contexts/CurrentUserContext';

import PopupWithForm from '../PopupWithForm';

export default function EditAvatarPopup(props) {
  const ref = createRef();

  const currentUser = useCurrentUser();
  const setCurrentUser = useCurrentUserDispatcher();

  function handleSubmit(e) {
    e.preventDefault();

    updateAvatar(setCurrentUser, currentUser, {
      avatar: ref.current.value
    });

    props.onUpdateAvatar();

    e.target.reset();
  }

  return (
    <PopupWithForm {...props} onSubmit={handleSubmit} title="Обновить аватар" name="avatar-editor">

      <input ref={ref} type="url" className="popup__input" name="avatar" id="profile-avatar" placeholder="Ссылка на картинку" required />
      <p className="popup__error" id="profile-avatar-error" />

    </PopupWithForm>
  );
}