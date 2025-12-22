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
        className="border border-stone-400 bg-yellow-100 p-2 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 transition-all duration-300 sm:focus:w-72 text-sm w-28 sm:w-64 rounded-2xl"
      />
    </form>
  );
}

export default SearchOrder;
