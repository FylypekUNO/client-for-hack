import React from "react";

const CreateMissionPage = () => {
  return (
    <main className="text-black">
      <h1>Create Mission</h1>
      <div className="w-56 relative group">
        <input
          type="text"
          id="title"
          required
          className="w-full h-10 px-4 text-black text-sm peer bg-gray-100 outline-none"
        />
        <label className="transform text-black transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
          Title
        </label>
      </div>
    </main>
  );
};

export default CreateMissionPage;
