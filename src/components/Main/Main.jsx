import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Burger from '../Burger/Burger';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Main = ({ config, ...props }) => {
  const { currentUser } = React.useContext(CurrentUserContext);
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);
  const onClickBurger = () => {
    setIsNavigationOpen(!isNavigationOpen);
  }
  
  return (
    <>
      <Header mix='header_style_blue'>
        {currentUser.loggedIn ? (
          <>
            <Navigation mix={`navigation_type_authorized ${isNavigationOpen && 'navigation_open'}`} isOpen={isNavigationOpen}>
              <Burger mix='navigation__burger' onClick={onClickBurger} isOpen={isNavigationOpen} />
              <ul className='navigation__list'>
                <li className='navigation__list-item navigation__list-item_mobile'><NavLink className='link navigation__link' exact to='/' activeClassName='navigation__link_active'>Главная</NavLink></li>
                <li className='navigation__list-item'><NavLink className='link navigation__link navigation__link_white' to='/movies' activeClassName='navigation__link_active'>Фильмы</NavLink></li>
                <li className='navigation__list-item'><NavLink className='link navigation__link navigation__link_white' to='/saved-movies' activeClassName='navigation__link_active'>Сохранённые фильмы</NavLink></li>
              </ul>
              <Link className='link navigation__profile navigation__profile_white' to='/profile'>Аккаунт<div className='navigation__profile-icon' /></Link>
            </Navigation>
            <Burger onClick={onClickBurger} isOpen={isNavigationOpen} />
          </>
        ) : (
          <Navigation>
            <Link className='link navigation__link navigation__link_type_unauthorized' to='/signup'>Регистрация</Link>
            <Link className='link navigation__link navigation__link_type_unauthorized navigation__link_style_highlight' to='/signin'>Войти</Link>
          </Navigation>
        )}
      </Header>
      <main>
        <Promo />
        <NavTab>
          <a className='link navtab__link' href='#project'>О проекте</a>
          <a className='link navtab__link' href='#technologies'>Технологии</a>
          <a className='link navtab__link' href='#student'>Студент</a>
        </NavTab>
        <AboutProject />
        <Techs techs={config.techs} />
        <AboutMe socialLinks={config.socialLinks} />
        <Portfolio portfolio={config.portfolio} />
      </main>
      <Footer footerLinks={config.footerLinks} />
    </>
  );
}

export default Main;
