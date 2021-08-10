import MainHeader from '../MainHeader/MainHeader';

const Techs = ({ techs, ...props }) => (
  <section className='techs' id='technologies'>
    <MainHeader mix='techs__main-header'>Технологии</MainHeader>
    <h3 className='techs__title'>7 технологий</h3>
    <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
    <ul className='techs__items'>
      {techs.map((tech, index) => (
        <li key={index} className='techs__item'><p className='techs__item-text'>{tech}</p></li>
      ))}
    </ul>
  </section>
);

export default Techs;
