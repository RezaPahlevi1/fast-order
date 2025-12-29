import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { getCurrentIdQuantity } from "./cartSlice";
import DeleteItem from "./DeleteItem";
import UpdateItem from "./UpdateItem";
import { current } from "@reduxjs/toolkit";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentIdQuantity(pizzaId));

  return (
    <li className="py-3 sm:flex sm:justify-between sm:items-center">
      <p className="mb-3 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:space-x-4">
        <p className="text-xs font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItem pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
