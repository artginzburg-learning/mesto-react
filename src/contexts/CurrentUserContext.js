import React from 'react';

import initiateLocalStorageJSON from '../utils/localStorageJSON';
import api from '../utils/api';

const localStorageJSON = initiateLocalStorageJSON('currentUser', {});

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
    });
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

async function sendApiUpdate(dispatch, user, updates, func) {
  dispatch({...user, ...updates});

  try {
    const updatedUser = await api[func](updates);
    dispatch(updatedUser);
  } catch (error) {
    dispatch(user);
    throw error;
  }
}

export { CurrentUserProvider, useCurrentUser, useCurrentUserDispatcher, sendApiUpdate };