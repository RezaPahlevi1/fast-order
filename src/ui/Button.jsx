import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "bg-yellow-400 inline-block  rounded-full uppercase transition-colors duration-300 font-semibold tracking-wide hover:bg-yellow-500 cursor-pointer";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md-py-4",
    small: base + " px-4 py-2 md:px-5 md-py-2.5 text-xs",
    secondary:
      "bg-stone-300 text-stone-600 inline-block px-4 py-3 rounded-full uppercase transition-colors duration-300 font-semibold tracking-wide hover:bg-stone-400 cursor-pointer",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
