import MainHeader from '../MainHeader/MainHeader';
import selfie from '../../images/AboutMe/selfie.jpg';

const AboutMe = ({ socialLinks, ...props }) => (
  <section className='about-me' id='student'>
    <MainHeader mix='about-me__main-header'>Студент</MainHeader>
    <div className='about-me__data'>
      <article className='about-me__info'>
        <h3 className='about-me__title'>Виталий</h3>
        <p className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</p>
        <p className='about-me__text'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
          Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
        </p>
        <ul className='about-me__social-links'>
          {socialLinks.map((socialLink, index) => (
            <li key={index} className='about-me__social-link'><a className='about-me__link link' href={socialLink.link}>{socialLink.text}</a></li>
          ))}
        </ul>
      </article>
      <img className='about-me__img' src={selfie} alt='Портретная фотография' />
    </div>
  </section>
);

export default AboutMe;
