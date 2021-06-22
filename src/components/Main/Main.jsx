import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

const Main = ({config, ...props}) => (
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
      <Techs techs={config.techs} />
      <AboutMe socialLinks={config.socialLinks} />
      <Portfolio portfolio={config.portfolio} />
      <Footer footerLinks={config.footerLinks} />
    </main>
  </>
);

export default Main;
