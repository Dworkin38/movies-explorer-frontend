import React from 'react';
import { PopupContext } from '../../contexts/PopupContext';

const Popup = ({ isOpen, handlerPopupClose, ...props }) => {
  const { popupMessage } = React.useContext(PopupContext);

  React.useEffect(() => {
    const handlerEscClose = (event) => {
      if (event.key === 'Escape') {
        handlerPopupClose();
      }
    }

    document.addEventListener('keyup', handlerEscClose);
    
    return () => {
      document.removeEventListener('keyup', handlerEscClose);
    }
  })

  return (
    <div className={`popup ${isOpen ? '' : 'popup_hidden'}`}>
      <div className='popup__content'>
        <button className='button popup__button' type='button' onClick={handlerPopupClose} />
        <h2 className='popup__title'>{popupMessage}</h2>
      </div>
    </div>
  );
}

export default Popup;
