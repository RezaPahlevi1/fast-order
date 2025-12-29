import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;
  return (
    <h1 className="text-xl font-bold tracking-widest uppercase">{username}</h1>
  );
}

export default Username;
