import React from 'react';

export default function useStateWithLocalStorage(computed, defaultForComputed) {
  const [currentState, updateCurrentState] = React.useState(
    localStorage[computed]
      ? JSON.parse(localStorage[computed])
      : defaultForComputed
  );

  const localStorageChanged = React.useCallback(e => {
    if (e.key === computed) {
      updateCurrentState(JSON.parse(e.newValue));
    }
  }, [computed]);

  const setCurrentState = React.useCallback(value => {
    localStorage[computed] = JSON.stringify(value);
    updateCurrentState(value);
  }, [computed]);

  React.useEffect(() => {
    window.addEventListener('storage', localStorageChanged);
    return () => {
      window.removeEventListener('storage', localStorageChanged);
    }
  }, [localStorageChanged]);

  return [currentState, setCurrentState];
}