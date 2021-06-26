import { useState, useEffect } from "react";

const popupAnimationDuration = 300;

const defaultClassName = 'popup';
const classNameOpened = ` ${defaultClassName}_opened`;

const isOpenedByDefault = false;
const emptyString = '';

export default function Popup(props) {
  const [ classNameForAnimation, setClassNameForAnimation ] = useState(emptyString);
  const [ shouldAppearInDOM, setShouldAppearInDOM ] = useState(isOpenedByDefault);

  useEffect(() => {
    if (!props.isOpen) {
      document.activeElement.blur(); // fixes mobile keyboard being stuck on the screen after form submission (due to `event.preventDefault()`)
    }

    if (props.isOpen) {
      setShouldAppearInDOM(!isOpenedByDefault);
      const showingTimout = setTimeout(() => {
        setClassNameForAnimation(classNameOpened);
      }, 10);

      return () =>
        clearTimeout(showingTimout);
    } else {
      setClassNameForAnimation(emptyString);
      const hidingTimeout = setTimeout(() => {
        setShouldAppearInDOM(isOpenedByDefault);
      }, popupAnimationDuration);

      return () =>
        clearTimeout(hidingTimeout);
    }
  }, [props.isOpen]);

  if (!shouldAppearInDOM) {
    return null;
  }

  const passedClassName = props.className ? ` ${props.className} ` : '';

  const className = defaultClassName + passedClassName + classNameForAnimation;

  return (
    <section onClick={props.onClick} className={className} id={props.id}>
      {props.children}
    </section>
  );
}