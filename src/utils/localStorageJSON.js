import React from 'react';

function initiateLocalStorageJSON(computed, defaultForComputed) {
  return {
    get [computed]() {
      return localStorage[computed] ? JSON.parse(localStorage[computed]) : defaultForComputed;
    },
    set [computed](newValue) {
      return localStorage[computed] = JSON.stringify(newValue);
    }
  };
}

export default function useStateWithLocalStorage(computed, defaultForComputed) {
  const localStorageJSON = initiateLocalStorageJSON(computed, defaultForComputed);

  const [currentState, setCurrentState] = React.useState(localStorageJSON[computed]);

  React.useEffect(() => {
    localStorageJSON[computed] = currentState;
  }, [currentState, localStorageJSON, computed]);

  return [currentState, setCurrentState];
}