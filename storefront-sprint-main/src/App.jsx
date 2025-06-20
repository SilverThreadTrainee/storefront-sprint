import ProductCard from "./components/ProductCard";
import InventoryBadge from "./components/InventoryBadge";
import PromoBanner from "./components/PromoBanner";
import CheckoutButton from "./components/CheckoutButton";

import { useEffect, useState } from 'react';

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      image: './src/images/wireless-headphone.jpg', // Adjust path as necessary
      originalPrice: '129.99',
      price: '99.99',
      discount: 23,
      status: 'inStock'
    },
    {
      id: 2,
      name: 'Smart Watch',
      image: './src/images/Smart Watch.jpg', // Adjust path as necessary
      originalPrice: '199.99',
      price: '199.99',
      discount: 1,
      status: 'lowStock'
    },
    {
      id: 3,
      name: 'Running Shoes',
      image: './src/images/Running Shoes.jpg', // Adjust path as necessary
      originalPrice: '99.99',
      price: '79.99',
      discount: 20,
      status: 'outOfStock'
    },
    {
      id: 4,
      name: 'Coffee Maker',
      image: './src/images/Coffee Maker.jpg', // Adjust path as necessary
      originalPrice: '199.99',
      price: '149.99',
      discount: 4,
      status: 'inStock',
    },
  ]);

  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">TechStore</h1>
      </header>
      <PromoBanner />
      <h2 className="text-2xl font-semibold my-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="relative">
            <ProductCard product={product} />
            <InventoryBadge status={product.status} />
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <CheckoutButton />
      </div>
    </div>
  );
}



