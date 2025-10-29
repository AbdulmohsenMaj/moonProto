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

export default function SignupContent() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
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

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}

		if (!formData.password) {
			newErrors.password = "Password is required";
		} else if (formData.password.length < 6) {
			newErrors.password = "Password must be at least 6 characters long";
		}

		if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = "Passwords do not match";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) return;

		setIsLoading(true);
		console.log("Starting registration with data:", {
			name: formData.name,
			email: formData.email,
			password: "***hidden***",
		});

		try {
			console.log("Making fetch request to /api/auth/register...");
			const response = await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					password: formData.password,
				}),
			});

			console.log("Response received:", {
				status: response.status,
				statusText: response.statusText,
				headers: Object.fromEntries(response.headers.entries()),
			});

			const data = await response.json();
			console.log("Response data:", data);

			if (response.ok) {
				console.log("Registration successful:", data);

				// Wait longer for cookie to be properly set, then refetch user data
				const from = searchParams.get("from") || "/profile";
				setTimeout(async () => {
					await refetch();
					router.push(from);
				}, 500);
			} else {
				console.error("Registration failed:", data);
				setErrors({ submit: data.error || "Registration failed" });
			}
		} catch (error) {
			console.error("Network error during registration:", error);
			console.error("Error details:", {
				name: error.name,
				message: error.message,
				stack: error.stack,
			});
			setErrors({
				submit: `Network error: ${error.message}. Please try again.`,
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-white flex items-center justify-center px-4">
			<div className="w-full max-w-md space-y-6">
				<div className="text-center">
					<h1 className="text-2xl font-bold">Create Account</h1>
					<p className="text-gray-600 mt-2">
						Sign up with email or social provider
					</p>
				</div>

				{/* Email/Password Form */}
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Full Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${
								errors.name
									? "border-red-500"
									: "border-gray-300"
							}`}
							placeholder="Enter your full name"
						/>
						{errors.name && (
							<p className="text-red-500 text-sm mt-1">
								{errors.name}
							</p>
						)}
					</div>

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
							placeholder="Create a password (min. 6 characters)"
						/>
						{errors.password && (
							<p className="text-red-500 text-sm mt-1">
								{errors.password}
							</p>
						)}
					</div>

					<div>
						<label
							htmlFor="confirmPassword"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Confirm Password
						</label>
						<input
							type="password"
							id="confirmPassword"
							name="confirmPassword"
							value={formData.confirmPassword}
							onChange={handleChange}
							className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${
								errors.confirmPassword
									? "border-red-500"
									: "border-gray-300"
							}`}
							placeholder="Confirm your password"
						/>
						{errors.confirmPassword && (
							<p className="text-red-500 text-sm mt-1">
								{errors.confirmPassword}
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
						{isLoading ? "Creating Account..." : "Create Account"}
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
						Sign up with Google
					</ProviderButton>
					<ProviderButton provider="github">
						Sign up with GitHub
					</ProviderButton>
				</div>

				<div className="text-center">
					<p className="text-sm text-gray-600">
						Already have an account?{" "}
						<Link
							href="/login"
							className="text-black font-medium hover:underline"
						>
							Sign in
						</Link>
					</p>
				</div>

				<p className="text-xs text-gray-500 text-center">
					By signing up, you agree to our Terms and Privacy Policy.
				</p>
			</div>
		</div>
	);
}
