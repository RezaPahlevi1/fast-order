import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-flex items-center justify-center rounded-xl uppercase font-semibold tracking-wide transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const styles = {
    primary:
      base +
      " bg-yellow-400 text-neutral-900 px-4 py-2.5 text-sm hover:bg-yellow-300 active:scale-95",

    small:
      base +
      " bg-yellow-400 text-neutral-900 px-3 py-1.5 text-xs hover:bg-yellow-300 active:scale-95",

    round:
      base +
      " bg-neutral-800 text-yellow-400 px-2.5 py-1 text-xs border border-yellow-400/30 hover:bg-neutral-700 active:scale-95",

    secondary:
      base +
      " bg-neutral-800 text-neutral-200 px-4 py-2.5 text-sm border border-neutral-700 hover:bg-neutral-700",

    delete:
      base +
      " bg-red-500/90 text-white px-3 py-1.5 text-xs hover:bg-red-600 active:scale-95 focus:ring-2 focus:ring-red-400/40",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
