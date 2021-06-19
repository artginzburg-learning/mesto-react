import FormValidator from './FormValidator';
import { defaultFormConfig } from './utils';

const popupsToValidate = [
  '#element-editor',
  '#avatar-editor',
  '#profile-editor',
];

export default function enableValidations() {
  popupsToValidate.forEach(popupSelector => {
    const profileEditorValidator = new FormValidator(
      defaultFormConfig,
      document.querySelector(popupSelector).querySelector(defaultFormConfig.formSelector)
    );
    profileEditorValidator.enableValidation();
  });
}