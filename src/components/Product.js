import React from 'react';
import PropTypes from 'prop-types';

function Product({ name, imgUrl, price, quantity }) {
  const isInStock = quantity > 0;

  return (
    <div>
      <img src={imgUrl} alt={name} width="640" />
      <h2>{name}</h2>
      <p>Price: {price}$</p>
      <p>{isInStock ? 'In stock' : 'Out of stock'}</p>
      <button type="button">Add to cart</button>
      <hr />
    </div>
  );
}

Product.defaultProps = {
  imgUrl:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

Product.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Product;
