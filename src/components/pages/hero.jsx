// import React, { useState } from 'react';
// import ProductCard from '../ProductCard';
// import './hero.css';
// import Logo from '../../assets/images/logo.png';
// import herogif from '../../assets/images/M-1.0-UHP-02082024-MainBanner-Z1-P1- Without Sponsored-new - Copy.gif';
// import all_product_raw from '../../assets/images/all_product';

// // Utility function to extract category from the product name
// const getCategoryFromName = (name) => {
//   const keywords = ['Blouse', 'Jacket', 'Sweatshirt'];
//   for (let keyword of keywords) {
//     if (name.toLowerCase().includes(keyword.toLowerCase())) {
//       return keyword.toLowerCase();
//     }
//   }
//   return 'others'; // Default category if no match
// };

// // Add categories dynamically to the product list
// const all_product = all_product_raw.map((product) => ({
//   ...product,
//   category: getCategoryFromName(product.name),
// }));

// const Hero = () => {
//   const [filteredProducts, setFilteredProducts] = useState(all_product);

//   const handleFilter = (category) => {
//     if (category === 'all') {
//       setFilteredProducts(all_product);
//     } else {
//       setFilteredProducts(
//         all_product.filter((product) => product.category === category)
//       );
//     }
//   };

//   return (
//     <div className="hero">
//       <div className="hero-gif image">
//         {/* <img className="hider" src={Logo} alt="for hiding" /> */}
//         <img src={herogif} alt="Animated Banner" />
//       </div>
//       {/* Filters and Products */}
//       <div className="products-section">
//         <div className="filter-buttons">
//           <button onClick={() => handleFilter('all')}>All</button>
//           <button onClick={() => handleFilter('blouse')}>Blouse</button>
//           <button onClick={() => handleFilter('jacket')}>Jacket</button>
//           <button onClick={() => handleFilter('sweatshirt')}>Sweatshirt</button>
//         </div>
//         <div className="product-list">
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
  
// };

// export default Hero;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../ProductCard';
import './hero.css';
import herogif from '../../assets/images/M-1.0-UHP-02082024-MainBanner-Z1-P1- Without Sponsored-new - Copy.gif';
import all_product_raw from '../../assets/images/all_product';
import new_collections_raw from '../../assets/images/new_collections'; // Make sure this is the correct path

// Utility function to extract category from the product name
const getCategoryFromName = (name) => {
  const keywords = ['Blouse', 'Jacket', 'Sweatshirt'];
  for (let keyword of keywords) {
    if (name.toLowerCase().includes(keyword.toLowerCase())) {
      return keyword.toLowerCase();
    }
  }
  return 'others'; // Default category if no match
};

// Add categories dynamically to the product lists
const all_product = all_product_raw.map((product) => ({
  ...product,
  category: getCategoryFromName(product.name),
}));

const new_collections = new_collections_raw.map((product) => ({
  ...product,
  category: getCategoryFromName(product.name),
}));

const Hero = () => {
  const [filteredProducts, setFilteredProducts] = useState(all_product);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the starting index of visible cards
  const navigate = useNavigate();

  const handleFilter = (category) => {
    if (category === 'all') {
      setFilteredProducts(all_product);
    } else {
      setFilteredProducts(
        all_product.filter((product) => product.category === category)
      );
    }
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // Navigate to the product details page
  };

  const handleNewCollectionClick = (category) => {
    navigate(`/category/${category}`); // Navigate to category-specific page
  };

  // For moving one card at a time (4 cards shown, move one)
  const handlePrevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? new_collections.length - 4 : prev - 1));
  };

  const handleNextCard = () => {
    setCurrentIndex((prev) => (prev === new_collections.length - 4 ? 0 : prev + 1));
  };

  const visibleCollections = new_collections.slice(currentIndex, currentIndex + 4); // Show 4 cards at a time

  return (
    <div className="hero">
      <div className="hero-gif image">
        <img src={herogif} alt="Animated Banner" />
      </div>

      {/* New Collection Section */}
      <div className="new-collection-section">
        <h2>New Collections</h2>
        <div className="new-collection-slider">
          <button className="slider-button" onClick={handlePrevCard}>
            &lt;
          </button>
          <div className="new-collection-cards">
            {visibleCollections.map((product) => (
              <div
                key={product.id}
                className="new-collection-item"
                onClick={() => handleNewCollectionClick(product.category)}
                style={{ cursor: 'pointer' }}
              >
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
              </div>
            ))}
          </div>
          <button className="slider-button" onClick={handleNextCard}>
            &gt;
          </button>
        </div>
      </div>

      {/* Filters and Products */}
      <div className="products-section">
        <div className="filter-buttons">
          <button onClick={() => handleFilter('all')}>All</button>
          <button onClick={() => handleFilter('blouse')}>Blouse</button>
          <button onClick={() => handleFilter('jacket')}>Jacket</button>
          <button onClick={() => handleFilter('sweatshirt')}>Sweatshirt</button>
        </div>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              style={{ cursor: 'pointer' }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
