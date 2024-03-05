import ProductCard from './components/ProductCard';
import { Product } from './types';
import DATA from './data.json';

function App() {
  return (
    <div className="p-2 h-screen">
      <h1 className="font-semibold text-2xl text-center">Price Comparator</h1>

      {/* <div>TODO search</div> */}

      <div className="mx-5 my-2 space-y-2">
        {DATA.map((product: Product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
