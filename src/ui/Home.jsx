import CreateUser from "../features/user/CreateUser";

function Home() {
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

      <CreateUser />
    </div>
  );
}

export default Home;
