import React, { useState } from 'react';
import './ProductCard.css';
import { FaHeart } from 'react-icons/fa'; // Importing the heart icon from react-icons

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false); // State to track if the product is favorited

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite); // Toggle favorite status
  };

  return (
    <div className="product-card">
      <div className="favorite-icon" onClick={handleFavoriteClick}>
        <FaHeart color={isFavorite ? 'red' : 'white'} />
      </div>
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-prices">
          <span className="old-price">${product.old_price.toFixed(2)}</span>
          <span className="new-price">${product.new_price.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
