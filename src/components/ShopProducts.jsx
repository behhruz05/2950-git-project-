import React from "react";
import img from "../assets/img1.jpg";

const products = [
  {
    id: 1,
    title: "Top Selling",
    items: [
      {
        id: 11,
        name: "All Natural Style Chicken Meatballs",
        category: "Frozen Meat",
        description: "Soft chicken meatballs for quick lunch and dinner meals.",
        price: "$52.85",
        oldPrice: "$55.80",
        count: "3",
      },
      {
        id: 12,
        name: "Angie's Sweet & Salty Kettle Corn",
        category: "Snacks",
        description: "Light crunchy kettle corn with a sweet and salty taste.",
        price: "$48.85",
        oldPrice: "$52.80",
        count: "1",
      },
      {
        id: 13,
        name: "Gorton's Beer Battered Fish Fillets",
        category: "Seafood",
        description: "Crispy fish fillets with a rich golden beer batter.",
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
        category: "Fresh Fruit",
        description: "Juicy organic watermelon with naturally sweet flavor.",
        price: "$61.50",
        oldPrice: "$66.00",
        count: "1",
      },
      {
        id: 22,
        name: "Frozen vegetables broccoli, spinach",
        category: "Vegetables",
        description: "Healthy frozen mix for soups, salads, and side dishes.",
        price: "$71.00",
        oldPrice: "$75.00",
        count: "1",
      },
      {
        id: 23,
        name: "Gorton's Beer Battered Fish Fillets",
        category: "Seafood",
        description: "Easy-to-cook fish fillets with crispy outside texture.",
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
        category: "Grains",
        description: "Organic red rice packed with fiber and nutty taste.",
        price: "$28.85",
        oldPrice: "$32.80",
        count: "1",
      },
      {
        id: 32,
        name: "All Natural Style Chicken Meatballs",
        category: "Frozen Meat",
        description: "Tender meatballs made for pasta, rice, or snack plates.",
        price: "$52.85",
        oldPrice: "$55.80",
        count: "3",
      },
      {
        id: 33,
        name: "Angie's Sweet & Salty Kettle Corn",
        category: "Snacks",
        description: "Popular kettle corn with balanced sweet and salty notes.",
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
        category: "Healthy Food",
        description: "Light salted vegetable snack with a crunchy finish.",
        price: "$23.85",
        oldPrice: "$25.80",
        count: "1",
      },
      {
        id: 42,
        name: "Organic Cage Grade A Large Eggs",
        category: "Dairy & Eggs",
        description: "Fresh organic eggs for breakfast, baking, and meals.",
        price: "$21.00",
        oldPrice: "$24.00",
        count: "1",
      },
      {
        id: 43,
        name: "All Natural Style Chicken Meatballs",
        category: "Frozen Meat",
        description: "Family-size chicken meatballs with soft and juicy texture.",
        price: "$52.85",
        oldPrice: "$55.80",
        count: "3",
      },
    ],
  },
];

const ShopProducts = () => {
  return (
    <section className="overflow-visible bg-white px-5 py-4 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-10 gap-y-6 overflow-visible sm:grid-cols-2 xl:grid-cols-4">
        {products.map((section) => (
          <div key={section.id} className="overflow-visible">
            <div className="mb-4 border-b border-gray-200 pb-3">
              <h2 className="text-[18px] font-bold text-[#253d4e]">
                {section.title}
              </h2>
              <div className="mt-3 h-[2px] w-10 bg-[#bce3c9]"></div>
            </div>

            {section.items.map((item) => (
              <div
                key={item.id}
                className="group relative z-0 mb-5 flex items-start gap-3 rounded-xl bg-white p-3 transition duration-300 hover:z-20 hover:scale-110 hover:shadow-2xl"
              >
                <img
                  src={img}
                  alt={item.name}
                  className="h-[74px] w-[74px] object-cover"
                />

                <div className="flex-1">
                  <p className="mb-1 text-[10px] uppercase tracking-[1px] text-gray-400">
                    {item.category}
                  </p>
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

                <div className="pointer-events-none absolute inset-x-2 top-full mt-2 rounded-lg bg-[#253d4e] p-3 text-xs text-white opacity-0 shadow-xl transition duration-300 group-hover:opacity-100">
                  <p>{item.description}</p>
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
