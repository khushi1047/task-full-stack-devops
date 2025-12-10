import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-10">
      <div className="w-[350px] bg-[#111111] border border-purple-300 rounded-xl p-8 shadow-lg shadow-purple-500/20">

        <h3 className="text-3xl font-bold text-purple-200 text-center mb-6">
          Forgot Password
        </h3>

        <input
          type="text"
          placeholder="Enter your email"
          className="w-full mb-4 px-4 py-3 bg-[#1a1a1a] border border-purple-400 
          rounded-lg text-purple-100 placeholder-purple-300 
          focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-500"
        />

        <button className="w-full bg-purple-400 text-black font-semibold py-3 rounded-lg hover:bg-purple-300 transition-all">
          Send
        </button>

        <p className="text-purple-300 text-center mt-4">
          <Link to="/Login" className="text-purple-200 font-semibold hover:underline">
            Go back to Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default ForgotPassword;
