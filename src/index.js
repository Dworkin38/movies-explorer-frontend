import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import config from './utils/config.js';


ReactDOM.render(
  <BrowserRouter >
    <App config={config} />
  </BrowserRouter>
  ,
  document.querySelector('.app')
);