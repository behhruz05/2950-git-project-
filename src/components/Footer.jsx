import React from "react";

function Footer() {
  return (
    <footer className="bg-[#f7f7f7] text-[#253D4E] mt-10">
      <div className="max-w-[1500px] mx-auto px-8 pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-10 pb-12">
          <div className="lg:col-span-2">
            <h1 className="text-[50px] font-bold text-[#3BB77E]">Nest</h1>
            <p className="text-sm text-gray-500">MART & GROCERY</p>

            <p className="mt-4 text-sm text-gray-600 max-w-[250px]">
              Awesome grocery store website template
            </p>

            <ul className="mt-5 space-y-3 text-sm text-gray-600">
              <li>📍 Address: 5171 W Campbell Ave Kent, Utah</li>
              <li>📞 Call Us: (+91)-540-025-124553</li>
              <li>📧 Email: sale@Nest.com</li>
              <li>⏰ Hours: 10:00 - 18:00, Mon - Sat</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#3BB77E] cursor-pointer">About Us</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Delivery Information</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Privacy Policy</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Contact Us</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Support Center</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Careers</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Account</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#3BB77E] cursor-pointer">Sign In</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">View Cart</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">My Wishlist</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Track My Order</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Help Ticket</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Shipping Details</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Compare products</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Corporate</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#3BB77E] cursor-pointer">Become a Vendor</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Affiliate Program</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Farm Business</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Farm Careers</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Our Suppliers</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Accessibility</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Promotions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Popular</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#3BB77E] cursor-pointer">Milk & Flavoured Milk</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Butter and Margarine</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Eggs Substitutes</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Marmalades</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Sour Cream and Dips</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Tea & Kombucha</li>
              <li className="hover:text-[#3BB77E] cursor-pointer">Cheese</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Install App</h3>

            <p className="text-sm text-gray-500 mb-3">
              From App Store or Google Play
            </p>

            <div className="flex flex-col gap-3 mb-4">
              <button className="border rounded-md px-3 py-2 bg-white hover:shadow">
                Get it on Google Play
              </button>
              <button className="border rounded-md px-3 py-2 bg-white hover:shadow">
                Download on the App Store
              </button>
            </div>

            <p className="text-sm text-gray-500 mb-2">
              Secured Payment Gateways
            </p>

            <div className="flex gap-2 flex-wrap">
              <span className="border px-2 py-1 rounded bg-white text-xs">VISA</span>
              <span className="border px-2 py-1 rounded bg-white text-xs">MasterCard</span>
              <span className="border px-2 py-1 rounded bg-white text-xs">Maestro</span>
              <span className="border px-2 py-1 rounded bg-white text-xs">PayPal</span>
            </div>
          </div>
        </div>

        <div className="border-t py-6 flex flex-col lg:flex-row justify-between items-center gap-6 text-sm">
          <div>© 2022, Nest - WordPress Ecommerce Template</div>

          <div className="flex gap-10">
            <div>
              <p className="text-green-500 font-bold text-xl">1900646666</p>
              <p className="text-xs">Working 8:00 - 22:00</p>
            </div>
            <div>
              <p className="text-green-500 font-bold text-xl">1900648888</p>
              <p className="text-xs">24/7 Support Center</p>
            </div>
          </div>

          <div>Follow Us</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;