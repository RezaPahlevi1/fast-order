import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-yellow-400 border-b border-gray-900/20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link
          to="/"
          className="text-sm font-semibold uppercase tracking-widest"
        >
          Fast Order. Co
        </Link>

        <div className="flex flex-1 justify-center px-6">
          <SearchOrder />
        </div>

        <div className="flex items-center gap-4">
          <Username />
        </div>
      </nav>
    </header>
  );
}

export default Header;
