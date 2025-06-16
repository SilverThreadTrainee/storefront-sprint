// ProductCard.jsx
export default function ProductCard() {
  return (
    <div className="border p-4 rounded shadow-md max-w-sm">
      <img
        src="https://via.placeholder.com/150"
        alt="Product"
        className="mb-4 w-full"
      />
      <h3 className="text-lg font-semibold">Wireless Headphones</h3>
      <p className="text-gray-600 mb-2">$99.99</p>
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Add to Cart
      </button>
    </div>
  );
}
