'use client';

import { useState, useEffect } from 'react';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/admin/users');
        if (!res.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await res.json();
        setUsers(data);
        if (data.length > 0) {
          setSelectedUser(data[0]);
        }
      } catch (err) {
        console.error("Error fetching users:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleRoleChange = async (userId, role) => {
    try {
      const res = await fetch('/api/admin/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, role }),
      });

      if (!res.ok) {
        throw new Error('Failed to update role');
      }

      const updatedUser = await res.json();
      setUsers(users.map(user => (user._id === userId ? updatedUser : user)));
      setSelectedUser(updatedUser);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const res = await fetch('/api/admin/users', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (!res.ok) {
        throw new Error('Failed to delete user');
      }

      setUsers(users.filter(user => user._id !== userId));
      setSelectedUser(null);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex justify-center items-center min-h-screen p-8">
      <div className="container mx-auto p-4 border border-gray-200 rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Admin Dashboard</h1>
        <div className="mb-4">
          <label htmlFor="user-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Select User:</label>
          <select
            id="user-select"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            onChange={(e) => setSelectedUser(users.find(user => user._id === e.target.value))}
            value={selectedUser?._id || ''}
          >
            <option value="" disabled>Select a user</option>
            {users.map(user => (
              <option key={user._id} value={user._id}>
                {user.name} ({user.email})
              </option>
            ))}
          </select>
        </div>

        {selectedUser && (
          <div className="bg-white dark:bg-gray-700 shadow overflow-hidden sm:rounded-lg p-4 border border-gray-200 dark:border-gray-600">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">User Details</h2>
            <p className="text-gray-700 dark:text-gray-300"><strong>Name:</strong> {selectedUser.name}</p>
            <p className="text-gray-700 dark:text-gray-300"><strong>Email:</strong> {selectedUser.email}</p>
            <div className="flex items-center mt-2">
              <p className="mr-2 text-gray-700 dark:text-gray-300"><strong>Role:</strong></p>
              <select
                value={selectedUser.role}
                onChange={e => handleRoleChange(selectedUser._id, e.target.value)}
                className="block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button
              onClick={() => handleDeleteUser(selectedUser._id)}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete User
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
