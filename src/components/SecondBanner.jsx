


const Banner = () => {

return (
    <div className="bg-[url('../assets/banner.png')] bg-cover bg-center bg-no-repeat w-[98%] h-[470px] rounded-lg m-4 p-[75px] flex ">
        
        <div>
            <h1 className="font-quicksand font-bold text-[72px] w-[900px] leading-[72px] tracking-normal align-middle"lassName="">
                Stay home & get your daily      
needs from our shop
            </h1>
            <p className="font-lato font-normal text-[18px] leading-[28px] tracking-normal align-middle mt-[30px]">
                Start Your Daily Shopping with <span className=" text-[#3BB77E]"> Nest Mart</span> 
            </p>

          <div className="w-[460px] h-[68px] rounded-full bg-white flex items-center p-[6px] box-border mt-[50px]">
  <input
    type="email"
    placeholder="Your email address"
    className="flex-1 border-none bg-transparent text-[15px] text-gray-700 outline-none px-4 h-full"
  />
  <button className="h-[56px] px-7 rounded-full bg-[#3BB77E] hover:bg-[#30a06b] text-white text-[15px] font-medium border-none cursor-pointer whitespace-nowrap">
    Subscribe
  </button>
</div>
        </div>

        <div className="mt-[160px]">
            <img src="../assets/alt.png" alt="" />
        </div>

    </div>
)

}


export default Banner