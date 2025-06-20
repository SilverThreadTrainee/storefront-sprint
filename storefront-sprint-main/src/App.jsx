// Importing reusable components used in the application UI
import ProductCard from "./components/ProductCard";
import InventoryBadge from "./components/InventoryBadge";
import PromoBanner from "./components/PromoBanner";
import CheckoutButton from "./components/CheckoutButton";

// Import React hooks for state and lifecycle handling
import { useEffect, useState } from 'react';





// Main functional component
export default function App() {
  // Initializing state variable 'products' with a list of product objects
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      image: './src/images/wireless-headphone.jpg', // Product image path
      originalPrice: '129.99', // Original price before discount
      price: '99.99',          // Discounted price
      discount: 23,            // Discount percentage
      status: 'inStock'        // Inventory status
    },
    {
      id: 2,
      name: 'Smart Watch',
      image: './src/images/Smart Watch.jpg',
      originalPrice: '199.99',
      price: '199.99',
      discount: 1,
      status: 'lowStock'
    },
    {
      id: 3,
      name: 'Running Shoes',
      image: './src/images/Running Shoes.jpg',
      originalPrice: '99.99',
      price: '79.99',
      discount: 20,
      status: 'outOfStock'
    },
    {
      id: 4,
      name: 'Coffee Maker',
      image: './src/images/Coffee Maker.jpg',
      originalPrice: '199.99',
      price: '149.99',
      discount: 4,
      status: 'inStock',
    },
  ]);

  // JSX returned to render the component
  return (
    <div className="container mx-auto p-4"> {/* Main container with padding and centered content */}
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">TechStore</h1> {/* Store title */}
      </header>

      <PromoBanner /> {/* Promotional banner component */}

      <h2 className="text-2xl font-semibold my-4">Featured Products</h2>

      {/* Grid layout for product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Loop through the products and render each one */}
        {products.map((product) => (
          <div key={product.id} className="relative">
            <ProductCard product={product} /> {/* Displays product details */}
            <InventoryBadge status={product.status} /> {/* Shows inventory status like in stock, low stock, etc. */}
          </div>
        ))}
      </div>

      {/* Checkout button at the bottom */}
      <div className="text-center mt-6">
        <CheckoutButton />
      </div>
    </div>
  );
}