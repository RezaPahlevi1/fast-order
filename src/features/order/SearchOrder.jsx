import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="
      w-28 sm:w-64 sm:focus:w-72
      rounded-2xl px-3 py-2 text-sm
      bg-neutral-900 text-neutral-200
      border border-neutral-700
      placeholder:text-neutral-500
      focus:outline-none
      focus:border-yellow-400
      focus:ring-2 focus:ring-yellow-400/40
      transition-all duration-300
    "
      />
    </form>
  );
}

export default SearchOrder;
