import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';

const Main = (props) => (
  <>
    <Header mix='header_style_blue'>
      <Navigation>
        <Link className='link link_type_text link_size_s link_style_white' to='/signup'>Регистрация</Link>
        <Link className='link link_type_text link_size_s link_highlight' to='/signin'>Войти</Link>
      </Navigation>
    </Header>
    <main>
      <Promo />
      <NavTab>
        <a className='link link_type_text link_style_white link_type_nav-tab' href='#project'>О проекте</a>
        <a className='link link_type_text link_style_white link_type_nav-tab' href='#technologies'>Технологии</a>
        <a className='link link_type_text link_style_white link_type_nav-tab' href='#student'>Студент</a>
      </NavTab>
      <AboutProject />
    </main>
  </>
);

export default Main;
