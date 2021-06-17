import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';

const App = () => (
  <Switch>
    <Route exact path='/'>
      <Main />
    </Route>
  </Switch>
);

export default App;
