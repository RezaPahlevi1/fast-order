import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="flex flex-col items-center justify-center px-8 py-16 text-center space-y-10">
      <h1 className="max-w-xl text-2xl md:text-3xl font-semibold leading-relaxed tracking-wide text-neutral-100">
        The best{" "}
        <span className="text-yellow-400 uppercase font-bold tracking-widest">
          pizza
        </span>
        .
        <br />
        <span className="block mt-2 text-neutral-400 text-base md:text-lg font-normal">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-neutral-400">
            Welcome back, <span className="text-yellow-400">{username}</span>
          </p>

          <Button type="primary" to="/menu">
            Continue ordering
          </Button>
        </div>
      )}
    </div>
  );
}

export default Home;
