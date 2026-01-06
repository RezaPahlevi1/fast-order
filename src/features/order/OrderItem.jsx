import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="border-b border-neutral-800 py-4">
      <div className="flex items-start justify-between gap-4">
        <p className="font-medium text-neutral-100">
          <span className="mr-2 text-neutral-400">{quantity}×</span>
          {name}
        </p>

        <p className="font-semibold text-yellow-400">
          {formatCurrency(totalPrice)}
        </p>
      </div>

      <p className="mt-1 text-xs text-neutral-400 capitalize italic">
        {isLoadingIngredients ? "Loading ingredients…" : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
