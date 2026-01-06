import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentIdQuantity } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import { current } from "@reduxjs/toolkit";
import UpdateItem from "../cart/UpdateItem";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentIdQuantity(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="group flex gap-5 px-4 py-3 transition-all duration-200 hover:bg-neutral-800/60">
      <img
        className={`h-24 w-24 rounded-lg object-cover ring-1 ring-neutral-800 transition-all duration-200 ${
          soldOut ? "grayscale opacity-60" : "group-hover:ring-yellow-400/40"
        }`}
        src={imageUrl}
        alt={name}
      />

      <div className="flex grow flex-col">
        <p className="font-semibold text-neutral-100 tracking-wide">{name}</p>

        <p className="mt-1 text-xs text-neutral-400 capitalize italic">
          {ingredients.join(", ")}
        </p>

        <div className="mt-auto flex items-center justify-between pt-3 text-sm">
          {!soldOut ? (
            <p className="font-medium text-yellow-400">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="uppercase font-semibold text-xs text-neutral-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex gap-2">
              <UpdateItem pizzaId={id} currentQuantity={currentQuantity} />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button onClick={handleAddToCart} type="small">
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
