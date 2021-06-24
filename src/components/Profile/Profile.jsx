import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Burger from '../Burger/Burger';

const Profile = () => {
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const onClickBurger = () => {
    setIsNavigationOpen(!isNavigationOpen);
  }

  const handlerChangeName = (event) => {
    setName(event.target.value);
  };

  const handlerChangeEmail = (event) => {
    setEmail(event.target.value);
  };

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
      <main className='profile'>
        <form className='profile__form'>
          <h1 className='profile__title'>Привет, Виталий!</h1>
          <label className='profile__input-container'>
            <span className='profile__input-title'>Имя</span>
            <input
              type='text'
              className='profile__input'
              placeholder='Виталий'
              minLength='2'
              maxLength='30'
              required
              value={name}
              onChange={handlerChangeName}
            />
          </label>
          <label className='profile__input-container'>
            <span className='profile__input-title'>E-mail</span>
            <input
              type='email'
              className='profile__input'
              placeholder='pochta@yandex.ru'
              required
              value={email}
              onChange={handlerChangeEmail}
            />
          </label>
          <div className='profile__button-container'>
            <button type='submit' className='button profile__button'>Редактировать</button>
            <button type='button' className='button profile__button profile__button_style_exit'>Выйти из аккаунта</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Profile;
