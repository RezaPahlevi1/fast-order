import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="flex justify-between bg-yellow-400 py-4 px-8 md:py-2 border-b-gray-900/90">
      <Link className="uppercase tracking-widest font-semibold" to="/">
        Fast Order. Co
      </Link>
      <SearchOrder />
    </header>
  );
}

export default Header;
