import React from 'react';
import { useParams } from 'react-router-dom';
import all_product from '../assets/images/all_product';

const ProductDetails = () => {
  const { id } = useParams(); // Extract the product ID from the URL
  const product = all_product.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '300px' }} />
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Price:</strong> ${product.new_price} <span style={{ textDecoration: 'line-through', color: 'gray' }}>${product.old_price}</span>
      </p>
      <p>
        <strong>Description:</strong> Add a detailed description here if available.
      </p>
    </div>
  );
};

export default ProductDetails;
