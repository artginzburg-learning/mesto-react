import React from 'react';

import api from '../utils/api';

const localStorageJSON = {
  get currentUser() {
    return localStorage.currentUser ? JSON.parse(localStorage.currentUser) : {};
  },
  set currentUser(newValue) {
    return localStorage.currentUser = JSON.stringify(newValue);
  }
};

const defaultUserState = {
  name: localStorageJSON.currentUser.name ?? 'Неизвестный',
  about: localStorageJSON.currentUser.about ?? 'Потеряно соединение с сервером',
  avatar: localStorageJSON.currentUser.avatar ?? '',
};

const CurrentUserStateContext = React.createContext();
const CurrentUserDispatchContext = React.createContext();

function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = React.useState(defaultUserState);

  React.useEffect(() => {    
    api.getUserInfo().then(result => {
      localStorageJSON.currentUser = result;
      return setCurrentUser(result);
    })
  }, [setCurrentUser]);

  React.useEffect(() => {
    localStorageJSON.currentUser = currentUser;
  }, [currentUser])

  return (
    <CurrentUserStateContext.Provider value={currentUser}>
      <CurrentUserDispatchContext.Provider value={setCurrentUser}>
        {children}
      </CurrentUserDispatchContext.Provider>
    </CurrentUserStateContext.Provider>
  );
}

function useCurrentUser() {
  const context = React.useContext(CurrentUserStateContext);
  if (context === undefined) {
    throw new Error('useCurrentUser must be used within a CurrentUserProvider');
  }
  return context;
}

function useCurrentUserDispatcher() {
  const context = React.useContext(CurrentUserDispatchContext);
  if (context === undefined) {
    throw new Error('useCurrentUserDispatcher must be used within a CurrentUserProvider');
  }
  return context;
}

async function updateUser(dispatch, user, updates) {
  dispatch({...user, ...updates});

  try {
    const updatedUser = await api.editProfile(updates);
    dispatch(updatedUser);
  } catch (error) {
    dispatch(user);
    throw error;
  }
}

async function updateAvatar(dispatch, user, updates) {
  dispatch({...user, ...updates});

  try {
    const updatedUser = await api.updateAvatar(updates);
    dispatch(updatedUser);
  } catch (error) {
    dispatch(user);
    throw error;
  }
}

export { CurrentUserProvider, useCurrentUser, useCurrentUserDispatcher, updateUser, updateAvatar };