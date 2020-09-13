import React from 'react';
import Layout from './Layout';
// import Product from './Product';
import BookList from './BookList';

const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
  { id: 'id-4', name: 'Redux in depth' },
];

function App() {
  return (
    <Layout>
      {/* <Product
        price={10.99}
        imageUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        title="Tacos With Lime"
        quantity={10}
      />
      <Product
        price={15.99}
        imageUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        title="Fries and Burger"
        quantity={0}
      /> */}

      <BookList favBooks={favouriteBooks} />
    </Layout>
  );
}

export default App;
