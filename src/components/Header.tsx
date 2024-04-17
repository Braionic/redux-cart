import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useAppSelector } from "../redux/hooks";

export default function Header() {
  const cart = useAppSelector((state)=> state.cart)

  const totalCart = cart.length
  console.log(totalCart)
  return (
    <div className="flex items-center justify-between p-4 shadow-lg fixed top-0 w-full bg-white">
      <h1>BraionicMart</h1>
      <div>
        <ul className="flex items-center gap-3">
          <NavLink style={({isActive})=> isActive? {fontWeight: "bold"}: {fontWeight: "normal"}} to="/">
          <li>Home</li>
          </NavLink>
          <NavLink className="relative" style={({isActive})=> isActive? {fontWeight: "bold"}: {fontWeight: "normal"}} to="cart">
          <li className="flex items-center justify-between"><MdOutlineShoppingCart size={20} />Cart</li>
          <span className="bg-orange-500 rounded-full px-1 py-0 text-xs text-white" style={{position: "absolute", top: "-8px", left: "10px"}}>{totalCart}</span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
