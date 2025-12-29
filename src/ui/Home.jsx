import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="py-10 px-8 md:py-12 space-y-10 text-center">
      <h1 className="text-xl md:text-2xl font-semibold">
        The best{" "}
        <span className="text-yellow-500 tracking-widest uppercase font-bold">
          pizza.
        </span>
        <br />
        <span>Straight out of the oven, straight to you.</span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Back to ordering, {username}!
        </Button>
      )}
    </div>
  );
}

export default Home;
