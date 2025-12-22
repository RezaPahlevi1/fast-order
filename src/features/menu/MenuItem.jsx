import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-5 py-2 px-2 cursor-pointer hover:bg-yellow-100/20 transition-all duration-200">
      <img className="h-24" src={imageUrl} alt={name} />
      <div className="flex flex-col">
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div className="mt-auto text-sm">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="uppercase font-semibold text-xs text-slate-500">
              Sold out
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
