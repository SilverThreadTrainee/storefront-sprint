export default function InventoryBadge({ inStock }) {
  return (
    <span
      className={`text-sm px-3 py-1 rounded-full font-medium ${
        inStock
          ? "bg-green-200 text-green-800"
          : "bg-red-200 text-red-800"
      }`}
    >
      {inStock ? "In Stock" : "Out of Stock"}
    </span>
  );
}