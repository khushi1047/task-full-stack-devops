import React from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-10">
      <div className="w-[350px] bg-[#111111] border border-purple-300 rounded-xl p-8 shadow-lg shadow-purple-500/20">

        <h2 className="text-3xl font-bold text-purple-200 text-center mb-6">
          Reset Password
        </h2>

        <input
          type="password"
          placeholder="Enter new password"
          className="w-full mb-4 px-4 py-3 bg-[#1a1a1a] border border-purple-400 
          rounded-lg text-purple-100 placeholder-purple-300 focus:outline-none 
          focus:border-purple-300 focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="password"
          placeholder="Confirm new password"
          className="w-full mb-6 px-4 py-3 bg-[#1a1a1a] border border-purple-400 
          rounded-lg text-purple-100 placeholder-purple-300 focus:outline-none 
          focus:border-purple-300 focus:ring-2 focus:ring-purple-500"
        />

        <button
          onClick={() => navigate('/login')}
          className="w-full bg-purple-400 text-black font-semibold py-3 rounded-lg hover:bg-purple-300 transition-all"
        >
          Submit
        </button>

      </div>
    </div>
  );
};

export default ResetPassword;
