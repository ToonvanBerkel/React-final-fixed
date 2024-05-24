import React, { useState } from 'react';
import Book from './Book';

const BookList = () => {
  const [books, setBooks] = useState([
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', image: './images/book1.jpg' },
    { title: '1984', author: 'George Orwell', image: './images/book2.jpg' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', image: './images/book3.jpg' }
  ]);

  return (
    <section>
      {books.map((book, index) => (
        <div className='card'>
          <Book key={index} title={book.title} author={book.author} image={book.image} />
        </div>
      ))}
    </section>
  );
};

export default BookList;