import React, { useEffect, useState } from 'react';

function RatingProductList() {
  const [ratingProducts, setRatingProducts] = useState([]);

  useEffect(() => {
    fetch('api/rating-products')
      .then(response => response.json())
      .then(data => setRatingProducts(data))
      .catch(error => console.log(error));
  },
   []);

  return (
    <div>
      <h1>Rating Products</h1>
      <ul>
        {ratingProducts.map(product => (
          <li key={product.id}>
            <p>Rating: {product.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RatingProductList;
