import Logo from '../Logo/Logo';
import logoImg from '../../images/Logo/logo.svg';

const Header = ({mix, ...props}) => (
  <header className={`header ${mix || ''}`}>
    <Logo to='/' alt={'Логотип'} src={logoImg} />
    {props.children}
  </header>
);

export default Header;
