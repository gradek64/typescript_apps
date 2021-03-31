import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom'
import { createBrowserHistory } from "history";
// custom
import DisplayProductsList from './components/productsComposition/DisplayProductsList/DisplayProductsList';
import BasketIconStore from './components/functional/BasketIcon/BasketIcon';
import Modal from './common/Modal/Modal'
import Basket from './components/logic/Basket/Basket'
import store from './redux/store';
import customEvent from './customEvents/dispatchEvent'
import { getRoutes } from './shared/getRoutes'
import './app.scss'

const history = createBrowserHistory();


function App() {
  return (
    <Provider store={store}>
      <Router history={history}>{getRoutes(store)}
        {/* <header>
          <h2>Top Seller</h2>
        </header>
        <nav>
          <BasketIconStore eventHandler={() => customEvent.emit('OPEN_BASKET')} />
        </nav>
        <Modal eventOn="OPEN_BASKET">
          <Basket />
        </Modal>
        <DisplayProductsList /> */}
      </Router>
    </Provider>
  );
}

export default App;
