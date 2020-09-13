import React from 'react';
import PropTypes from 'prop-types';

function Product({ price, quantity, imageUrl, title }) {
  return (
    <div>
      <img src={imageUrl} alt={title} width="640" />
      <h2>{title}</h2>
      <p>Price: {price}$</p>
      <p>{quantity > 0 ? 'In stock' : 'Out of stock'}</p>
      {quantity > 0 && <button type="button">Add to cart</button>}
      <hr />
    </div>
  );
}

Product.defaultProps = {
  title: 'No title',
};

Product.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string.isRequired,
};

export default Product;
