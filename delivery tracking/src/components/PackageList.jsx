import React, { useState } from 'react';
import Book from './Package';

const BookList = () => {
  const [books] = useState([
    { from: 'Rotterdam', order: '14389-91751', status: 'ON THE WAY' },
    { from: 'Los Angeles', order: '53921-98765', status: 'RECEIVED' },
    { from: 'Chicago', order: '72918-54321', status: 'RECEIVED' },
    { from: 'Houston', order: '48230-67890', status: 'RECEIVED' },
    { from: 'Phoenix', order: '32947-13579', status: 'RECEIVED' },
    { from: 'Philadelphia', order: '49281-24680', status: 'RECEIVED' },
    { from: 'San Antonio', order: '83012-35791', status: 'RECEIVED' }
  ]);

  return (
    <section>
      <h2>Delivery Tracking</h2>
      {books.map((book, index) => (
        <div className='card'>
          <Book key={index} from={`Package from ${book.from}`} order={`Order ID #${book.order}`} status={book.status} />
        </div>
      ))}
    </section>
  );
};

export default BookList;