"use client";

import { useEffect, useState } from "react";
import UsersSection from "../../../components/admin/UsersSection";
import OrdersSection from "../../../components/admin/OrdersSection";
import AddProductForm from "../../../components/admin/AddProductForm";
import RecentlyAddedList from "../../../components/admin/RecentlyAddedList";

export default function AdminPage() {
	const [users, setUsers] = useState([]);
	const [orders, setOrders] = useState([]);
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	// Product creation state moved into AddProductForm component

	const fetchAll = async () => {
		try {
			setLoading(true);
			const [uRes, oRes, pRes] = await Promise.all([
				fetch("/api/admin/users"),
				fetch("/api/admin/orders"),
				fetch("/api/admin/products"),
			]);
			if (!uRes.ok) throw new Error("Failed to fetch users");
			if (!oRes.ok) throw new Error("Failed to fetch orders");
			if (!pRes.ok) throw new Error("Failed to fetch products");
			const [uData, oData, pData] = await Promise.all([
				uRes.json(),
				oRes.json(),
				pRes.json(),
			]);
			setUsers(uData);
			setOrders(oData.orders || []);
			setProducts(pData.products || []);
		} catch (err) {
			console.error(err);
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const handleDeleteProduct = async (productId) => {
		try {
			if (!confirm("Delete this product? This cannot be undone.")) return;
			const res = await fetch(`/api/admin/products?id=${productId}`, {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
			});
			if (!res.ok) throw new Error("Failed to delete product");
			setProducts(products.filter((p) => p._id !== productId));
		} catch (err) {
			setError(err.message);
		}
	};

	useEffect(() => {
		fetchAll();
	}, []);

	const handleRoleChange = async (userId, role) => {
		try {
			const res = await fetch("/api/admin/users", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ userId, role }),
			});
			if (!res.ok) throw new Error("Failed to update role");
			const updatedUser = await res.json();
			setUsers(users.map((u) => (u._id === userId ? updatedUser : u)));
		} catch (err) {
			setError(err.message);
		}
	};

	const handleDeleteUser = async (userId) => {
		try {
			const res = await fetch("/api/admin/users", {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ userId }),
			});
			if (!res.ok) throw new Error("Failed to delete user");
			setUsers(users.filter((u) => u._id !== userId));
		} catch (err) {
			setError(err.message);
		}
	};

	const handleDeleteOrder = async (orderId) => {
		try {
			const res = await fetch("/api/admin/orders", {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ orderId }),
			});
			if (!res.ok) throw new Error("Failed to delete order");
			setOrders(orders.filter((o) => o._id !== orderId));
		} catch (err) {
			setError(err.message);
		}
	};

	// Product creation handled via AddProductForm component

	return (
		<div className="max-w-6xl mx-auto px-4 py-6 space-y-8">
			<h1 className="text-2xl font-bold">Admin Dashboard</h1>
			{error && (
				<div className="bg-red-100 text-red-700 p-3 rounded">
					{error}
				</div>
			)}
			{loading ? (
				<div>Loading…</div>
			) : (
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{/* Users */}
					<UsersSection
						users={users}
						onRoleChange={handleRoleChange}
						onDeleteUser={handleDeleteUser}
					/>

					{/* Orders */}
					<OrdersSection
						orders={orders}
						onDeleteOrder={handleDeleteOrder}
					/>

					{/* Add Product + Recently Added */}
					<div>
						<AddProductForm
							onProductAdded={(p) =>
								setProducts([p, ...products])
							}
						/>
						<RecentlyAddedList
							products={products}
							onDeleteProduct={handleDeleteProduct}
						/>
					</div>
				</div>
			)}
		</div>
	);
}
