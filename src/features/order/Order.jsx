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

  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-semibold tracking-wide">Order #{id}</h2>

        <div className="flex gap-2">
          {priority && (
            <span className="rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-red-400">
              Priority
            </span>
          )}
          <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-yellow-400">
            {status}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-5">
        {deliveryIn >= 0 ? (
          <p className="text-neutral-200">
            Only{" "}
            <span className="font-semibold text-yellow-400">
              {deliveryIn} minutes
            </span>{" "}
            left
          </p>
        ) : (
          <p className="font-semibold text-green-400">
            Order should have arrived
          </p>
        )}

        <p className="text-xs text-neutral-400">
          Estimated delivery: {formatDate(estimatedDelivery)}
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

      <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-5 space-y-2">
        <p className="text-xs text-neutral-400">
          Pizza price: {formatCurrency(orderPrice)}
        </p>

        {priority && (
          <p className="text-xs text-neutral-400">
            Priority price: {formatCurrency(priorityPrice)}
          </p>
        )}

        <div className="flex justify-between pt-2 border-t border-neutral-800">
          <p className="font-semibold text-neutral-200">Total payment</p>
          <p className="font-bold text-yellow-400">
            {formatCurrency(orderPrice + priorityPrice)}
          </p>
        </div>
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
