import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import movies from "../../utils/movies";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const MovieCardList = ({isSaved, ...props}) => {
  const { width } = useWindowDimensions();

  let stepUpSizeArray = 16;

  if (width <= 768 && width > 450) {
    stepUpSizeArray = 8;
  }

  if (width <= 450) {
    stepUpSizeArray = 5;
  }

  const [sizeArray, setSizeArray] = React.useState(stepUpSizeArray);

  const handlerMoreButtonClick = () => {
    setSizeArray(sizeArray + stepUpSizeArray);
  }

  return (
    <section className='movie-card-list'>
      <ul className='movie-card-list__items'>
        {movies.slice(0, sizeArray).map((movie, index) => (
          <li key={index} className='movie-card-list__item'>
            <MoviesCard movie={movie} isSaved={isSaved} />
          </li>
        ))}
      </ul>
      <div className='movie-card-list__button-wrapper'>
        {movies.length > sizeArray && <button className='movie-card-list__button' onClick={handlerMoreButtonClick}>Ещё</button>}
      </div>
    </section>
  );
}

export default MovieCardList;
