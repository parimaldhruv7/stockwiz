import React from "react";

const SignupForm = () => {
  return (
    <div className="w-full">
      <h2 className="text-white text-center text-xl font-semibold mb-4">
        Get <span className="text-green-400">2 Months Extra Access</span> <br />
        <span className="text-white">
          + <span className="text-yellow-400">Special Discount Code</span>
        </span>
      </h2>

      <form className="space-y-4">
        <div>
          <label className="text-yellow-300 text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full mt-1 p-2 rounded-md border border-green-500 focus:outline-none"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded-md border border-white focus:outline-none"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone No."
            className="w-full p-2 rounded-md border border-white focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded-md bg-gradient-to-r from-green-400 to-yellow-400 text-black font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
