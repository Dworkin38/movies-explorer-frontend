import { Link } from 'react-router-dom';

const Logo = ({to, src, alt, ...props}) => (
  <Link className='link logo' to={to}><img className='logo__img' src={src} alt={alt} /></Link>
);

export default Logo;
