import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';

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
        <Link className='link link_type_text link_style_white link_type_nav-tab' to='#project'>О проекте</Link>
        <Link className='link link_type_text link_style_white link_type_nav-tab' to='#technologies'>Технологии</Link>
        <Link className='link link_type_text link_style_white link_type_nav-tab' to='#student'>Студент</Link>
      </NavTab>
    </main>
  </>
);

export default Main;
