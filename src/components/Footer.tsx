"use client";

import Link from "next/link";

const footerLinks = {
  categories: ["Crockery", "Furniture", "Homeware", "Plant pots", "Chairs"],
  menu: [
    "New arrivals",
    "Best sellers",
    "Recently viewed",
    "Popular this week",
    "All products",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#2A254B] text-white text-sm font-extralight">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3 lg:grid-cols-5">
        {/* Categories */}
        <div className="space-y-2">
          <h5 className="text-lg font-medium">Categories</h5>
          {footerLinks.categories.map((item) => (
            <Link key={item} href="/products" className="block hover:underline">
              {item}
            </Link>
          ))}
        </div>

        {/* Menu */}
        <div className="space-y-2">
          <h5 className="text-lg font-medium">Menu</h5>
          {footerLinks.menu.map((item) => (
            <Link key={item} href="/products" className="block hover:underline">
              {item}
            </Link>
          ))}
        </div>

        {/* Repeated Categories (can replace with dynamic section if needed) */}
        <div className="space-y-2 hidden sm:block">
          <h5 className="text-lg font-medium">Explore</h5>
          {footerLinks.categories.map((item) => (
            <Link key={item} href="/products" className="block hover:underline">
              {item}
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="sm:col-span-2 lg:col-span-2">
          <h5 className="text-lg font-medium mb-4">Join our mailing list</h5>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full sm:flex-1 px-4 py-3 rounded bg-[#4B4666] placeholder-white text-white focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black rounded font-medium hover:bg-gray-200"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/30 mt-8" />

      {/* Copyright */}
      <div className="text-center py-6 opacity-80 text-xs">
        © 2022 Avion LTD. All rights reserved.
      </div>
    </footer>
  );
}