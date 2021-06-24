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
        <Link className='link navigation__link navigation__link_type_unauthorized' to='/signup'>Регистрация</Link>
        <Link className='link navigation__link navigation__link_type_unauthorized navigation__link_style_highlight' to='/signin'>Войти</Link>
      </Navigation>
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

export default Main;
