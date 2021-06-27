import React from 'react';

import useStateWithLocalStorage from '../hooks/useStateWithLocalStorage';
import api from '../utils/api';

const defaultUserState = {
  name: 'Неизвестный',
  about: 'Потеряно соединение с сервером',
  avatar: '',
};

const CurrentUserContext = React.createContext();
const CurrentUserDispatchContext = React.createContext();

function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useStateWithLocalStorage('currentUser', defaultUserState);

  React.useEffect(() => {
    api.getUserInfo().then(setCurrentUser);
  }, [setCurrentUser]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentUserDispatchContext.Provider value={setCurrentUser}>
        {children}
      </CurrentUserDispatchContext.Provider>
    </CurrentUserContext.Provider>
  );
}

function useCurrentUserDispatcher() {
  const context = React.useContext(CurrentUserDispatchContext);
  if (context === undefined) {
    throw new Error('useCurrentUserDispatcher must be used within a CurrentUserProvider');
  }
  return context;
}

function objectsAreEqual(first, second) {
  return JSON.stringify(first) === JSON.stringify(second);
}

async function sendApiUpdate(dispatch, user, updates, func) {
  const expectedUser = {...user, ...updates};
  dispatch(expectedUser);

  try {
    const updatedUser = await api[func](updates);
    if (!objectsAreEqual(expectedUser, updatedUser)) {
      dispatch(updatedUser);
    }
  } catch (error) {
    dispatch(user);
    throw error;
  }
}

export { CurrentUserContext, CurrentUserProvider, useCurrentUserDispatcher, sendApiUpdate };