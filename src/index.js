import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import { CurrentUserProvider } from './contexts/CurrentUserContext';

import FormValidator from './utils/FormValidator';
import { defaultFormConfig } from './utils/utils';

ReactDOM.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

const popupsToValidate = [
  '#element-editor',
  '#avatar-editor',
  '#profile-editor',
];
popupsToValidate.forEach(popupSelector => {
  const profileEditorValidator = new FormValidator(
    defaultFormConfig,
    document.querySelector(popupSelector).querySelector(defaultFormConfig.formSelector)
  );
  profileEditorValidator.enableValidation();
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
