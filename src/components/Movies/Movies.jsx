import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Burger from '../Burger/Burger';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useSearchMovies } from '../../hooks/useSearchMovies';
import * as MoviesApi from '../../utils/MoviesApi';
import { PopupContext } from '../../contexts/PopupContext';

const Movies = ({ config, onLike, onDelete, ...props }) => {
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);
  const onClickBurger = () => {
    setIsNavigationOpen(!isNavigationOpen);
  }
  const { handlerOpenPopup } = React.useContext(PopupContext);
  const [movies, setMovies] = React.useState();
  const { findMovies, searchMovies } = useSearchMovies();
  const [moviesDisplay, setMoviesDisplay] = React.useState();
  const [searchQuery, setSearchQuery] = React.useState({
    text: '',
    isShortFilm: false,
  });

  const handlerSearchFilm = () => {
    searchMovies(movies, searchQuery);
  }

  React.useEffect(() => {
    MoviesApi.getMovies()
      .then((movies) => {
        setMovies((oldMovies) => movies);
      })
      .catch((errors => handlerOpenPopup(errors)));
  }, [handlerOpenPopup]);

  React.useEffect(() => {
    if (findMovies && findMovies.length) {
      localStorage.setItem('filteredMovies', JSON.stringify(findMovies));
      setMoviesDisplay(findMovies);
    }
  }, [findMovies]);

  React.useEffect(()=> {
    if ( localStorage.getItem('filteredMovies') ) {
      setMoviesDisplay(JSON.parse(localStorage.getItem('filteredMovies')));
    }
  }, []);
  
  return (
    <>
      <Header>
        <Navigation mix={`navigation_type_authorized ${isNavigationOpen && 'navigation_open'}`} isOpen={isNavigationOpen}>
          <Burger mix='navigation__burger' onClick={onClickBurger} isOpen={isNavigationOpen} />
          <ul className='navigation__list'>
            <li className='navigation__list-item navigation__list-item_mobile'><NavLink className='link navigation__link' exact to='/' activeClassName='navigation__link_active'>Главная</NavLink></li>
            <li className='navigation__list-item'><NavLink className='link navigation__link' to='/movies' activeClassName='navigation__link_active'>Фильмы</NavLink></li>
            <li className='navigation__list-item'><NavLink className='link navigation__link' to='/saved-movies' activeClassName='navigation__link_active'>Сохранённые фильмы</NavLink></li>
          </ul>
          <Link className='link navigation__profile' to='/profile'>Аккаунт<div className='navigation__profile-icon' /></Link>
        </Navigation>
        <Burger onClick={onClickBurger} isOpen={isNavigationOpen} />
      </Header>
      <main className='movies'>
        <SearchForm onSearch={handlerSearchFilm} values={searchQuery} onChange={setSearchQuery} />
        <MovieCardList isSaved={false} movies={moviesDisplay} onLike={onLike} onDelete={onDelete} />
      </main>
      <Footer footerLinks={config.footerLinks} />
    </>
  );
};

export default Movies;
