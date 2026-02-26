"use client";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DropDown from "@/components/svgs/DropDown";
import Search from "@/components/svgs/Search";
import Link from "next/link";
import Accounts from "@/components/svgs/Accounts";
import Cart from "@/components/svgs/Cart";
import Delivery from "@/components/svgs/Delivery";
import { useEffect, useState } from "react";
import { GetProductData } from "@/sanity/sanity.query";
import Product from "@/types/page";


export default function Products() {
  useEffect(()=>{
    const fetchData = async () => {
      const products = await GetProductData()
      setProducts(products)
    }
    fetchData()
  }, [])
  const [products, setProducts] = useState<Product[]>([])

  const [isOpen, setIsOpen] = useState(true)
  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {isOpen && 
        <div className="topOne bg-[#2A254B] min-h-[54px] text-white text-xs py-2 px-[16px] flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Delivery />
            <h4>
              Free delivery on all orders over £50 with code easter checkout
            </h4>
          </div>
          <button onClick={closeDialog}>✕</button>
        </div>
      }

      <div className="flex justify-between h-[69px] bg-white px-6">
        <div className="flex items-center text-xl">
          <Link href="/"><h1 className="text-2xl font-bold">Avion</h1></Link>
        </div>
        <div className="flex justify-center items-center gap-[23px]">
          <Search />
          <Link href="/shoppingBasket">
            <Cart />
          </Link>
          <Accounts />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <DropDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel></DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/about">
                <DropdownMenuItem>About Us</DropdownMenuItem>
              </Link>
              <DropdownMenuItem>Contact</DropdownMenuItem>
              <DropdownMenuItem>Blog</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Plant pots</DropdownMenuItem>
              <DropdownMenuItem>Ceramics</DropdownMenuItem>
              <DropdownMenuItem>Tables</DropdownMenuItem>
              <DropdownMenuItem>Chairs</DropdownMenuItem>
              <DropdownMenuItem>Crockery</DropdownMenuItem>
              <DropdownMenuItem>Tableware</DropdownMenuItem>
              <DropdownMenuItem>Cutlery</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="second-sec px-[24px] pt-[45px] pb-[80px] lg:px-[80px]">
        <h2 className="mb-[25px] text-[20px] block ">All products</h2>
        <div className="flex flex-wrap justify-center sm:justify-between gap-8">
          {products.map((product) => {
            return (
              <div key={product.id} className="bg-slate-300 p-4 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
                <Link href={`/products/${product.id}`}>
                  <div>
                    <Image
                      className="mb-[10px] lg:w-[305px] lg:h-[375px]"
                      src={product?.image}
                      alt=""
                      width={163}
                      height={201}
                    />
                    <h2 className="w-[163px] lg:w-[305px]">{product.name}</h2>
                    <h3>${product.price}</h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}