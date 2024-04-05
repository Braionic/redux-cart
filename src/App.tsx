import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import useFetch from "./hooks/useFetch";
function App() {
  const counter = useAppSelector((state) => state.counter.value);
  const Dispatch = useAppDispatch();
  const { data } = useFetch("https://fakestoreapi.com/products");

  console.log(data);

  const handleIncrement = () => {};

  const handleDecrement = () => {};
  return (
    <>
      <h1 className="text-red-500">hello</h1>
      <button onClick={handleDecrement}>-</button>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>+</button>
    </>
  );
}

export default App;
