"use client";

import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useUser } from "@/app/context/UserContext";

const ProviderButton = ({ provider, children }) => {
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

export default function LoginContent() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const searchParams = useSearchParams();
	const { refetch } = useUser();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: "" }));
		}
	};

	const validateForm = () => {
		const newErrors = {};

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}

		if (!formData.password) {
			newErrors.password = "Password is required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) return;

		setIsLoading(true);
		try {
			const response = await fetch("/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: formData.email,
					password: formData.password,
				}),
			});

			const data = await response.json();

			if (response.ok) {
				// Wait longer for cookie to be properly set, then refetch user data
				const from = searchParams.get("from") || "/profile";
				setTimeout(async () => {
					await refetch();
					router.push(from);
				}, 500);
			} else {
				setErrors({ submit: data.error || "Login failed" });
			}
		} catch (error) {
			setErrors({ submit: "Network error. Please try again." });
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-white flex items-center justify-center px-4">
			<div className="w-full max-w-md space-y-6">
				<div className="text-center">
					<h1 className="text-2xl font-bold">Sign in</h1>
					<p className="text-gray-600 mt-2">
						Sign in with email or social provider
					</p>
				</div>

				{/* Email/Password Form */}
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Email Address
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${
								errors.email
									? "border-red-500"
									: "border-gray-300"
							}`}
							placeholder="Enter your email"
						/>
						{errors.email && (
							<p className="text-red-500 text-sm mt-1">
								{errors.email}
							</p>
						)}
					</div>

					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${
								errors.password
									? "border-red-500"
									: "border-gray-300"
							}`}
							placeholder="Enter your password"
						/>
						{errors.password && (
							<p className="text-red-500 text-sm mt-1">
								{errors.password}
							</p>
						)}
					</div>

					{errors.submit && (
						<div className="bg-red-50 border border-red-200 rounded-md p-3">
							<p className="text-red-600 text-sm">
								{errors.submit}
							</p>
						</div>
					)}

					<button
						type="submit"
						disabled={isLoading}
						className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{isLoading ? "Signing in..." : "Sign in"}
					</button>
				</form>

				{/* Divider */}
				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t border-gray-300" />
					</div>
					<div className="relative flex justify-center text-sm">
						<span className="px-2 bg-white text-gray-500">
							Or continue with
						</span>
					</div>
				</div>

				{/* OAuth Providers */}
				<div className="space-y-3">
					<ProviderButton provider="google">
						Continue with Google
					</ProviderButton>
					<ProviderButton provider="github">
						Continue with GitHub
					</ProviderButton>
				</div>

				<div className="text-center">
					<p className="text-sm text-gray-600">
						Don't have an account?{" "}
						<Link
							href="/signup"
							className="text-black font-medium hover:underline"
						>
							Sign up
						</Link>
					</p>
				</div>

				<p className="text-xs text-gray-500 text-center">
					By signing in, you agree to our Terms and Privacy Policy.
				</p>
			</div>
		</div>
	);
}