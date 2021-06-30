import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Popup from '../Popup/Popup';
import { PopupContext } from '../../contexts/PopupContext';

const App = ({ config, ...props }) => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [popupMessage, setPopupMessage] = React.useState('');

  const handlerClosePopup = () => {
    setIsPopupOpen(false);
  }

  const handlerOpenPopup = (message) => {
    setPopupMessage(message);
    setIsPopupOpen(true);
  }

  return (
    <>
      <PopupContext.Provider value={{ popupMessage, handlerOpenPopup }}>
        <Switch>
          <Route path='/movies'>
            <Movies config={config.main} />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies config={config.main} />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/signup'>
            <Register />
          </Route>
          <Route path='/signin'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Main config={config.main} />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
        <Popup isOpen={isPopupOpen} handlerPopupClose={handlerClosePopup} />
      </PopupContext.Provider>
    </>
  );
};

export default App;
