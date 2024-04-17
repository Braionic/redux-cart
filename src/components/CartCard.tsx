
import { mapData } from "../App";
import { useAppSelector } from "../redux/hooks";
import { MdDeleteOutline } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";

//Item interface for mapped items
interface itemInterface {
  item: {
    id: number;
    category: string;
    title: string;
    image: string;
    price: number;
  };

  //handleclicl type declaration for both add and remove function
  handleAdd?: (id: mapData) => void;
  handleRemove: (id: number) => void;
}

export default function CartCard({
  item,
  handleAdd,
  handleRemove,
}: itemInterface) {
  const cart = useAppSelector((state) => state.cart);
  return (
    <div key={item.id} className="p-3 border border-1 rounded shadow-lg bg-white">
      <div key={item.id} className="flex items-center justify-between p-5">
        <div className="flex gap-1">
          <div className="product-image h-20 ">
            <img
              src={item.image}
              alt={item.title}
              className="object-contain h-full mx-auto"
            />
          </div>
          <div className="product-details">
            <h4 className="product-title w-50 md:break-words">{item.title}</h4>
          </div>
        </div>

        <div>
          <p className="product-price text-xl font-medium">
            {item.price.toLocaleString("en-us", {
              currency: "USD",
              style: "currency",
            })}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <button
          onClick={() =>
            cart.some((product: mapData) => product.id === item.id)
              ? handleRemove(item.id)
              : handleAdd?.(item)
          }
          className=" text-orange-500 rounded-md text-xs"
        >
          {cart.some((iitem: mapData) => iitem.id === item.id)
            ? <p className="flex items-center text-lg"><MdDeleteOutline size={30} /> Remove</p>
            : "Add To Cart"}
        </button>
        
        <div className="flex">
        <div className=" p-2 rounded bg-orange-400 text-white cursor-pointer"><FaMinus size={18} /></div><span className="px-4">{0}</span>
        <div className="p-2 rounded bg-orange-400 text-white cursor-pointer"><FaPlus size={18} /></div>
        </div>
      </div>
    </div>
  );
}
