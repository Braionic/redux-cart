export interface IobjectName {
  text: string;
  value: boolean;
}

export interface mapData {
  id: number;
  category: string;
  title: string;
  image: string;
  price: number;
}

import { useAppDispatch, useAppSelector } from "./redux/hooks";
import useFetch from "./hooks/useFetch";
import { addToCart, removeFromCart } from "./redux/counterSlice";
import ProductCard from "./components/ProductCard";
import spinner from "./assets/Gear@1.5x-0.2s-200px-200px.svg";
function App() {
  const cart = useAppSelector((state) => state.cart);
  const Dispatch = useAppDispatch();
  const { data, isLoading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  console.log(cart);

  function handleAdd(item: mapData) {
    Dispatch(addToCart(item));
  }
  function handleRemove(id: number) {
    Dispatch(removeFromCart(id));
  }

  const Products = data.map((item: mapData) => {
    return (
      <ProductCard
        handleAdd={handleAdd}
        handleRemove={handleRemove}
        item={item}
      />
    );
  });
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-60">
        <img src={spinner} alt="spinner" className="w-full" />
        </div>
        
      </div>
    );
  }
  return (
    <div className="main-wrapper bg-red-500">
      <div className="product-container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {Products}
      </div>
    </div>
  );
}

export default App;
