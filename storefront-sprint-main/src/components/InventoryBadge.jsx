// InventoryBadge.jsx
export default function InventoryBadge({ status }) {
  const statusClasses = {
    inStock: 'bg-green-500 text-white',
    lowStock: 'bg-yellow-500 text-white',
    outOfStock: 'bg-red-500 text-white',
  };

  return (
    <div className={`absolute top-0 left-0 m-2 p-1 rounded ${statusClasses[status]}`}>
      {status === 'inStock' ? 'In Stock' : status === 'lowStock' ? 'Low Stock' : 'Out of Stock'}
    </div>
  );
}
