const Footer = ({footerLinks, ...props}) => (
  <footer className='footer'>
    <p className='footer__caption'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
    <p className='footer__copyright'>&copy; 2021</p>
    <ul className='footer__items'>
      {footerLinks.map((footerLink, index) => (
        <li key={index} className='footer__item'><a className='footer__link link' href={footerLink.link}>{footerLink.text}</a></li>
      ))}
    </ul>
  </footer>
);

export default Footer;
