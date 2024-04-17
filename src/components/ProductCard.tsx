
import { mapData } from "../App";
import { useAppSelector } from "../redux/hooks";

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

export default function ProductCard({
  item,
  handleAdd,
  handleRemove,
}: itemInterface) {
  const cart = useAppSelector((state) => state.cart);
  return (
    <div key={item.id} className="p-3 border border-1 rounded my-4 bg-gray-100">
      <div className="product-image h-40 ">
        <img
          src={item.image}
          alt={item.title}
          className="object-contain h-full mx-auto"
        />
      </div>
      <div className="product-details">
        <h4 className="product-title w-30 truncate">{item.title}</h4>
        <div className="flex items-center justify-around mt-2">
          <p className="product-price font-bold">
            {item.price.toLocaleString("en-us", {
              currency: "USD",
              style: "currency",
            })}
          </p>
          <button
            onClick={() =>
              cart.some((product: mapData) => product.id === item.id)
                ? handleRemove(item.id)
                : handleAdd?.(item)
            }
            className="py-1 px-2 bg-black text-white rounded-md text-xs"
          >
            {cart.some((iitem: mapData) => iitem.id === item.id)
              ? "Remove From Cart"
              : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
