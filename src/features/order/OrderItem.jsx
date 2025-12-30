import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="border-y divide-y divide-stone-200 py-3">
      <div className="flex items-start justify-between gap-4">
        <p className="font-medium">
          <span className="mr-1 text-stone-600">{quantity}×</span>
          {name}
        </p>
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      </div>

      <p className="mt-1 text-sm text-stone-500 capitalize italic">
        {isLoadingIngredients ? "Loading..." : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
