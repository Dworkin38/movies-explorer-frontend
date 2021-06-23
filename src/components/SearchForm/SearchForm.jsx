import React from 'react';

const SearchForm = () => {
  const [value, setValue] = React.useState('');
  const [isShortFilm, setIsShortFilm] = React.useState(false);

  const handlerOnChangeInputText = (event) => {
    setValue(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    console.log(value);
  }

  const handlerChangeShortFilm = () => {
    setIsShortFilm(!isShortFilm);
  }

  return (
    <form className='search-form' onSubmit={handlerSubmit}>
      <div className='search-form__container'>
        <div className='search-form__search-icon' />
        <input
          className='search-form__input-text'
          placeholder='Фильм'
          value={value}
          onChange={handlerOnChangeInputText} />
        <button className='search-form__search-button' type='submit' />
      </div>
      <label className='search-form__short-film'>
        <input
          type='checkbox'
          className='search-form__checkbox-hidden'
          checked={isShortFilm}
          onChange={handlerChangeShortFilm} />
        <span className={`search-form__toggle-track ${isShortFilm ? 'search-form__toggle-track_active' : ''}`} />
        <span className='search-form__short-film-text'>Короткометражки</span>
      </label>
    </form>
  );
};

export default SearchForm;