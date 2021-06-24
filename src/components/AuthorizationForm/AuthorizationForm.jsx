import Header from '../Header/Header';

const AuthorizationForm = ({ title, onSubmit, buttonText, subtitle, ...props }) => {
  return (
    <>
      <main className='authorization' >
        <Header mix='authorization__header' />
        <form className='authorization__form' onSubmit={onSubmit}>
          <h1 className='authorization__title'>{title}</h1>
          <div className='authorization__inputs'>
            {props.children}
          </div>
          <div className='authorization__button-container'>
            <button className='button authorization__button'>{buttonText}</button>
            <div className='authorization__subtitle'>{subtitle}</div>
          </div>
        </form>
      </main>
    </>
  );
};

export default AuthorizationForm;
