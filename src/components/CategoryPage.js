import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import all_product_raw from '../assets/images/all_product'; // Adjust path if needed
import new_collections_raw from '../assets/images/new_collections'; // Adjust path if needed

const CategoryPage = () => {
  const { category } = useParams(); // Get the category from the URL

  // Utility function to extract a category from the product name
  const getCategoryFromName = (name) => {
    const keywords = ['blouse', 'jacket', 'sweatshirt']; // Define category keywords
    for (let keyword of keywords) {
      if (name.toLowerCase().includes(keyword)) {
        return keyword; // Return the matched keyword
      }
    }
    return 'others'; // Default category if no keyword matches
  };

  // Add category dynamically to all products if not already present
  const all_products = all_product_raw.map((product) => ({
    ...product,
    category: getCategoryFromName(product.name), // Add a `category` field
  }));

  const new_collections = new_collections_raw.map((product) => ({
    ...product,
    category: getCategoryFromName(product.name), // Add a `category` field
  }));

  // Combine and filter products by category
  const filteredProducts = [
    ...all_products.filter((product) => product.category === category),
    ...new_collections.filter((product) => product.category === category),
  ];

  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h1> {/* Capitalize the category name */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p>No products available in this category</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
