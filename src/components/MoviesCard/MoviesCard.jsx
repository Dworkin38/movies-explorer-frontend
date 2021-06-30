import React from "react";

const MoviesCard = ({ movie, isSaved, ...props }) => {
  const [like, setLike] = React.useState(false);

  const handlerClikeLike = () => {
    setLike(!like);
  }

  const handlerClikeDelete = () => {
    console.log('delete')
  }

  return (
    <article className='movies-card'>
      <a className='link movies-card__link' href={movie.trailer} target='_blank' rel="noreferrer"><img className='movies-card__img' src={movie.image} alt={movie.nameRU} /></a>
      <h3 className='movies-card__title'>{movie.nameRU}</h3>
      {
        isSaved ? (
          <button className='button movie-card__button movie-card__button_delete' type='button' onClick={handlerClikeDelete} />
        ) : (
          <button className={`button movie-card__button ${like ? 'movie-card__button_liked' : ''}`} type='button' onClick={handlerClikeLike} />
        )}
      <p className='movies-card__duration'>
        {movie.duration > 60 && `${parseInt(movie.duration / 60)}ч `}
        {movie.duration % 60 !== 0 && `${parseInt(movie.duration % 60)}м`}
      </p>
    </article>
  );
};

export default MoviesCard;
