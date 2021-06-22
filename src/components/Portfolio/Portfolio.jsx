const Portfolio = ({portfolio, ...props}) => (
  <section className='portfolio'>
    <h3 className='portfolio__title'>Портфолио</h3>
    <ul className='portfolio__works'>
      {portfolio.map((work, index) => (
        <li key={index} className='portfolio__work'>
          <a className='portfolio__link link' href={work.link}>{work.text}</a>
          <a className='portfolio__link link' href={work.link}>&#8599;</a>
        </li>
      ))}
    </ul>
  </section>
);

export default Portfolio;
