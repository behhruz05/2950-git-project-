import React from "react";

function Footer() {
  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Delivery Information", path: "/delivery" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Contact Us", path: "/contact" },
    { name: "Support Center", path: "/support" },
    { name: "Careers", path: "/careers" },
  ];

  const accountLinks = [
    { name: "Sign In", path: "/signin" },
    { name: "View Cart", path: "/cart" },
    { name: "My Wishlist", path: "/wishlist" },
    { name: "Track My Order", path: "/track-order" },
    { name: "Help Ticket", path: "/help-ticket" },
    { name: "Shipping Details", path: "/shipping" },
    { name: "Compare products", path: "/compare" },
  ];

  const corporateLinks = [
    { name: "Become a Vendor", path: "/vendor" },
    { name: "Affiliate Program", path: "/affiliate" },
    { name: "Farm Business", path: "/farm-business" },
    { name: "Farm Careers", path: "/farm-careers" },
    { name: "Our Suppliers", path: "/suppliers" },
    { name: "Accessibility", path: "/accessibility" },
    { name: "Promotions", path: "/promotions" },
  ];

  const popularLinks = [
    { name: "Milk & Flavoured Milk", path: "/category/milk" },
    { name: "Butter and Margarine", path: "/category/butter" },
    { name: "Eggs Substitutes", path: "/category/eggs" },
    { name: "Marmalades", path: "/category/marmalades" },
    { name: "Sour Cream and Dips", path: "/category/sour-cream" },
    { name: "Tea & Kombucha", path: "/category/tea" },
    { name: "Cheese", path: "/category/cheese" },
  ];

  // O'zingni manziling koordinatasini yozasan
  const latitude = 41.311081;
  const longitude = 69.240562;

  const googleMapEmbed = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
  const googleMapOpen = `https://www.google.com/maps?q=${latitude},${longitude}`;
  const yandexMapOpen = `https://yandex.uz/maps/?ll=${longitude}%2C${latitude}&z=15`;
  const yandexNavigatorRoute = `yandexnavi://build_route_on_map?lat_to=${latitude}&lon_to=${longitude}`;

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
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="hover:text-[#3BB77E] transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Account</h3>
            <ul className="space-y-2 text-sm">
              {accountLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="hover:text-[#3BB77E] transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Corporate</h3>
            <ul className="space-y-2 text-sm">
              {corporateLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="hover:text-[#3BB77E] transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Popular</h3>
            <ul className="space-y-2 text-sm">
              {popularLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="hover:text-[#3BB77E] transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Install App</h3>

            <p className="text-sm text-gray-500 mb-3">
              From App Store or Google Play
            </p>

            <div className="flex flex-col gap-3 mb-4">
              <a
                href="https://play.google.com/"
                target="_blank"
                rel="noreferrer"
                className="border rounded-md px-3 py-2 bg-white hover:shadow text-center"
              >
                Get it on Google Play
              </a>

              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
                className="border rounded-md px-3 py-2 bg-white hover:shadow text-center"
              >
                Download on the App Store
              </a>
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

          {/* BO'SH JOYGA MAP SECTION */}
          <div className="lg:col-span-2 bg-white rounded-xl p-4 shadow-sm border">
            <h3 className="font-semibold mb-3">Our Location</h3>

            <div className="w-full h-[220px] rounded-lg overflow-hidden border">
              <iframe
                title="store-location"
                src={googleMapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-sm text-gray-600 mt-3">
              5171 W Campbell Ave Kent, Utah
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href={googleMapOpen}
                target="_blank"
                rel="noreferrer"
                className="bg-[#3BB77E] text-white px-4 py-2 rounded-md hover:opacity-90"
              >
                Open Map
              </a>

              <a
                href={yandexMapOpen}
                target="_blank"
                rel="noreferrer"
                className="border border-[#3BB77E] text-[#3BB77E] px-4 py-2 rounded-md hover:bg-[#3BB77E] hover:text-white"
              >
                Open in Yandex Map
              </a>

              <a
                href={yandexNavigatorRoute}
                className="border border-black text-black px-4 py-2 rounded-md hover:bg-black hover:text-white"
              >
                Yandex Navigator Route
              </a>
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