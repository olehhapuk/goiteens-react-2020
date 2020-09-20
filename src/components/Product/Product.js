import React from 'react';
import PropTypes from 'prop-types';

import styles from './Product.module.css';

import styled from 'styled-components';

const Button = styled.button`
  background-color: #4aa4ce;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 4px;
  color: ${(props) => (props.inStock ? 'green' : 'red')};

  &:hover {
    background-color: white;
    color: black;
  }
`;

const TomatoButton = styled(Button)`
  background-color: #ef3e36;
`;

function Product({ name, imgUrl, price, quantity }) {
  const isInStock = quantity > 0;

  // const quantityClasses = ['Product-quantity'];

  // if (isInStock) {
  //   quantityClasses.push('available');
  // } else {
  //   quantityClasses.push('not-available');
  // }

  // const quantityClasses = [styles.quantity, isInStock ? styles.available : styles.notAvailable];

  // if (isInStock) {
  //   quantityClasses.push(styles.available);
  // } else {
  //   quantityClasses.push(styles.notAvailable);
  // }

  return (
    <div>
      <img src={imgUrl} alt={name} width="640" />
      <h2>{name}</h2>
      <p>Price: {price}$</p>
      <p className={isInStock ? styles.available : styles.notAvailable}>
        {isInStock ? 'In stock' : 'Out of stock'}
      </p>
      <Button inStock={isInStock}>Click Me</Button>
      <TomatoButton inStock={isInStock}>Tomato</TomatoButton>
      {/* <button type="button" className="btn">
        Add to cart
      </button> */}
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
