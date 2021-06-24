import { Link } from 'react-router-dom';
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";

const Register = () => {
  return (
    <AuthorizationForm
      title='Привет, Виталий!'
      buttonText='Зарегистрироваться'
      subtitle={<>Уже зарегистрированы?&nbsp;<Link className='link authorization__link' to='/signin'>Войти</Link></>}
    >
      <label className='authorization__input-container'>
        <span className='authorization__input-title'>Имя</span>
        <input
          type='text'
          className='authorization__input'
          placeholder='Виталий'
          minLength='2'
          maxLength='30'
          required
        />
      </label>
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

export default Register;
