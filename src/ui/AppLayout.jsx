import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="font-montserrat grid grid-rows-[auto_1fr_auto] h-screen bg-neutral-950 text-neutral-200">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-y-auto">
        <main className="mx-auto max-w-3xl px-4 py-6">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
