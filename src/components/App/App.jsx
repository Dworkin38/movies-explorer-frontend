import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';

const App = ({ config, ...props }) => (
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
);

export default App;
