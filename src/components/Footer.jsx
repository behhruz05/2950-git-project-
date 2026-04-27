import React from "react";

function Footer() {
  const companyLinks = [
    { name: "About Us", href: "https://www.nestle.com/aboutus" },
    { name: "Delivery Information", href: "https://www.ups.com/us/en/support/shipping-support.page" },
    { name: "Privacy Policy", href: "https://policies.google.com/privacy" },
    { name: "Terms & Conditions", href: "https://www.apple.com/legal/internet-services/terms/site.html" },
    { name: "Contact Us", href: "https://www.google.com/search?q=contact+us" },
    { name: "Support Center", href: "https://support.google.com/" },
    { name: "Careers", href: "https://www.linkedin.com/jobs/" },
  ];

  const accountLinks = [
    { name: "Sign In", href: "https://accounts.google.com/" },
    { name: "View Cart", href: "https://www.amazon.com/gp/cart/view.html" },
    { name: "My Wishlist", href: "https://www.amazon.com/hz/wishlist/" },
    { name: "Track My Order", href: "https://www.ups.com/track" },
    { name: "Help Ticket", href: "https://support.microsoft.com/contactus" },
    { name: "Shipping Details", href: "https://www.fedex.com/en-us/shipping.html" },
    { name: "Compare products", href: "https://www.google.com/shopping" },
  ];

  const corporateLinks = [
    { name: "Become a Vendor", href: "https://seller.alibaba.com/" },
    { name: "Affiliate Program", href: "https://affiliate-program.amazon.com/" },
    { name: "Farm Business", href: "https://www.fao.org/home/en" },
    { name: "Farm Careers", href: "https://www.indeed.com/q-farm-jobs.html" },
    { name: "Our Suppliers", href: "https://www.globalsources.com/" },
    { name: "Accessibility", href: "https://www.w3.org/WAI/" },
    { name: "Promotions", href: "https://ads.google.com/" },
  ];

  const popularLinks = [
    { name: "Milk & Flavoured Milk", href: "https://www.google.com/search?q=milk+and+flavoured+milk" },
    { name: "Butter and Margarine", href: "https://www.google.com/search?q=butter+and+margarine" },
    { name: "Eggs Substitutes", href: "https://www.google.com/search?q=egg+substitutes" },
    { name: "Marmalades", href: "https://www.google.com/search?q=marmalades" },
    { name: "Sour Cream and Dips", href: "https://www.google.com/search?q=sour+cream+and+dips" },
    { name: "Tea & Kombucha", href: "https://www.google.com/search?q=tea+and+kombucha" },
    { name: "Cheese", href: "https://www.google.com/search?q=cheese" },
  ];

  const locationName = "Magic City, Tashkent";
  const locationAddress = "Babur Street 174, Tashkent";
  const latitude = 41.311081;
  const longitude = 69.240562;
  const googleMapRoute = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  const renderLinks = (title, links) => (
    <div>
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#3BB77E] transition"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="mt-10 bg-[#f7f7f7] text-[#253D4E]">
      <div className="mx-auto max-w-[1500px] px-8 pt-12">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-7">
          <div className="lg:col-span-2">
            <h1 className="text-[50px] font-bold text-[#3BB77E]">Nest</h1>
            <p className="text-sm text-gray-500">MART & GROCERY</p>

            <p className="mt-4 max-w-[250px] text-sm text-gray-600">
              Awesome grocery store website template
            </p>

            <ul className="mt-5 space-y-3 text-sm text-gray-600">
              <li>Address: {locationAddress}</li>
              <li>Call Us: (+998) 90-123-45-67</li>
              <li>Email: sale@Nest.com</li>
              <li>Hours: 10:00 - 18:00, Mon - Sat</li>
            </ul>
          </div>

          {renderLinks("Company", companyLinks)}
          {renderLinks("Account", accountLinks)}
          {renderLinks("Corporate", corporateLinks)}
          {renderLinks("Popular", popularLinks)}

          <div>
            <h3 className="mb-4 font-semibold">Install App</h3>

            <p className="mb-3 text-sm text-gray-500">
              From App Store or Google Play
            </p>

            <div className="mb-4 flex flex-col gap-3">
              <a
                href="https://play.google.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border bg-white px-3 py-2 text-center hover:shadow"
              >
                Get it on Google Play
              </a>

              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border bg-white px-3 py-2 text-center hover:shadow"
              >
                Download on the App Store
              </a>
            </div>

            <p className="mb-2 text-sm text-gray-500">Secured Payment Gateways</p>

            <div className="flex flex-wrap gap-2">
              <span className="rounded border bg-white px-2 py-1 text-xs">VISA</span>
              <span className="rounded border bg-white px-2 py-1 text-xs">MasterCard</span>
              <span className="rounded border bg-white px-2 py-1 text-xs">Maestro</span>
              <span className="rounded border bg-white px-2 py-1 text-xs">PayPal</span>
            </div>
          </div>

          <div className="rounded-xl border bg-white p-4 shadow-sm lg:col-span-3">
            <h3 className="mb-3 font-semibold">Location</h3>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-base font-medium">{locationName}</p>
                <p className="text-sm text-gray-600">{locationAddress}</p>
              </div>

              <a
                href={googleMapRoute}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-[#3BB77E] px-4 py-2 text-sm text-white hover:opacity-90"
              >
                Route on Map
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t py-6 text-sm lg:flex-row">
          <div>&copy; 2022, Nest - WordPress Ecommerce Template</div>

          <div className="flex gap-10">
            <div>
              <p className="text-xl font-bold text-green-500">1900646666</p>
              <p className="text-xs">Working 8:00 - 22:00</p>
            </div>
            <div>
              <p className="text-xl font-bold text-green-500">1900648888</p>
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
