import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';

const App = ({ config, ...props }) => (
  <Switch>
    <Route exact path='/'>
      <Main config={config.main} />
    </Route>
  </Switch>
);

export default App;
