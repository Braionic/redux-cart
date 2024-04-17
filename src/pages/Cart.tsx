import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { mapData } from "../App";
import { removeFromCart } from "../redux/counterSlice";
import CartCard from "../components/CartCard";
import { Link } from "react-router-dom";
import cartImg from "../assets/cart.668e6453.svg"

export default function Cart() {
  const cart: mapData[] = useAppSelector((state) => state.cart);
  const Dispatch = useAppDispatch();

  //Handle remove item from cart
  function handleRemove(id: number) {
    Dispatch(removeFromCart(id));
  }
  console.log(cart);
  //mapping out products and rendering in my cartCard Component
  const Products = cart.map((item: mapData) => {
    return <CartCard handleRemove={handleRemove} item={item} />;
  });

  return (
    <div className="p-4 bg-[#f1f1f2] min-h-[100vh]">
      {cart && cart.length ? (
        <div className="grid grid-cols-11 mx-10 gap-3">
          <div className="lg:col-span-8 col-span-full">
            <div className="p-2 border border-1 rounded bg-white">
              <h1 className="font-bold">
                Cart ({cart.length > 0 ? cart.length : 0})
              </h1>
            </div>
            {Products}
          </div>
          <div className="p-2 bg-gray-50 lg:col-span-3 rounded shadow-lg h-40 col-span-8">
            <h1 className="mr-5 p-2 font-medium">Cart Summary</h1>
            <div className="flex flex-col items-start justify-center gap-2 p-2">
              <div className="flex items-center justify-between w-full">
                <h4 className="font-medium">Subtotal</h4>
                <h3 className="text-lg">
                  {" "}
                  {cart
                    .reduce((total, num) => total + num.price, 0)
                    .toLocaleString("en-us", {
                      currency: "USD",
                      style: "currency",
                    })}
                </h3>
              </div>
              <p className="text-xs">Delivery fees not included yet</p>
              <button className="bg-orange-500 py-2 px-5 w-full text-white rounded">
                Checkout (
                {cart
                  .reduce((total, num) => total + num.price, 0)
                  .toLocaleString("en-us", {
                    currency: "USD",
                    style: "currency",
                  })}
                )
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="bg-white w-full p-5 h-[300px] mx-5 flex items-center justify-center flex-col gap-4 rounded">
            <img src={cartImg} alt="cart" />
            <h6 className="font-medium">Your cart is empty</h6>
            <p>Browse our categories and discover our best deals!</p>
            <Link to="/">
              <button className="py-3 px-6 bg-orange-500 rounded text-white font-medium uppercase">
                start shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
