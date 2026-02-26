"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import DropDownIcon from "./svgs/DropDown";
import SearchIcon from "./svgs/Search";
import CartIcon from "./svgs/Cart";
import Delivery from "./svgs/Delivery";
import { useState } from "react";

const categories = [
  "Plant pots",
  "Ceramics",
  "Tables",
  "Chairs",
  "Crockery",
  "Tableware",
  "Cutlery",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top Promo Bar */}
      {isOpen && (
        <div className="topOne bg-[#2A254B] min-h-[54px] text-white text-xs py-2 px-[16px] flex items-center justify-between gap-4">
          <div className="flex justify-between gap-4">
            <Delivery />
            <h4>
              Free delivery on all orders over £50 with code easter checkout
            </h4>
          </div>
          <button onClick={closeDialog}>✕</button>
        </div>
      )}

      {/* Main Navbar */}
      <nav className="flex justify-between items-center h-[70px] px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Avion
        </Link>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-4">
          {/* Desktop Categories Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="text-gray-700 hover:text-black"
                aria-label="Categories"
              >
                <DropDownIcon />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Shop Categories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {categories.map((cat) => (
                <Link key={cat} href="/products">
                  <DropdownMenuItem>{cat}</DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Icons */}
          <Link href="/shoppingBasket" aria-label="Cart">
            <CartIcon />
          </Link>
          <button aria-label="Search">
            <SearchIcon />
          </button>
        </div>
      </nav>
    </header>
  );
}
