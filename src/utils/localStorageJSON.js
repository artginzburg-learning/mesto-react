import React from 'react';

export default function useStateWithLocalStorage(computed, defaultForComputed) {
  const [currentState, setCurrentState] = React.useState(
    localStorage[computed]
      ? JSON.parse(localStorage[computed])
      : defaultForComputed
  );

  React.useEffect(() => {
    console.log('saving state of ' + computed + ' to localStorage');
    localStorage[computed] = JSON.stringify(currentState);
  }, [currentState, computed]);

  return [currentState, setCurrentState];
}