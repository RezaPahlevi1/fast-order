import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-950 border-b border-yellow-400/20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-sm font-semibold uppercase tracking-widest text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          Fast Order. Co
        </Link>

        <div className="flex flex-1 justify-center px-6">
          <SearchOrder />
        </div>

        <div className="flex items-center gap-4 text-neutral-200">
          <Username />
        </div>
      </nav>
    </header>
  );
}

export default Header;
