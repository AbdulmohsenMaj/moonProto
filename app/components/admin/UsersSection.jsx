"use client";

export default function UsersSection({
	users = [],
	onRoleChange,
	onDeleteUser,
}) {
	return (
		<section className="border rounded-xl p-4">
			<h2 className="text-xl font-semibold mb-2">Users</h2>
			<ul className="space-y-3">
				{users.map((u) => (
					<li
						key={u._id}
						className="flex items-center justify-between"
					>
						<div>
							<div className="font-medium">{u.name}</div>
							<div className="text-sm text-gray-500">
								{u.email}
							</div>
						</div>
						<div className="flex items-center gap-2">
							<select
								value={u.role}
								onChange={(e) =>
									onRoleChange?.(u._id, e.target.value)
								}
								className="border rounded px-2 py-1"
							>
								<option value="client">Client</option>
								<option value="admin">Admin</option>
							</select>
							<button
								onClick={() => onDeleteUser?.(u._id)}
								className="text-red-600 hover:underline"
							>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
