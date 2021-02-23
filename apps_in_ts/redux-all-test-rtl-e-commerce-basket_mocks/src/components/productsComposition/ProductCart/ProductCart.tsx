import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

// custom
import SimpleButton from '../../functional/SimpleButton/SimpleButton';
import { addCartItem } from '../../../redux/actions/cart_actions';
import { ApiStructureInterface } from '../../../services/ApiInterface'
import './productCart.scss';



type IProps = PropsFromRedux &
  Pick<ApiStructureInterface, 'productId' | 'title' | 'price' | 'image'>

const ProductCart = ({ title, price, productId, image, addCartItem }: IProps) => {
  return (
    <div className="productCart">
      <h6 className="display-title">{title}</h6>
      <div className="display-image">
        <img src={image} alt={`product${title}`} />
      </div>
      <div className="display-price">{`£ ${price}`}</div>
      <SimpleButton
        label="add to Cart"
        eventHandler={() => { addCartItem({ title, price, productId }); }}
      />
    </div>);
};

const mapDispatchToProps = {
  addCartItem,
};

const connector = connect(null, mapDispatchToProps)
const WrapperProductCart = connector(ProductCart);
type PropsFromRedux = ConnectedProps<typeof connector>

export default WrapperProductCart;
