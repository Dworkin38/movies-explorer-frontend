import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import useCardsDimensions from "../../hooks/useCardsDimensions";

const MovieCardList = ({ isSaved, movies,onLike, onDelete, ...props }) => {
  const {countCards, stepUpCards} = useCardsDimensions();
  const [moreCards, setMoreCards] = React.useState(0);
  const handlerMoreButtonClick = () => {
    setMoreCards(moreCards + 1);
  }
  
  return (
    <section className='movie-card-list'>
      {
        movies ? ( movies.length > 0 ?
          (<>
            <ul className='movie-card-list__items'>
              {movies.slice(0, countCards + moreCards*stepUpCards).map((movie) => (
                <li key={movie.movieId} className='movie-card-list__item'>
                  <MoviesCard movie={movie} isSaved={isSaved} onLike={onLike} onDelete={onDelete}/>
                </li>
              ))}
            </ul>
            <div className='movie-card-list__button-wrapper'>
              {!isSaved && movies.length > countCards && <button className='button movie-card-list__button' onClick={handlerMoreButtonClick}>Ещё</button>}
            </div>
          </>) : (<p className='movie-card-list__message'>Ничего не найдено</p>)
        ) : (
          <p className='movie-card-list__message'>Введите ключевое слово</p>
        )
      }
    </section>
  );
}

export default MovieCardList;
