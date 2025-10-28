"use client";

import { useSearchParams } from "next/navigation";

const ProviderButtonClient = ({ provider, children }) => {
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/profile";
  const href = `/api/oauth/${provider}?from=${encodeURIComponent(from)}`;
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-black text-white hover:bg-gray-800 transition-colors w-full"
    >
      {children}
    </a>
  );
};

export default ProviderButtonClient;