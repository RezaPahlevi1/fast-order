import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "bg-yellow-400 inline-block px-3 py-2 text-sm rounded-full uppercase transition-colors duration-300 font-semibold tracking-wide hover:bg-yellow-500 cursor-pointer";

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
