import FormValidator from './FormValidator';
import { defaultFormConfig } from './utils';

export default function enableValidations() {
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
}