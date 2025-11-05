"use client";

export default function ProfileInfoSection({ name, email, preview, onSelectFile, onSubmit, status, setName }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <AvatarUpload preview={preview} onSelectFile={onSelectFile} />
        <div className="text-sm text-gray-600">Click the avatar to upload a new profile picture.</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form onSubmit={onSubmit} className="space-y-4 border rounded-xl p-6">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-black" />
            <h3 className="text-lg font-semibold">Profile</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" placeholder="Enter your full name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input id="email" name="email" type="email" value={email} readOnly className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600" />
            </div>
          </div>
          {status?.message && (
            <div className={`${status.type === "error" ? "bg-red-50 border-red-200 text-red-700" : "bg-green-50 border-green-200 text-green-700"} border rounded-md p-3 text-sm`}>{status.message}</div>
          )}
          <div className="flex justify-end">
            <button type="submit" className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors">Save info</button>
          </div>
        </form>

        <div className="space-y-4 border rounded-xl p-6">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-black" />
            <h3 className="text-lg font-semibold">Password</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Old password</label>
              <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="********" disabled />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New password</label>
              <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="********" disabled />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm new password</label>
              <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="********" disabled />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-black text-white py-2 px-4 rounded-md opacity-60 cursor-not-allowed">Save password</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AvatarUpload({ preview, onSelectFile }) {
  return (
    <div className="flex items-center gap-4">
      <div
        role="button"
        title="Click to change avatar"
        onClick={() => document.getElementById("profile-info-avatar-input")?.click()}
        className="h-16 w-16 rounded-full overflow-hidden bg-gray-100 border border-gray-300 flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-black"
      >
        {preview ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={preview} alt="avatar" className="h-full w-full object-cover" />
        ) : (
          <span className="text-gray-400 text-sm">No image</span>
        )}
      </div>
      <input
        id="profile-info-avatar-input"
        type="file"
        accept="image/*"
        onChange={onSelectFile}
        className="hidden"
      />
    </div>
  );
}