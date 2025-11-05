"use client";

export default function ProfileTabsMobile({ user, activeTab, onSelectTab }) {
  const items = [
    { key: "info", label: "Information" },
    { key: "orders", label: "Orders" },
    { key: "favorites", label: "Favorites" },
    ...(user?.role === "admin" ? [{ key: "admin", label: "Admin" }] : []),
  ];

  return (
    <div className="md:hidden sticky top-0 z-20 -mt-8 mb-6 bg-white border-b">
      <nav className="flex gap-2 px-2 py-2 overflow-x-auto">
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => onSelectTab(item.key)}
            className={`shrink-0 px-3 py-2 rounded-md text-sm border transition-colors ${
              activeTab === item.key
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:border-black"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}