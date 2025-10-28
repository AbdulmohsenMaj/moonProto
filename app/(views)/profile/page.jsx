'use client';

import { useState, useRef } from 'react';
import { useUser } from '@/app/context/UserContext';

export default function ProfilePage() {
  const { user, loading, updateUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    image: null
  });
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Not Authenticated</h1>
          <p>Please log in to view your profile.</p>
        </div>
      </div>
    );
  }

  const handleEdit = () => {
    setFormData({
      name: user.name,
      image: null
    });
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({ name: '', image: null });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      const response = await fetch('/api/profile', {
        method: 'PUT',
        body: formDataToSend
      });

      if (response.ok) {
        const updatedUser = await response.json();
        updateUser(updatedUser);
        setIsEditing(false);
        setFormData({ name: '', image: null });
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <img
                src={user.image || '/user.svg'}
                alt={user.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
              />
              <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold ${
                user.role === 'admin' 
                  ? 'bg-red-100 text-red-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {user.role.toUpperCase()}
              </div>
            </div>
          </div>

          {!isEditing ? (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Signed in with {user.provider}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-2">Account Type</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    user.role === 'admin' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {user.role === 'admin' ? 'Administrator' : 'Client'}
                  </span>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-2">Provider</h3>
                  <p className="text-gray-600 capitalize">{user.provider}</p>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={handleEdit}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Profile</h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Image
                </label>
                <div className="flex items-center space-x-4">
                  <img
                    src={formData.image ? URL.createObjectURL(formData.image) : user.image || '/user.svg'}
                    alt="Preview"
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Choose Image
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  disabled={uploading}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {uploading ? 'Updating...' : 'Save Changes'}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}