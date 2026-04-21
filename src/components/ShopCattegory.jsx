import React from 'react'



const ShopCattegory = () => {
  return (
    <div>
      <div className="px-[40px] py-[30px]">

      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Shop by Categories
        </h2>

        <span className="text-green-500 cursor-pointer text-sm">
          All Categories →
        </span>
      </div>

      
      <div className="flex gap-[20px] overflow-x-auto">

        {categories.map((item, index) => (
          <div
            key={index}
            className="w-[184px] h-[234px] bg-gray-100 rounded-2xl
                       flex flex-col items-center justify-center
                       shrink-0 cursor-pointer
                       hover:bg-white hover:shadow-md transition"
          >
           
            <img
              src={item.icon}
              alt={item.title}
              className="w-15 h-16 object-contain mb-4"
            />

           
            <h3 className="text-sm font-semibold text-center text-gray-700">
              {item.title}
            </h3>

            
            <p className="text-gray-400 text-xs mt-1">
              {item.count} items
            </p>
          </div>
        ))}

      </div>
    </div>
    </div>
  )
}

export default ShopCattegory
