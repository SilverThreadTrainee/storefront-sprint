import ProductCard from "./components/ProductCard";
import InventoryBadge from "./components/InventoryBadge";
=======
function App() {
  return (
    <div className="p-6">
      <ProductCard />
      <InventoryBadge inStock={true} />
      <InventoryBadge inStock={false} />
    </div>
  );
}

export default App;


