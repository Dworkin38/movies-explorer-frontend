import { useHistory } from "react-router-dom";

const NotFoundPage = () => {
  const history = useHistory();
  const handlerBackButtonClick = () => {
    history.goBack();
  }

  return (
  <main className='not-found-page'> 
    <h1 className='not-found-page__title'>404</h1>
    <p className='not-found-page__subtitle'>Страница не найдена</p>
    <button className='link not-found-page__link' onClick={handlerBackButtonClick}>Назад</button>
  </main>
  );
}

export default NotFoundPage;
