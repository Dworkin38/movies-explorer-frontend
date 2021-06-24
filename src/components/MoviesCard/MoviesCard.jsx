import React from "react";

const MoviesCard = ({ movie, isSaved, ...props }) => {
  const [like, setLike] = React.useState(false);

  const handlerClikeLike = () => {
    setLike(!like);
  }

  return (
    <article className='movies-card'>
      <img className='movies-card__img' src={movie.src} alt={movie.alt} />
      <h3 className='movies-card__title'>{movie.name}</h3>
      {isSaved ? '' : <button className={`movie-card__button ${like ? 'movie-card__button_liked' : ''}`} type='button' onClick={handlerClikeLike} />}
      <p className='movies-card__duration'>{movie.duration}</p>
    </article>
  );
};

export default MoviesCard;
