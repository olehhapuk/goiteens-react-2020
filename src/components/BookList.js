import React from 'react';

export default function BookList({ favBooks }) {
  return (
    <ul>
      {favBooks.map((book) => (
        <li key={book.id}>{book.name}</li>
      ))}
    </ul>
  );
}
