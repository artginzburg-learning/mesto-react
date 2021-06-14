import React from 'react';

import api from '../utils/api';

const defaultUserState = {
  name: 'Неизвестный',
  about: 'Потеряно соединение с сервером',
  avatar: '',
};

const CurrentUserContext = React.createContext();

function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = React.useState(defaultUserState);

  React.useEffect(() =>
    api.getUserInfo().then(setCurrentUser)
  , []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {children}
    </CurrentUserContext.Provider>
  );
}

function useCurrentUser() {
  const context = React.useContext(CurrentUserContext);
  if (context === undefined) {
    throw new Error('useCurrentUser must be used within a CurrentUserProvider');
  }
  return context;
}

export { CurrentUserProvider, useCurrentUser };