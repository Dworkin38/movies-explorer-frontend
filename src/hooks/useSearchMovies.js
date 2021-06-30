import React from 'react';

export const useSearchMovies = () => {
  const [findMovies, setFindhMovies] = React.useState();

  const searchMovies = (movies, searchQuery) => {
    const searchTextRegExp = new RegExp(`${searchQuery.text}`, "gi");

    setFindhMovies(
      movies.filter(
        (movie) => (
          (movie.nameRU && movie.nameRU.match(searchTextRegExp)) ||
          (movie.nameEN && movie.nameEN.match(searchTextRegExp)) ||
          (movie.description && movie.description.match(searchTextRegExp)) ||
          (movie.year && movie.year.match(searchTextRegExp)) ||
          (movie.country && movie.country.match(searchTextRegExp))
        ) &&
          (searchQuery.isShortFilm ? movie.duration <= 40 : movie.duration > 40)
      )
    );
  }

  return { findMovies, searchMovies };
};
