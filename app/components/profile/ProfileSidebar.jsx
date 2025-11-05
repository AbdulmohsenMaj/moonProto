"use client";

import { useRef } from "react";

export default function ProfileSidebar({ user, preview, onSelectFile, activeTab, onSelectTab, onLogout }) {
  const fileInputRef = useRef(null);
  const items = [
    { key: "info", label: "Information" },
    { key: "orders", label: "Orders" },
    { key: "favorites", label: "Favorites" },
    ...(user?.role === "admin" ? [{ key: "admin", label: "Admin" }] : []),
  ];

  return (
    <aside className="hidden md:flex flex-col bg-[#2f2d35] text-white">
      <div className="p-6">
        <div
          role="button"
          title="Click to change avatar"
          onClick={() => fileInputRef.current?.click()}
          className="h-20 w-20 rounded-full overflow-hidden bg-white/10 border border-white/30 flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-white"
        >
          {preview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={preview} alt="avatar" className="h-full w-full object-cover" />
          ) : (
            <span className="text-white/70 text-sm">Upload</span>
          )}
        </div>
        <p className="mt-4 text-white/80">Welcome{user?.name ? `, ${user.name.split(' ')[0]}` : ''}</p>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={onSelectFile}
          className="hidden"
        />
      </div>
      <div className="mx-6 border-t border-white/20" />
      <nav className="flex-1 p-6 space-y-2 text-sm">
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => onSelectTab(item.key)}
            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
              activeTab === item.key ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
        <div className="pt-4">
          <button onClick={onLogout} className="w-full text-left px-3 py-2 rounded-md text-white/80 hover:bg-white/10 hover:text-white">Log out</button>
        </div>
      </nav>
    </aside>
  );
}