import { useState, useEffect } from 'react';
import {
  MEDIUM_WIDTH,
  LARGE_WIDTH,
  VERY_LARGE_WIDTH,
  COUNT_CARDS_VERY_LARGE_WIDTH,
  COUNT_CARDS_LARGE_WIDTH,
  COUNT_CARDS_MEDIUM_WIDTH,
  COUNT_CARDS_SMALL_WIDTH,
  STEP_UP_CARDS_VERY_LARGE_WIDTH,
  STEP_UP_CARDS_LARGE_WIDTH,
  STEP_UP_CARDS_MEDIUM_WIDTH,
  STEP_UP_CARDS_SMALL_WIDTH,
} from '../utils/constant';

function getCardsDimensions() {
  const { innerWidth: width } = window;

  if(width < MEDIUM_WIDTH) {
    return { countCards: COUNT_CARDS_SMALL_WIDTH, stepUpCards: STEP_UP_CARDS_SMALL_WIDTH };
  }

  if((width >= MEDIUM_WIDTH) && (width < LARGE_WIDTH)) {
    return { countCards: COUNT_CARDS_MEDIUM_WIDTH, stepUpCards: STEP_UP_CARDS_MEDIUM_WIDTH };
  }

  if((width >= LARGE_WIDTH) && (width < VERY_LARGE_WIDTH)) {
    return { countCards: COUNT_CARDS_LARGE_WIDTH, stepUpCards: STEP_UP_CARDS_LARGE_WIDTH };
  }

  if(width >= VERY_LARGE_WIDTH) {
    return { countCards: COUNT_CARDS_VERY_LARGE_WIDTH, stepUpCards: STEP_UP_CARDS_VERY_LARGE_WIDTH };
  }

}


export default function useCardsDimensions() {
  const [cardsDimensions, setCardsDimensions] = useState(getCardsDimensions());
  useEffect(() => {

    function handleResize() {
      setCardsDimensions((oldCardsDimensions) => getCardsDimensions())
    }

    let resizeTimeout;
    function resizeThrottler() {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          resizeTimeout = null;
          handleResize();
        }, 1000);
      }
    }

    window.addEventListener('resize', resizeThrottler);
    return () => window.removeEventListener('resize', resizeThrottler);
  }, [cardsDimensions.countCards]);

  return cardsDimensions;
}