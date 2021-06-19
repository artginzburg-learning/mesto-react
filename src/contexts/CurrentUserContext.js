import React from 'react';

import useStateWithLocalStorage from '../utils/localStorageJSON';
import api from '../utils/api';

const defaultUserState = {
  name: 'Неизвестный',
  about: 'Потеряно соединение с сервером',
  avatar: '',
};

const CurrentUserStateContext = React.createContext();
const CurrentUserDispatchContext = React.createContext();

function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useStateWithLocalStorage('currentUser', defaultUserState);

  React.useEffect(() => {
    api.getUserInfo().then(setCurrentUser);
  }, [setCurrentUser]);

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