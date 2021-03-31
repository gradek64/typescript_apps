import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

// custom
import './basket-icon.scss';
import { cartReducerInterface } from '../../../redux/reducers/cart_reducer'

type IProps = PropsFromRedux & {
  eventHandler: () => void,
}

const BasketIconIS = ({ eventHandler, numberOfItems }: IProps) =>
(<div className="basket-icon sticky">
  {/* use button for tab accessibility and AA standards and enter key and space out of the box */}
  <button
    role="link"
    disabled={!(!!numberOfItems)}
    className={!!numberOfItems ? 'pointer' : 'no-pointer'}
    onClick={!!numberOfItems ? eventHandler : () => { }}
  >
    <img
      src="/images/shopping-cart-3.svg"
      alt="open basket"
    />
  </button>
  {!!numberOfItems ? <span className="inBasket">{numberOfItems}</span> : null}
</div>);


const mapStateToProps = ({ cart }: { cart: Pick<cartReducerInterface, 'numberOfItems'> }) => {
  const { numberOfItems } = cart;
  return { numberOfItems };
};

const connector = connect(mapStateToProps)
const WrapperBasketIcon = connector(BasketIconIS);
type PropsFromRedux = ConnectedProps<typeof connector>

export default WrapperBasketIcon;
