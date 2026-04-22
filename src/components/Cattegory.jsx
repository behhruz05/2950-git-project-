  import React from "react";

  const categories = [
    { name: "Baking material", img: "../assets/cote1.png", count: 11 },
    { name: "Bread and Juice", img: "../assets/cote2.png", count: 8 },
    { name: "Clothing & beauty", img: "../assets/cote3.png", count: 4 },
    { name: "Deals Of The Day", img: "../assets/cote4.png", count: 4 },
    { name: "Fresh Fruit", img: "../assets/cote5.png", count: 10 },
    { name: "Fresh Seafood", img: "../assets/cote6.png", count: 5 },
    { name: "Milks and Dairies", img: "/cote7.png", count: 5 },
    { name: "Pet Foods & Toy", img: "/cote8.png", count: 2 },
  ];

  const Category = () => {
    return (
      
      <div>
        <div className="w-[300px] h-[600px] rounded-2xl p-[31px] border-2 border-[#F2F3F9] m-7">
        
        <div className="w-[240px] h-[50px] border-b mb-[30px] border-[#ECECEC]">
          <h2 className="text-[24px]">Category</h2>
        </div>

        <div className="flex flex-wrap gap-[10px]">
          {categories.map((item, index) => (
            <button 
              key={index}
              className="flex items-center w-[240px] h-[50px] rounded-xl border-2 border-[#F2F3F9] px-[14px] gap-[15px] hover:border-green-500 hover:shadow-md transition"
            >
              <img src={item.img} alt="" className="w-6 h-6" />

              <p className="text-sm font-medium text-gray-700 flex-1 text-left">
                {item.name}
              </p>

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                {item.count}
              </span>
            </button>
          ))}
        </div>

      </div>

      <div>
        <div className="w-[300px] h-[360p] rounded-[15px] border-[2px] border-[#F2F3F9]  p-[31px] m-7  ">
                  <div className="w-[240px] h-[50px] border-b-[1px] mb-[30px] border-[#ECECEC]">
                      <p className="text-[24px] font-normal ">Product Tags</p>
                  </div>

                  <div className="flex flex-wrap gap-[10px]">

                      <div className="w-[94px] h-[38px] rounded-[30px] flex items-center justify-center gap-[3px]  border-[2px] border-[#ECECEC]">
                          <img src="/Icon.png" alt="" />
                          <p className="font-semibold text-[15px]  align-middle text-[#3BB77E]">Brown</p>
                      </div>

                      <div className="w-[97px] h-[38px] rounded-[30px] flex items-center justify-center gap-[3px]  border-[2px] border-[#ECECEC]">
                          <img src="/Icon.png" alt="" />
                          <p className="font-semibold text-[15px]  align-middle text-[#3BB77E]">Coffes</p>
                      </div>

                      <div className="w-[96px] h-[38px] rounded-[30px] flex items-center justify-center gap-[3px]  border-[2px] border-[#ECECEC]">
                          <img src="/Icon.png" alt="" />
                          <p className="font-semibold text-[15px]  align-middle text-[#3BB77E]">Cream</p>
                      </div>

                      <div className="w-[133px] h-[38px] rounded-[30px] flex items-center justify-center gap-[3px]  border-[2px] border-[#ECECEC]">
                          <img src="/Icon.png" alt="" />
                          <p className="font-semibold text-[15px]  align-middle text-[#3BB77E]">Hodo Foods</p>
                      </div>

                      <div className="w-[90px] h-[38px] rounded-[30px] flex items-center justify-center gap-[3px]  border-[2px] border-[#ECECEC]">
                          <img src="/Icon.png" alt="" />
                          <p className="font-semibold text-[15px]  align-middle text-[#3BB77E]">Meats</p>
                      </div>

                      <div className="w-[105px] h-[38px] rounded-[30px] flex items-center justify-center gap-[3px]  border-[2px] border-[#ECECEC]">
                          <img src="/Icon.png" alt="" />
                          <p className="font-semibold text-[15px]  align-middle text-[#3BB77E]">Organic</p>
                      </div>

                      <div className="w-[92px] h-[38px] rounded-[30px] flex items-center justify-center gap-[3px]  border-[2px] border-[#ECECEC]">
                          <img src="/Icon.png" alt="" />
                          <p className="font-semibold text-[15px]  align-middle text-[#3BB77E]">Snack</p>
                      </div>

                      <div className="w-[130px] h-[38px] rounded-[30px] flex items-center justify-center gap-[3px]  border-[2px] border-[#ECECEC]">
                          <img src="/Icon.png" alt="" />
                          <p className="font-semibold text-[15px]  align-middle text-[#3BB77E]">Vegetables</p>
                      </div>








                  </div>
          </div>
      </div>

      </div>
    );
  };

  export default Category;