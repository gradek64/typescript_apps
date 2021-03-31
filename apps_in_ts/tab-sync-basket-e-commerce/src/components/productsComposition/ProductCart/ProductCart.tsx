import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

// custom
import SimpleButton from '../../functional/SimpleButton/SimpleButton';
import { addOrUpdateCartItem } from '../../../redux/actions/cart_actions';
import { ApiStructureInterface } from '../../../services/ApiInterface'
import './productCart.scss';



type IProps = PropsFromRedux &
  Pick<ApiStructureInterface, 'productId' | 'title' | 'price' | 'image'>

export interface addItemThunkInt {
  productId: number,
  title: string,
  price: number,
  quantity: number,
}

const ProductCart = ({ title, price, productId, image, addOrUpdateCartItem }: IProps) => {
  return (
    <div className="productCart">
      <h6 className="display-title">{title}</h6>
      <div className="display-image">
        <img src={image} alt={`product${title}`} />
      </div>
      <div className="display-price">{`£ ${price}`}</div>
      <SimpleButton
        label="add to Cart"
        eventHandler={() => { addOrUpdateCartItem({ title, price, productId, quantity: 1 }) }}
      />
    </div>);
};

const mapDispatchToProps = {
  addOrUpdateCartItem,
};

const connector = connect(null, mapDispatchToProps)
const WrapperProductCart = connector(ProductCart);
type PropsFromRedux = ConnectedProps<typeof connector>

export default WrapperProductCart;
