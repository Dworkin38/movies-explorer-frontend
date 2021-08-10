import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Burger from '../Burger/Burger';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Preloader from '../Preloader/Preloader';

const Profile = ({ onUpdateMe, onUserExit, ...props }) => {
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);
  const { values, errors, isValid, handleChange } = useFormWithValidation({
    name: '',
    email: '',
  });
  const [isRedact, setRedact] = React.useState(false);
  const { currentUser } = React.useContext(CurrentUserContext);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickBurger = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  const onClikRedact = () => {
    setRedact(true);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    onUpdateMe(values, setIsLoading);
  };

  const isValidProfileForm = () => {
    return isValid && (!(currentUser.name === values.name) || !(currentUser.email === values.email));
  }
  
  return (
    <>
      {isLoading && <Preloader />}
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
      <main className='profile'>
        <form className='profile__form' onSubmit={handlerSubmit}>
          <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
          <label className='profile__input-container'>
            <span className='profile__input-title'>Имя</span>
            <input
              type='name'
              name='name'
              className='profile__input'
              placeholder={`${currentUser.name}`}
              minLength='2'
              maxLength='30'
              required
              value={values.name}
              onChange={handleChange}
            />
            <span className='profile__input-error'>{errors.name}</span>
          </label>
          <label className='profile__input-container'>
            <span className='profile__input-title'>E-mail</span>
            <input
              type='email'
              name='email'
              pattern="\S+@\S+\.\S+"
              className='profile__input'
              placeholder={`${currentUser.email}`}
              required
              value={values.email}
              onChange={handleChange}
            />
            <span className='profile__input-error'>{errors.email}</span>
          </label>
          <div className='profile__button-container'>
            {
              !isRedact ? (
                <>
                  <button type='button' className='button profile__button' onClick={onClikRedact}>Редактировать</button>
                  <button type='button' className='button profile__button profile__button_style_exit' onClick={onUserExit}>Выйти из аккаунта</button>
                </>
              ) : (
                <button
                  type='submit'
                  className={`button profile__button-submit ${ !isValidProfileForm() ? 'profile__button-submit_disabled' : ''}`}
                  disabled={ !isValidProfileForm() }>
                  Сохранить
                </button>
              )
            }
          </div>
        </form>
      </main>
    </>
  );
}

export default Profile;
