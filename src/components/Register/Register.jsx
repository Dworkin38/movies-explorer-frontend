import { Link } from 'react-router-dom';
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

const Register = ({onRegister, ...props}) => {
  const { values, errors, isValid, handleChange } = useFormWithValidation({
    name: '',
    email: '',
    password: '',
  });

  const handlerSubmit = (event) => {
    event.preventDefault();
    onRegister(values);
  };

  return (
    <AuthorizationForm
      title='Привет, Виталий!'
      buttonText='Зарегистрироваться'
      isValid={isValid}
      onSubmit={handlerSubmit}
      subtitle={<>Уже зарегистрированы?&nbsp;<Link className='link authorization__link' to='/signin'>Войти</Link></>}
    >
      <label className='authorization__input-container'>
        <span className='authorization__input-title'>Имя</span>
        <input
          type='text'
          name='name'
          className='authorization__input'
          placeholder='Виталий'
          minLength='2'
          maxLength='30'
          pattern='[a-zA-ZА-Яа-яЁё\s\-]+'
          required
          value={values.name}
          onChange={handleChange}
        />
        <span className='authorization__input-error'>{errors.name}</span>
      </label>
      <label className='authorization__input-container'>
        <span className='authorization__input-title'>E-mail</span>
        <input
          type='email'
          name='email'
          className='authorization__input'
          placeholder='pochta@yandex.ru'
          required
          value={values.email}
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
          required
          value={values.password}
          onChange={handleChange}
        />
        <span className='authorization__input-error'>{errors.password}</span>
      </label>
    </AuthorizationForm>
  );
}

export default Register;
