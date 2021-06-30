import { useState, useEffect } from 'react';

function getCardsDimensions() {
  const { innerWidth: width } = window;
  return width > 450 ? (
    width > 768 ? { countCards: 12, stepUpCards: 3 } : { countCards: 8, stepUpCards: 2 }
  ) : { countCards: 5, stepUpCards: 1 };
}


export default function useCardsDimensions() {
  const [cardsDimensions, setCardsDimensions] = useState(getCardsDimensions());
  useEffect(() => {

    function handleResize() {
      setCardsDimensions((oldCardsDimensions) => getCardsDimensions())
    }

    let resizeTimeout;
    function resizeThrottler() {
      if ( !resizeTimeout ) {
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          handleResize();
         }, 1000);
      }
    }
    
    window.addEventListener('resize',  resizeThrottler);
    return () => window.removeEventListener('resize', resizeThrottler);
  }, [cardsDimensions.countCards]);

  return cardsDimensions;
}