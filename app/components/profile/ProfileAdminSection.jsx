"use client";

import Link from "next/link";

export default function ProfileAdminSection() {
	return (
		<div className="space-y-4">
			<div className="text-center">
				<h2 className="text-xl font-bold">Admin Tools</h2>
				<p className="text-gray-600 mt-2">
					Open the full admin dashboard to manage users, orders, and
					products.
				</p>
			</div>
			<div className="flex justify-center">
				<Link
					href="/admin"
					className="inline-block bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
				>
					Go to Admin Dashboard
				</Link>
			</div>
		</div>
	);
}