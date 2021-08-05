import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Popup from '../Popup/Popup';
import { PopupContext } from '../../contexts/PopupContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';
import * as MainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

const App = ({ config, ...props }) => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [popupMessage, setPopupMessage] = React.useState('');
  const [token, setToken] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
    loggedIn: false,
  });
  const [savedMovies, setSavedMovies] = React.useState([]);
  const history = useHistory();
  const handlerClosePopup = () => {
    setIsPopupOpen(false);
  };
  const handlerOpenPopup = (message) => {
    setPopupMessage(message);
    setIsPopupOpen(true);
  };

  const handlerTokenCheck = () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      MainApi.checkToken(token).then((res) => {
        if (res) {
          setToken(localStorage.getItem('token'));
          setCurrentUser((oldCurrentUser) => ({ ...oldCurrentUser, loggedIn: true }));
        }
      })
        .catch((error) => {
          handlerOpenPopup(error);
        });
    }
  };

  const handlerLogin = ({ password, email }, setIsLoading) => {
    if (!email || !password) {
      return;
    }
    setIsLoading(true);
    MainApi.authorize(password, email)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          setToken(localStorage.getItem('token'));
          setCurrentUser((oldCurrentUser) => ({ ...oldCurrentUser, email, loggedIn: true }));
          history.push('/movies');
        }
      })
      .catch((error) => {
        handlerOpenPopup(error);
      })
      .finally(() => { setIsLoading(false); });
  };

  const handlerRegister = ({ name, password, email }, setIsLoading) => {
    setIsLoading(true);
    MainApi.register(name, password, email)
      .then((res) => {
        handlerLogin({ password, email }, setIsLoading);
        handlerOpenPopup('Вы успешно зарегистрировались!');
      })
      .catch((error) => {
        handlerOpenPopup(error);
      })
      .finally(() => { setIsLoading(false); });
  };

  const handlerUpdateMe = ({ name, email }, setIsLoading) => {
    setIsLoading(true);
    MainApi.updateMe(token, name, email)
      .then(({ data }) => {
        setCurrentUser((oldCurrentUser) => ({ name: data.name, email: data.email, loggedIn: true }));
        handlerOpenPopup('Профиль отредактирован!');
      })
      .catch((error) => {
        handlerOpenPopup(error);
      })
      .finally(() => { setIsLoading(false); });
  };

  const handlerUserInfo = (token) => {
    MainApi.getUserInfo(token)
      .then(({ data }) => {
        setCurrentUser((oldCurrentUser) => ({ name: data.name, email: data.email, loggedIn: true }));
      })
      .catch((error) => {
        handlerOpenPopup(error);
      });
  };

  const handlerUserExit = () => {
    localStorage.removeItem('token');
    setToken('');
    setCurrentUser({
      name: '',
      email: '',
      loggedIn: false,
    });
    history.push('/');
  };

  const handlerGetSavedMovies = () => {
    MainApi.getSavedMovies(token)
      .then(({ data }) => {
        setSavedMovies((oldSavedMovie) => data)
      })
      .catch((error) => {
        handlerOpenPopup(error);
      });
  }
  const handlerMoviesLike = (movie, setLike) => {
    console.log(movie);
    setLike(true);
    MainApi.saveMovie(token, movie)
      .then((data) => {
        handlerGetSavedMovies();
      })
      .catch((error) => {
        setLike(false);
        handlerOpenPopup(error);
      });
  };

  const handlerMoviesDelete = (movieId, setLike) => {
    const movie = savedMovies.find((movie) => movieId === movie.movieId);
    setLike(false);
    MainApi.deleteMovie(token, movie._id)
      .then((data) => {
        handlerGetSavedMovies();
      })
      .catch((error) => {
        setLike(true);
        handlerOpenPopup(error);
      });
  };

  React.useEffect(() => {
    if (!currentUser.loggedIn) {
      handlerTokenCheck();
    }
  }, []);

  React.useEffect(() => {
    if (currentUser.loggedIn) {
      handlerUserInfo(token);
      handlerGetSavedMovies();
    }
  }, [currentUser.loggedIn, token]);

  return (
    <>
      <CurrentUserContext.Provider value={{ currentUser }}>
        <SavedMoviesContext.Provider value={{ savedMovies }}>
          <PopupContext.Provider value={{ popupMessage, handlerOpenPopup }}>
            <Switch>
              <Route path='/movies'>
                {
                  currentUser.loggedIn ?
                    <ProtectedRoute
                      path='/movies'
                      loggedIn={currentUser.loggedIn}
                      config={config.main}
                      onLike={handlerMoviesLike}
                      onDelete={handlerMoviesDelete}
                      component={Movies} />
                    : <Redirect to='/' />
                }
              </Route>
              <Route path='/saved-movies'>
                {
                  currentUser.loggedIn ?
                    <ProtectedRoute
                      path='/saved-movies'
                      loggedIn={currentUser.loggedIn}
                      config={config.main}
                      onDelete={handlerMoviesDelete}
                      component={SavedMovies} />
                    : <Redirect to='/' />
                }
              </Route>
              <Route path='/profile'>
                {
                  currentUser.loggedIn ?
                    <ProtectedRoute
                      path='/profile'
                      loggedIn={currentUser.loggedIn}
                      onUpdateMe={handlerUpdateMe}
                      onUserExit={handlerUserExit}
                      component={Profile} />
                    : <Redirect to='/' />
                }
              </Route>
              <Route path='/signup'>
                {
                  currentUser.loggedIn ?
                    <Redirect to='/movies' />
                    : <Register onRegister={handlerRegister} />
                }
              </Route>
              <Route path='/signin'>
                {
                  currentUser.loggedIn ?
                    <Redirect to='/movies' />
                    : <Login onLogin={handlerLogin} />
                }
              </Route>
              <Route exact path='/'>
                <Main config={config.main} />
              </Route>
              <Route component={NotFoundPage} />
            </Switch>
            <Popup isOpen={isPopupOpen} handlerPopupClose={handlerClosePopup} />
          </PopupContext.Provider>
        </SavedMoviesContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
};

export default App;
