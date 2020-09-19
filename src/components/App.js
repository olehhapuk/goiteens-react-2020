import React from 'react';

import Panel from './Panel';
import Product from './Product';

export default function App() {
  return (
    <Panel title="Best selling products">
      <Product name="Tacos With Lime" price={10.99} quantity={5} />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
        quantity={0}
      />
    </Panel>
  );
}
