import React from 'react';

const Book = ({ from, order, status }) => {
  const statusClass = status === 'ON THE WAY' ? 'status-ontheway' : status === 'RECEIVED' ? 'status-received' : '';

  return ( 
    <>
      <div>
        <h3>{from}</h3>
        <p className="order">{order}</p>
      </div>
      <p className={`status ${statusClass}`}>{status}</p>
    </>
  );
}

export default Book;