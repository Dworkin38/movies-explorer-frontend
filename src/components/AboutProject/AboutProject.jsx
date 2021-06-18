import MainHeader from '../MainHeader/MainHeader';

const AboutProject = () => (
  <section className='about-project' id='project'>
    <MainHeader mix='about-project__main-header'>О проекте</MainHeader>
    <article className='about-project__text-block'>
      <h3 className='about-project__title'>Дипломный проект включал 5 этапов</h3>
      <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
    </article>
    <article className='about-project__text-block'>
      <h3 className='about-project__title'>На выполнение диплома ушло 5 недель</h3>
      <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
    </article>
    <ul className='about-project__progress'>
      <li>
        <p className='about-project__progress-time about-project__progress-time_active'>1 неделя</p>
        <p className='about-project__progress-subtitle'>Back-end</p>
      </li>
      <li>
        <p className='about-project__progress-time'>4 недели</p>
        <p className='about-project__progress-subtitle'>Front-end</p>
      </li>
    </ul>
  </section>
);

export default AboutProject;