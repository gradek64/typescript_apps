import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';

// custom
import SelectOptions from '../../functional/SelectOptions/SelectOptions';
import SimpleButton from '../../functional/SimpleButton/SimpleButton';
import { addItemThunkInt } from '../../productsComposition/ProductCart/ProductCart'

import './basket.scss';
//redux 

import { cartReducerInterface } from '../../../redux/reducers/cart_reducer'
import { addOrUpdateCartItem, removeCartItem, getCardContentAction } from '../../../redux/actions/cart_actions';


type IProps = PropsFromRedux & {
  items: (addItemThunkInt[]),
  numberOfItems: number,
}

class Basket extends Component<IProps> {
  state = {
    total: 0,
  }

  componentDidMount = async () => {
    const { getCardContentAction } = this.props
    await getCardContentAction()
    this.calculateTotal()
  }

  componentDidUpdate = (prevProps: IProps) => {
    const { items: prevItems } = prevProps;
    const { items } = this.props;
    if (prevItems !== items) {
      this.calculateTotal();
    }
  }

  removeFromCart({ productId, quantity = 1 }: { productId: number, quantity: number }) {
    this.props.removeCartItem({ productId, quantity });
  }

  quantify(e: React.ChangeEvent, pCode: number) {
    const { addOrUpdateCartItem } = this.props;
    const { value } = e.target as HTMLOptionElement
    const { items } = this.props;
    const currentItem = items.find(({ productId }) => productId === pCode);

    addOrUpdateCartItem(currentItem as addItemThunkInt, Number(value))
    this.calculateTotal();
  }

  calculateTotal() {
    const { items } = this.props;
    const total = items.reduce(
      (acc, { price = 0, quantity }): number => {
        const productPrice = quantity ? price * quantity : price;
        return acc + productPrice;
      }, 0);

    this.setState(state => (
      { total }
    ));
  }
  render() {
    const { total } = this.state;
    // redux mapped props
    const { items, numberOfItems } = this.props;

    return (
      <React.Fragment>
        {numberOfItems > 0 ? (
          <div className="basket-container">
            <div className="basket">
              <h2>Order Summary</h2>
              <div className="table-row frame">
                <div>Product</div>
                <div>Quantity</div>
                <div>purchase more</div>
                <div>remove Item</div>
                <div>unit price</div>

              </div>
              {items ? items.map(({
                title, productId, price, quantity = 1,
              }, i) => (

                <div className="table-row" key={`basket${i}`}>
                  <div>{title}</div>
                  <div>
                    {quantity}
                  </div>
                  <div>
                    <SelectOptions
                      eventHandler={(e: React.ChangeEvent) => { this.quantify(e, productId); }}
                      defaultV={quantity}
                      options={[1, 2, 3, 4, 5]}
                    />
                  </div>
                  <div>
                    <SimpleButton
                      label="remove"
                      eventHandler={() => { this.removeFromCart({ productId, quantity }); }}
                    />
                  </div>
                  <div>{`£ ${price}`}</div>
                </div>

              )) : null}
              <div className="table-row frame total">
                <div>total</div>
                {Array.from({ length: 3 }, (e, i) => <div key={`empty${i}`} />)}
                <div className='total'>{`£ ${total.toFixed(2)}`}</div>
              </div>
            </div>
          </div>

        ) : <div className="basket-empty">Your basket is empty</div>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ cart }: { cart: cartReducerInterface }) => {
  const { items, numberOfItems } = cart;
  return { items, numberOfItems };
};

const mapDispatchToProps = {
  removeCartItem,
  addOrUpdateCartItem,
  getCardContentAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps)
const WrapperBasketStore = connector(Basket);
type PropsFromRedux = ConnectedProps<typeof connector>

export default WrapperBasketStore;

