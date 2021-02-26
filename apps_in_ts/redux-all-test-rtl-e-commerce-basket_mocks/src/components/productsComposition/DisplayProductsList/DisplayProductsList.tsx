import React from 'react';

// custom
import ProductCartStore from '../ProductCart/ProductCart';
import { useFetch } from "../../../services/useFetch";
import './displayProductsList.scss';

const ProductsList = () => {
  const { data, loading, error } = useFetch({ url: './mock_products.json' })
  //const { data, loading, error } = useFetch({ url: 'https://jsainsburyplc.github.io/front-end-test/products.json' })

  return (
    <div className="products-list">
      {loading && !data && 'loading...'}
      {error && !data && 'something gone wrong refresh a page'}
      {data && data!.map((props, i) => (
        <ProductCartStore
          {...props}
          key={`item'${i}`}
        />
      ))}
    </div>
  );
}
export default ProductsList;
