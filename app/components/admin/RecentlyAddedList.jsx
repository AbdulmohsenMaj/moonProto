"use client";

export default function RecentlyAddedList({ products = [], onDeleteProduct }) {
  return (
    <div className="mt-4">
      <h3 className="font-medium">Recently Added</h3>
      <ul className="space-y-2 mt-2 max-h-[15rem] overflow-y-auto pr-2">
        {products.map((p) => (
          <li key={p._id} className="text-sm flex items-center gap-2 justify-between">
            {p.image && (
              <img src={p.image} alt={p.name} className="w-8 h-8 object-cover rounded" />
            )}
            <div className="flex items-center gap-2">
              <span>{p.name}</span>
              <span className="text-gray-500">${p.price}</span>
            </div>
            <button
              onClick={() => {
                if (confirm("Delete this product? This cannot be undone.")) {
                  onDeleteProduct?.(p._id);
                }
              }}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}