import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Promo from '../Promo/Promo';

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
    </main>
  </>
);

export default Main;
