import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Burger from '../Burger/Burger';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';
import { useSearchMovies } from '../../hooks/useSearchMovies';

const SavedMovies = ({ config, onDelete, ...props }) => {
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);
  const onClickBurger = () => {
    setIsNavigationOpen(!isNavigationOpen);
  }
  const { savedMovies } = React.useContext(SavedMoviesContext);
  const { findMovies, searchMovies } = useSearchMovies();
  const [searchQuery, setSearchQuery] = React.useState({
    text: '',
    isShortFilm: false,
  });

  const handlerSearchFilm = () => {
    searchMovies(savedMovies, searchQuery);
  };

  React.useEffect(() => {
    searchMovies(savedMovies, searchQuery);

  }, [savedMovies, searchQuery.isShortFilm])

  return (
    <>
      <Header>
        <Navigation mix={`navigation_type_authorized ${isNavigationOpen && 'navigation_open'}`} isOpen={isNavigationOpen}>
          <Burger mix='navigation__burger' onClick={onClickBurger} isOpen={isNavigationOpen} />
          <ul className='navigation__list'>
            <li className='navigation__list-item navigation__list-item_mobile'>
              <NavLink className='link navigation__link' exact to='/' activeClassName='navigation__link_active'>Главная</NavLink>
            </li>
            <li className='navigation__list-item'>
              <NavLink className='link navigation__link' to='/movies' activeClassName='navigation__link_active'>Фильмы</NavLink>
            </li>
            <li className='navigation__list-item'>
              <NavLink className='link navigation__link' to='/saved-movies' activeClassName='navigation__link_active'>Сохранённые фильмы</NavLink>
            </li>
          </ul>
          <Link className='link navigation__profile' to='/profile'>Аккаунт<div className='navigation__profile-icon' /></Link>
        </Navigation>
        <Burger onClick={onClickBurger} isOpen={isNavigationOpen} />
      </Header>
      <main className='saved-movies'>
        <SearchForm isSaved={true} onSearch={handlerSearchFilm} values={searchQuery} onChange={setSearchQuery} />
        <MovieCardList isSaved={true} movies={findMovies} onDelete={onDelete} />
      </main>
      <Footer footerLinks={config.footerLinks} />
    </>
  );
};

export default SavedMovies;