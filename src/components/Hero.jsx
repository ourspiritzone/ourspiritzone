import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#fdf8f3] py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#2e2e2e]">
          Welcome to inner peace
        </h1>
        <p className="text-lg md:text-xl text-[#4a4a4a] mb-8">
          Discover tools for calm, clarity, and connection. Download your free
          guide and begin your healing journey today.
        </p>
        <form
          action="http://eepurl.com/jiEvec"
          method="post"
          target="_blank"
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            name="EMAIL"
            placeholder="Enter your email"
            required
            className="px-4 py-3 w-full sm:w-80 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b8d6d4]"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-md bg-[#b8d6d4] hover:bg-[#a3c8c4] transition text-[#1f1f1f] font-semibold"
          >
            📥 Download the Calm Toolkit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
