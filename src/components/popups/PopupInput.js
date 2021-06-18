import React from 'react';

const PopupInput = React.forwardRef((props, ref) => {
  const defaultType = 'text';

  const type = props.type ?? defaultType;

  const minLength = (type === defaultType)
    ? 2
    : null
  ;

  return (
    <>
      <input {...props} ref={ref} className="popup__input" type={type} minLength={props.minLength ?? minLength} />
      <p className="popup__error" id={`${props.id}-error`} />
    </>
  )
})

export default PopupInput;