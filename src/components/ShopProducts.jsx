import React from "react";
import img from "../assets/img1.jpg";

const ShopProducts = [
  {
    id: 1,
    title: "Top Selling",
    items: [
      {
        id: 11,
        name: "All Natural Style Chicken Meatballs",
        price: "$52.85",
        oldPrice: "$55.80",
        count: "3",
      },
      {
        id: 12,
        name: "Angie's Sweet & Salty Kettle Corn",
        price: "$48.85",
        oldPrice: "$52.80",
        count: "1",
      },
      {
        id: 13,
        name: "Gorton's Beer Battered Fish Fillets",
        price: "$23.85",
        oldPrice: "$25.80",
        count: "0",
      },
    ],
  },
  {
    id: 2,
    title: "Trending Products",
    items: [
      {
        id: 21,
        name: "Seeds of Change Organic Watermelon",
        price: "$61.50",
        oldPrice: "$66.00",
        count: "1",
      },
      {
        id: 22,
        name: "Frozen vegetables broccoli, spinach",
        price: "$71.00",
        oldPrice: "$75.00",
        count: "1",
      },
      {
        id: 23,
        name: "Gorton's Beer Battered Fish Fillets",
        price: "$23.85",
        oldPrice: "$25.80",
        count: "0",
      },
    ],
  },
  {
    id: 3,
    title: "Recently added",
    items: [
      {
        id: 31,
        name: "Seeds of Change Organic Red Rice",
        price: "$28.85",
        oldPrice: "$32.80",
        count: "1",
      },
      {
        id: 32,
        name: "All Natural Style Chicken Meatballs",
        price: "$52.85",
        oldPrice: "$55.80",
        count: "3",
      },
      {
        id: 33,
        name: "Angie's Sweet & Salty Kettle Corn",
        price: "$48.85",
        oldPrice: "$52.80",
        count: "1",
      },
    ],
  },
  {
    id: 4,
    title: "Top Rated",
    items: [
      {
        id: 41,
        name: "Blue Almonds Lightly Salted Vegetables",
        price: "$23.85",
        oldPrice: "$25.80",
        count: "1",
      },
      {
        id: 42,
        name: "Organic Cage Grade A Large Eggs",
        price: "$21.00",
        oldPrice: "$24.00",
        count: "1",
      },
      {
        id: 43,
        name: "All Natural Style Chicken Meatballs",
        price: "$52.85",
        oldPrice: "$55.80",
        count: "3",
      },
    ],
  },
];

const Navbar = () => {
  return (
    <section className="bg-white px-5 py-4 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((section) => (
          <div key={section.id}>
            <div className="mb-4 border-b border-gray-200 pb-3">
              <h2 className="text-[18px] font-bold text-[#253d4e]">
                {section.title}
              </h2>
              <div className="mt-3 h-[2px] w-10 bg-[#bce3c9]"></div>
            </div>

            {section.items.map((item) => (
              <div key={item.id} className="mb-5 flex items-start gap-3">
                <img
                  src={img}
                  alt={item.name}
                  className="h-[74px] w-[74px] object-cover"
                />

                <div className="flex-1">
                  <h3 className="text-[12px] leading-[18px] font-semibold text-[#253d4e]">
                    {item.name}
                  </h3>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-[10px] tracking-[1px] text-[#f59e0b]">
                      *****
                    </span>
                    <span className="text-[10px] text-gray-400">
                      {item.count}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-[13px] font-bold text-[#3bb77e]">
                      {item.price}
                    </span>
                    <span className="text-[11px] text-gray-300 line-through">
                      {item.oldPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopProducts;