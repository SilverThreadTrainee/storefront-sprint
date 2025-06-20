// ProductCard.jsx
export default function ProductCard({ product }) {
  return (
    <div className="border border-gray-300 p-4 rounded-lg text-black shadow-md max-w-sm hover:shadow-lg transition-shadow duration-200">
      <img
        src={product.image}
        alt={product.name}
        className="mb-4 w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      {product.discount ? (
        <p className="text-red-500">{product.discount}% Off</p>
      ) : null}
      <p className="text-gray-600 mb-2">
        <span className="line-through">${product.originalPrice}</span> ${product.price}
      </p>
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Add to Cart
      </button>
    </div>
  );
}
