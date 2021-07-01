import React from 'react';
import { PopupContext } from '../../contexts/PopupContext';

const SearchForm = ({
  values = {
    text: '',
    isShortFilm: false,
  },
  onChange = () => {},
  onSearch = () => {},
  isSaved = false,
}) => {

  const { handlerOpenPopup } = React.useContext(PopupContext);

  const handlerOnChange = (event) => {
    const input = event.target;
    const { type, name, value, checked } = input;
    onChange({ ...values, [name]: type === "checkbox" ? checked : value });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    
    if(values.text === '') {
      isSaved ? onSearch(values.text) : handlerOpenPopup('Нужно ввести ключевое слово');
    } else {
      onSearch();
    }
  }

  return (
    <form className='search-form' onSubmit={handlerSubmit}>
      <div className='search-form__container'>
        <div className='search-form__search-icon' />
        <input
          className='search-form__input-text'
          placeholder='Фильм'
          name='text'
          value={values.text}
          onChange={handlerOnChange} />
        <button className='button search-form__search-button' type='submit' />
      </div>
      <label className='search-form__short-film'>
        <input
          type='checkbox'
          name='isShortFilm'
          className='search-form__checkbox-hidden'
          checked={values.isShortFilm}
          onChange={handlerOnChange} />
        <span className={`search-form__toggle-track ${values.isShortFilm ? 'search-form__toggle-track_active' : ''}`} />
        <span className='search-form__short-film-text'>Короткометражки</span>
      </label>
    </form>
  );
};

export default SearchForm;
