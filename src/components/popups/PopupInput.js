import { forwardRef } from 'react';

const defaults = {
  type: 'text',
  required: true,
  minLength: 2,
};

const PopupInput = forwardRef((props, ref) => {
  const type = props.type ?? defaults.type;

  const required = props.required ?? defaults.required;

  const conditionalMinLength = (type === defaults.type)
    ? defaults.minLength
    : null
  ;
  const minLength = props.minLength ?? conditionalMinLength;

  const finalProps = {
    type,
    minLength,
    required
  };

  return (
    <>
      <input {...props} ref={ref} className="popup__input" {...finalProps} />
      <p className="popup__error" id={`${props.id}-error`} />
    </>
  )
})

export default PopupInput;