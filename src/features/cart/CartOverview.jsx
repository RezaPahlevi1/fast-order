import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex justify-between bg-stone-800 text-white py-4 px-8 md:py-2 space-y-2">
      <p className="space-x-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link className="uppercase" to="/cart">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
