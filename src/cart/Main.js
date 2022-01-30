import React from 'react';
import BirthdayCakes from './BirthdayCakes.js';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <BirthdayCakes key={product.id} product={product} onAdd={onAdd}></BirthdayCakes>
        ))}
      </div>
    </main>
  );
}
