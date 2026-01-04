// Test ID: IIDSAT

import OrderItem from "./OrderItem";

import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearCart } from "../cart/cartSlice";
import UpdateOrder from "./UpdateOrder";

function Order() {
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  const dispatch = useDispatch();
  const fetcher = useFetcher();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
  }, [fetcher]);

  console.log(fetcher.data);

  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 className="text-xl font-semibold">Order Number #{id} Status</h2>

        <div className="space-x-3">
          {priority && (
            <span className="bg-red-500 text-red-100 text-sm rounded-full tracking-widest uppercase font-bold py-1 px-2">
              Priority{" "}
            </span>
          )}
          <span className="bg-green-500 text-green-100 text-sm rounded-full tracking-widest uppercase font-bold py-1 px-2">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-2 bg-stone-300 px-6 py-5">
        {deliveryIn >= 0 ? (
          <p>Only {calcMinutesLeft(estimatedDelivery)} minutes left 😃</p>
        ) : (
          <p className="text-green-600 font-semibold">
            Order should have arrived
          </p>
        )}
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul>
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.id}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.pizzaId)
                ?.ingredients ?? []
            }
            isLoadingIngredients={fetcher.state === "loading"}
          />
        ))}
      </ul>

      <div className="bg-stone-300 px-6 py-5 space-y-2">
        <p className="text-xs text-stone-500 font-semibold">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-xs text-stone-500 font-semibold">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
