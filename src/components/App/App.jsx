import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';

const App = ({ config, ...props }) => (
  <Switch>
    <Route exact path='/'>
      <Main techs={config.techs} />
    </Route>
  </Switch>
);

export default App;
