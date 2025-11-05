"use client";

export default function OrdersSection({ orders = [], onDeleteOrder }) {
  return (
    <section className="border rounded-xl p-4">
      <h2 className="text-xl font-semibold mb-2">Orders</h2>
      <ul className="space-y-3">
        {orders.map((o) => (
          <li key={o._id} className="space-y-1 border rounded p-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">
                {new Date(o.createdAt).toLocaleString()}
              </span>
              <button
                onClick={() => onDeleteOrder?.(o._id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
            <div className="text-sm">Status: {o.status} • Total: ${o.total}</div>
            <div className="text-sm text-gray-600">Items: {o.items?.length || 0}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}