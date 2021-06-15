import React from 'react';

import api from '../utils/api';

const defaultUserState = {
  name: 'Неизвестный',
  about: 'Потеряно соединение с сервером',
  avatar: '',
};

const CurrentUserStateContext = React.createContext();
const CurrentUserDispatchContext = React.createContext();

function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = React.useState(defaultUserState);

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

async function updateUser(dispatch, user, updates) {
  dispatch(updates);

  try {
    const updatedUser = await api.editProfile(updates);
    dispatch(updatedUser);
  } catch (error) {
    dispatch(user);
    throw error;
  }
}

export { CurrentUserProvider, useCurrentUser, useCurrentUserDispatcher, updateUser };