import PopupWithForm from '../PopupWithForm';

export default function ConfirmDeletePopup(props) {
  function handleSubmit() {
    props.onCardDelete(props.card);
  }

  return (
    <PopupWithForm {...props} onSubmit={handleSubmit} title="Вы уверены?" name="delete-confirmation" buttonTitle="Да" />
  );
}