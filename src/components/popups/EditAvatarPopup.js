import { createRef } from 'react';

import { useCurrentUser, useCurrentUserDispatcher, sendApiUpdate } from '../../contexts/CurrentUserContext';

import PopupWithForm from '../PopupWithForm';

import PopupInput from './PopupInput';

export default function EditAvatarPopup(props) {
  const ref = createRef();

  const currentUser = useCurrentUser();
  const setCurrentUser = useCurrentUserDispatcher();

  function handleSubmit() {
    sendApiUpdate(setCurrentUser, currentUser, {
      avatar: ref.current.value
    }, 'updateAvatar');

    props.onUpdateAvatar();
  }

  return (
    <PopupWithForm {...props} onSubmit={handleSubmit} title="Обновить аватар" name="avatar-editor">

      <PopupInput isFocused={props.isOpen} ref={ref} type="url" name="avatar" id="profile-avatar" placeholder="Ссылка на картинку" />

    </PopupWithForm>
  );
}