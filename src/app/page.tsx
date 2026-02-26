"use client";

import Navbar from "@/components/Navbar";
import { GetProductData } from "@/sanity/sanity.query";
import Image from "next/image";
import Link from "next/link";
import Product from "@/types/page";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetProductData();
      setProducts(data);
    };
    fetchData();
  }, []);

  const newCeramics = products.slice(15, 19);
  const popularProducts = products.slice(10, 14);

  // Categories for header
  const categories = ["Plant pots", "Ceramics", "Tables", "Chairs", "Crockery", "Tableware", "Cutlery"];

  // Brand differences
  const brandDifferences = [
    { icon: "/Delivery.png", title: "Next day as standard", desc: "Order before 3pm and get your order the next day as standard" },
    { icon: "/Checkmark.png", title: "Made by true artisans", desc: "Handmade crafted goods made with real passion and craftsmanship" },
    { icon: "/Purchase.png", title: "Unbeatable prices", desc: "For our materials and quality you won’t find better prices anywhere" },
    { icon: "/Sprout.png", title: "Recycled packaging", desc: "We use 100% recycled packaging to ensure our footprint is manageable" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Categories */}
      <div className="hidden lg:flex justify-center my-8">
        <ul className="flex gap-8 text-gray-500 text-base">
          {categories.map((cat) => (
            <Link key={cat} href="/products">
              <li className="hover:text-gray-900 cursor-pointer">{cat}</li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Hero Section */}
      <div className="lg:relative">
        <div className="first-sec flex lg:mx-[80px] justify-between bg-[#2A254B] text-white px-[24px] lg:px-0 pb-[32px] lg:pb-0">
          <div className="lg:relative">
            <h2 className="text-[32px] font-thin pt-[40px] lg:px-[60px]">
              The furniture brand for the future, with timeless designs
            </h2>
            <p className="text-[18px] font-extralight mt-[97px] lg:absolute lg:bottom-10 lg:px-[60px]">
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </p>
            <Link href="/products">
              <button className="w-full lg:ml-[60px] lg:w-[170px] flex justify-center items-center bg-[#4a4566] h-[56px] mt-[32px]">
                View collection
              </button>
            </Link>
          </div>
          <div className="h-[100%]">
            <Image
              className="hidden lg:flex lg:justify-end"
              src="/Product3.png"
              alt="Product hero"
              width={520}
              height={584}
            />
          </div>
        </div>

        {/* Brand Differences Section */}
        <section className="second-sec max-w-7xl mx-auto px-6 lg:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <h1 className="col-span-full text-2xl font-bold">Why make our brand different?</h1>
          {brandDifferences.map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-4">
              <Image src={item.icon} alt={item.title} width={40} height={40} />
              <h2 className="font-medium text-lg">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* New Ceramics Section */}
        <div className="third-sec px-[24px] lg:px-[80px] pt-[45px] pb-[38px]">
          <h2 className="mb-[25px] text-[20px] lg:text-[32px]">New ceramics</h2>
          <div className="flex flex-wrap justify-center sm:justify-between gap-4">
            {newCeramics.map((product: Product) => (
              <div key={product.id}>
                <Link href={`/products/${product.id}`}>
                  <Image
                    className="mb-[12px] lg:w-[305px] lg:h-[375px]"
                    src={product.image}
                    alt={product.name}
                    width={163}
                    height={201}
                  />
                  <h2 className="lg:text-[20px]">{product.name}</h2>
                  <h3 className="mb-10 lg:text-[20px]">${product.price}</h3>
                </Link>
              </div>
            ))}
          </div>
          <div className="w-full lg:flex lg:justify-center">
            <Link href="/products">
              <button className="w-full lg:w-[170px] bg-[#4a4566] hover:bg-[#655a85] text-white rounded-md text-[16px] h-[56px] mt-[32px]">
                View collection
              </button>
            </Link>
          </div>
        </div>

        {/* Popular Products Section */}
        <div className="forth-sec px-[24px] lg:px-[80px] pt-[53px] pb-[40px] text-[20px]">
          <h1 className="mb-[36px] lg:mb-0 text-[20px] lg:text-[32px]">Our popular products</h1>
          <div className="forth-sec-cards justify-center sm:flex sm:justify-between flex flex-wrap gap-5 pt-[20px]">
            {popularProducts.map((product: Product) => (
              <div key={product.id}>
                <Link href={`/products/${product.id}`}>
                  <div className="forth-sec-card1 relative flex-shrink-0">
                    <Image
                      className="mb-[12px] lg:w-[305px] lg:h-[375px]"
                      src={product.image}
                      alt={product.name}
                      width={163}
                      height={201}
                    />
                    <h1>{product.name}</h1>
                    <h2 className="mb-10">${product.price}</h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="w-full lg:flex lg:justify-center">
            <Link href="/products">
              <button className="w-full lg:w-[170px] bg-[#4a4566] hover:bg-[#655a85] text-white rounded-md text-[16px] h-[56px] mt-[32px]">
                View collection
              </button>
            </Link>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="fifth-sec lg:text-center px-[24px] pt-[53px] pb-[39px] mb-5">
          <h1 className="mb-[24px] text-[20px]">Join the club and get the benefits</h1>
          <p className="mb-[64px] text-[14px]">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
          <div className="w-full flex justify-center items-center">
            <input
              className="py-[18px] pl-[15px]"
              type="email"
              placeholder="your@email.com"
            />
            <button className="bg-[#2A254B] px-[32px] py-[18px] text-white">
              Sign up
            </button>
          </div>
        </div>

        {/* Studio Section */}
        <div className="lg:flex lg:px-0 lg:relative">
          <div className="sixth-sec lg:w-[50%] px-[24px] lg:px-[80px] lg:pr-[150px] pt-[51px] lg:pt-[80px] pb-[37px]">
            <h1 className="mb-[27px] text-[20px] lg:text-[24px]">
              From a studio in London to a global brand with over 400 outlets
            </h1>
            <p className="mb-[26px] text-[14px]">
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market.
            </p>
            <p className="mb-[64px] text-[14px]">
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>
            <button className="w-full lg:absolute lg:max-w-[150px] lg:bottom-14 flex justify-center items-center bg-[#4a4566] hover:bg-[#655a85] text-white rounded-md h-[56px] mt-[32px]">
              Get in touch
            </button>
          </div>

          <div className="seventh-sec w-full lg:w-[720px] lg:h-[603px]">
            <Image
              className="lg:w-full lg:h-full w-full"
              src="/Image.png"
              alt="Studio image"
              width={390}
              height={358}
            />
          </div>
        </div>
      </div>
    </div>
  );
}