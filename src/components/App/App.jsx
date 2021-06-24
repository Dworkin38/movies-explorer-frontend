import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Movies from '../Movies/Movies';

const App = ({ config, ...props }) => (
  <Switch>
    <Route exact path='/'>
      <Main config={config.main} />
    </Route>
    <Route path='/movies'>
      <Movies config={config.main} />
    </Route>
    <Route path='*'>
      <NotFoundPage />
    </Route>
  </Switch>
);

export default App;
