import React from 'react';
import { Provider } from 'react-redux';
// custom
import DisplayProductsList from './components/productsComposition/DisplayProductsList/DisplayProductsList';
import BasketIconStore from './components/functional/BasketIcon/BasketIcon';
import Modal from './common/Modal/Modal'
import Basket from './components/logic/Basket/Basket'
import store from './redux/store';
import customEvent from './customEvents/dispatchEvent'
import './app.scss'


function App() {
  return (
    <Provider store={store}>
      <header>
        <h2>Top Seller</h2>
      </header>
      <nav>
        <BasketIconStore eventHandler={() => customEvent.emit('OPEN_BASKET')} />
      </nav>
      <Modal eventOn="OPEN_BASKET">
        <Basket />
      </Modal>
      <DisplayProductsList />

    </Provider>
  );
}

export default App;
