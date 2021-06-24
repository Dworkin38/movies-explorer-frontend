import { Link } from 'react-router-dom';
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";

const Login = () => {
  return (
    <AuthorizationForm
      title='Рады видеть!'
      buttonText='Войти'
      subtitle={<>Ещё не зарегистрированы?&nbsp;<Link className='link authorization__link' to='/signup'>Регистрация</Link></>}
    >
      <label className='authorization__input-container'>
        <span className='authorization__input-title'>E-mail</span>
        <input
          type='email'
          className='authorization__input'
          placeholder='pochta@yandex.ru'
          required
        />
      </label>
      <label className='authorization__input-container'>
        <span className='authorization__input-title'>Пароль</span>
        <input
          type='password'
          className='authorization__input'
          required
        />
      </label>
    </AuthorizationForm>
  );
}

export default Login;
