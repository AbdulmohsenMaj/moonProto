"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useUser } from "@/app/context/UserContext";
import Link from "next/link";
import ProfileSidebar from "@/app/components/profile/ProfileSidebar";
import ProfileTabsMobile from "@/app/components/profile/ProfileTabsMobile";
import ProfileInfoSection from "@/app/components/profile/ProfileInfoSection";
import ProfileOrdersSection from "@/app/components/profile/ProfileOrdersSection";
import ProfileFavoritesSection from "@/app/components/profile/ProfileFavoritesSection";
import ProfileAdminSection from "@/app/components/profile/ProfileAdminSection";

export default function ProfilePage() {
	const { user, loading, updateUser, refetch, logout } = useUser();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [preview, setPreview] = useState("");
	const [imageFile, setImageFile] = useState(null);
	const [status, setStatus] = useState({ type: "", message: "" });
	const [activeTab, setActiveTab] = useState("info"); // info | orders | favorites
	const [favorites, setFavorites] = useState([]);
	const [orders, setOrders] = useState([]);
	const [loadingData, setLoadingData] = useState(false);
	const fileInputRef = useRef(null);

	useEffect(() => {
		if (user) {
			setName(user.name || "");
			setEmail(user.email || "");
			setPreview(user.image || "");
		}
	}, [user]);

    // Initialize active tab from URL query param via Suspense-wrapped child
    // (Required by Next.js when using useSearchParams in app router)

	// Fetch favorites and orders when user becomes available
	useEffect(() => {
		const load = async () => {
			if (!user) return;
			try {
				setLoadingData(true);
				const [favRes, ordRes] = await Promise.all([
					fetch("/api/favorites"),
					fetch("/api/orders"),
				]);
				if (favRes.ok) {
					const favJson = await favRes.json();
					setFavorites(
						Array.isArray(favJson.favorites)
							? favJson.favorites
							: []
					);
				}
				if (ordRes.ok) {
					const ordJson = await ordRes.json();
					setOrders(
						Array.isArray(ordJson.orders) ? ordJson.orders : []
					);
				}
			} catch (e) {
				console.warn("Failed to load favorites/orders", e);
			} finally {
				setLoadingData(false);
			}
		};
		load();
	}, [user]);

	const addFavorite = async (productId) => {
		try {
			const res = await fetch("/api/favorites", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ productId, action: "add" }),
			});
			if (res.ok) {
				const json = await res.json();
				setFavorites(json.favorites || []);
			}
		} catch (e) {
			console.error("addFavorite error", e);
		}
	};

	const removeFavorite = async (productId) => {
		try {
			const res = await fetch("/api/favorites", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ productId, action: "remove" }),
			});
			if (res.ok) {
				const json = await res.json();
				setFavorites(json.favorites || []);
			}
		} catch (e) {
			console.error("removeFavorite error", e);
		}
	};

	const onSelectFile = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		setImageFile(file);
		const url = URL.createObjectURL(file);
		setPreview(url);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus({ type: "", message: "" });
		try {
			const formData = new FormData();
			if (name) formData.append("name", name);
			if (imageFile) formData.append("image", imageFile);

			const res = await fetch("/api/profile", {
				method: "PUT",
				body: formData,
			});
			const data = await res.json();
			if (!res.ok) {
				throw new Error(data.error || "Failed to update profile");
			}
			updateUser(data);
			setStatus({
				type: "success",
				message: "Profile updated successfully.",
			});
			// Ensure latest data is shown after server writes
			setTimeout(() => {
				refetch();
			}, 300);
		} catch (err) {
			setStatus({ type: "error", message: err.message });
		}
	};

  return (
    <Suspense>
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[280px_1fr]">
        {/* Suspense-wrapped initializer that reads search params */}
        <Suspense>
            <ActiveTabInitializer setActiveTab={setActiveTab} />
        </Suspense>
			{/* Left sidebar */}
			<ProfileSidebar
				user={user}
				preview={preview}
				onSelectFile={onSelectFile}
				activeTab={activeTab}
				onSelectTab={setActiveTab}
				onLogout={logout}
			/>

			{/* Right content panel */}
			<div className="bg-white flex items-start justify-center px-4 py-8">
				<div className="w-full max-w-5xl">
					{/* Mobile top navbar for profile tabs */}
					<ProfileTabsMobile
						user={user}
						activeTab={activeTab}
						onSelectTab={setActiveTab}
					/>
					{loading ? (
						<div className="text-center text-gray-600">
							Loading your profile…
						</div>
					) : !user ? (
						<div className="space-y-4 text-center">
							<h1 className="text-2xl font-bold">
								You’re not signed in
							</h1>
							<p className="text-gray-600">
								Sign in to view and edit your profile.
							</p>
							<Link
								href="/login"
								className="inline-block bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
							>
								Sign in
							</Link>
						</div>
					) : (
                        <div className="space-y-8">
                            {activeTab === "info" && (
                                <>
                                    <div className="text-center">
                                        <h2 className="text-xl md:text-2xl font-semibold text-gray-500">
                                            Your personal profile info
                                        </h2>
                                    </div>
                                    {/* Profile info section */}
                                    <ProfileInfoSection
                                        name={name}
                                        email={email}
                                        preview={preview}
                                        onSelectFile={onSelectFile}
                                        onSubmit={handleSubmit}
                                        status={status}
                                        setName={setName}
                                    />
                                </>
                            )}

							{/* Center navigation removed; tabs controlled via left sidebar */}

                            {/* Info tab handled above when activeTab === 'info' */}

							{activeTab === "orders" && (
								<ProfileOrdersSection
									orders={orders}
									loading={loadingData}
								/>
							)}

							{activeTab === "favorites" && (
								<ProfileFavoritesSection
									favorites={favorites}
									loading={loadingData}
									onRemoveFavorite={removeFavorite}
								/>
							)}

							{activeTab === "admin" &&
								user?.role === "admin" && (
									<ProfileAdminSection />
								)}
						</div>
					)}
				</div>
			</div>
    </div>
    </Suspense>
  );
}

function ActiveTabInitializer({ setActiveTab }) {
    const searchParams = useSearchParams();
    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab && ["info", "orders", "favorites", "admin"].includes(tab)) {
            setActiveTab(tab);
        }
    }, [searchParams, setActiveTab]);
    return null;
}