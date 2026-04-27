import React from "react";

const products = new Array(10).fill(0).map((_, i) => ({
  id: i,
  title: "Seeds of Change Organic Red Rice",
  price: 28.85,
  oldPrice: 32.8,
  img: "https://via.placeholder.com/120",
  badge: "13%",
}));

export default function App() {
  return (
    <div className="bg-[#f7f7f8] min-h-screen p-6">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Popular Products</h2>

        <div className="flex gap-4 text-sm text-gray-500">
          <span className="text-green-600 font-medium">All</span>
          <span>Baking material</span>
          <span>Fresh Fruits</span>
          <span>Milks & Dairies</span>
          <span>Meats</span>
          <span>Vegetables</span>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-5 gap-5">
        {products.map((item) => (
          <div
            key={item.id}
            className="relative rounded-2xl bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* BADGE */}
            <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-[2px] rounded-md">
              {item.badge}
            </span>

            {/* IMAGE */}
            <div className="flex justify-center mb-3">
              <img
                src={item.img}
                className="h-24 object-contain"
              />
            </div>

            {/* CATEGORY */}
            <p className="text-xs text-gray-400 mb-1">
              Fresh Fruit
            </p>

            {/* TITLE */}
            <h3 className="text-sm font-semibold leading-tight mb-1">
              {item.title}
            </h3>

            {/* RATING */}
            <div className="text-yellow-400 text-xs mb-1">
              ★★★★★
            </div>

            {/* BRAND */}
            <p className="text-xs text-gray-400 mb-2">
              By <span className="text-green-600">NestFood</span>
            </p>

            {/* PRICE */}
            <div className="flex justify-between items-center">
              <div>
                <span className="text-green-600 font-bold text-sm mr-2">
                  ${item.price}
                </span>
                <span className="text-gray-400 text-xs line-through">
                  ${item.oldPrice}
                </span>
              </div>

              <button className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-md hover:bg-green-200">
                Add
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
