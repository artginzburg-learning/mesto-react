import React from 'react';

const PopupInput = React.forwardRef((props, ref) => {
  const defaultType = 'text';

  const type = props.type ?? defaultType;

  const minLength = (type === defaultType)
    ? 2
    : null
  ;

  const required = props.required ?? true;

  return (
    <>
      <input {...props} ref={ref} className="popup__input" type={type} minLength={props.minLength ?? minLength} required={required} />
      <p className="popup__error" id={`${props.id}-error`} />
    </>
  )
})

export default PopupInput;