import { Link } from 'react-router-dom';
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

const Login = ({ onLogin, ...props }) => {
  const { values, errors, isValid, handleChange } = useFormWithValidation({
    email: "",
    password: "",
  });

  const handlerSubmit = (event) => {
    event.preventDefault();
    onLogin(values);
  };

  return (
    <AuthorizationForm
      title='Рады видеть!'
      buttonText='Войти'
      isValid={isValid}
      onSubmit={handlerSubmit}
      subtitle={<>Ещё не зарегистрированы?&nbsp;<Link className='link authorization__link' to='/signup'>Регистрация</Link></>}
    >
      <label className='authorization__input-container'>
        <span className='authorization__input-title'>E-mail</span>
        <input
          type='email'
          name='email'
          className='authorization__input'
          value={values.email}
          placeholder='pochta@yandex.ru'
          required
          onChange={handleChange}
        />
        <span className='authorization__input-error'>{errors.email}</span>
      </label>
      <label className='authorization__input-container'>
        <span className='authorization__input-title'>Пароль</span>
        <input
          type='password'
          name='password'
          className='authorization__input'
          value={values.password}
          required
          onChange={handleChange}
        />
        <span className='authorization__input-error'>{errors.password}</span>
      </label>
    </AuthorizationForm>
  );
}

export default Login;
