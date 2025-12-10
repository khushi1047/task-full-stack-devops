import React, { useRef } from "react";

const OtpVerification = () => {
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (value.length === 1 && index < 3) {
      inputRefs.current[index + 1].focus();  // Move to next
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();  // Move back
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-10">
      <div className="w-[350px] bg-[#111111] border border-purple-300 rounded-xl p-8 shadow-lg shadow-purple-500/20">

        <h2 className="text-3xl font-bold text-purple-200 text-center mb-6">
          Enter 4-Digit OTP
        </h2>

        <div className="flex justify-between mb-6">

          {[0, 1, 2, 3].map((_, index) => (
            <input
              key={index}
              maxLength="1"
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-14 h-14 text-center text-2xl bg-[#1a1a1a] border border-purple-400 
              rounded-lg text-purple-100 focus:outline-none focus:border-purple-300 
              focus:ring-2 focus:ring-purple-500"
            />
          ))}

        </div>

        <button className="w-full bg-purple-400 text-black font-semibold py-3 rounded-lg hover:bg-purple-300 transition-all">
          Submit
        </button>

      </div>
    </div>
  );
};

export default OtpVerification;
