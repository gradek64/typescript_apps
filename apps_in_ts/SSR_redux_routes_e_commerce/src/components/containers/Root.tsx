import React from 'react';
// custom
import BasketIconStore from '../functional/BasketIcon/BasketIcon';
import Modal from '../../common/Modal/Modal'
import Basket from '../logic/Basket/Basket'
import customEvent from '../../customEvents/dispatchEvent'


interface rootPropsI {
  children: JSX.Element[]
}
const Root = ({ children }: rootPropsI) => {

  return (
    <>
      <header>
        <h2>Top Seller</h2>
      </header>
      <nav>
        <BasketIconStore eventHandler={() => customEvent.emit('OPEN_BASKET')} />
      </nav>
      <Modal eventOn="OPEN_BASKET">
        <Basket />
      </Modal>
      {children}
    </>
  )
}

export default Root
