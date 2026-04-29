import React, { useState } from 'react'
import logo from "../assets/logo.png";

const topLinks = ["About Us", "My Account", "Wishlist", "Order Tracking"];
const actions = [
  { label: "Compare", count: 0 },
  { label: "Wishlist", count: 0 },
  { label: "Cart", count: 0 },
  { label: "Account" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="hidden border-b bg-gray-50 text-sm text-gray-500 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2">
          <div className="flex flex-wrap gap-4">
            {topLinks.map((link) => (
              <a key={link} href="#" className="transition hover:text-green-600">
                {link}
              </a>
            ))}
          </div>

          <span className="text-center font-medium text-green-600">
            100% Secure delivery without contacting the courier
          </span>

          <div className="flex flex-wrap items-center gap-3 text-right">
            <span>
              Need help? Call Us: <strong>+1800900122</strong>
            </span>
            <span>English</span>
            <span>INR</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-3 lg:hidden">
          <img src={logo} alt="Logo" className="h-10 w-auto sm:h-12" />

<<<<<<< HEAD
        <div className="flex items-center gap-2 ">
        
        </div>

        <div className="flex flex-1 border border-green-600 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 px-4 py-2 text-sm outline-none"
          />
          <button className="bg-green-600 text-white px-5 py-2 text-sm font-medium">
            Search
=======
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-md border border-green-600 px-3 py-2 text-sm font-medium text-green-600 transition hover:bg-green-50"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
>>>>>>> origin/behruz
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-4 lg:mt-0 lg:flex-row lg:items-center">
          <div className="hidden shrink-0 lg:flex lg:items-center">
            <img src={logo} alt="Logo" className="h-12 w-auto xl:h-14" />
          </div>

          <div className="order-3 flex w-full flex-col gap-4 lg:order-2 lg:flex-1 lg:flex-row lg:items-center">
            <div className="flex w-full overflow-hidden rounded-md border border-green-600">
              <input
                type="text"
                placeholder="Search for products..."
                className="min-w-0 flex-1 px-4 py-2 text-sm outline-none"
              />
              <button className="shrink-0 bg-green-600 px-4 py-2 text-sm font-medium text-white sm:px-5">
                Search
              </button>
            </div>

            <button className="w-full rounded-md border border-green-600 px-4 py-2 text-sm whitespace-nowrap text-green-600 transition hover:bg-green-50 sm:w-auto">
              Become Vendor
            </button>
          </div>

          <div className="order-2 hidden gap-3 sm:grid sm:grid-cols-2 lg:order-3 lg:flex lg:items-center lg:justify-end lg:gap-5">
            {actions.map((action) => (
              <div
                key={action.label}
                className="relative flex min-w-[72px] flex-col items-center rounded-md border border-gray-100 px-3 py-2 text-center text-xs text-gray-500"
              >
                {"count" in action && (
                  <span className="absolute right-2 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-[10px] text-white">
                    {action.count}
                  </span>
                )}
                <span className="font-medium text-gray-700">{action.label}</span>
              </div>
            ))}
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mt-4 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-4 lg:hidden">
            <div className="grid gap-3 text-sm text-gray-600">
              {topLinks.map((link) => (
                <a key={link} href="#" className="transition hover:text-green-600">
                  {link}
                </a>
              ))}
            </div>

            <div className="space-y-2 border-t border-gray-200 pt-4 text-sm text-gray-600">
              <p>
                Need help? Call Us: <strong>+1800900122</strong>
              </p>
              <div className="flex gap-4">
                <span>English</span>
                <span>INR</span>
              </div>
              <p className="font-medium text-green-600">
                100% Secure delivery without contacting the courier
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:hidden">
              {actions.map((action) => (
                <div
                  key={action.label}
                  className="relative rounded-md border border-white bg-white px-3 py-3 text-center text-xs text-gray-600 shadow-sm"
                >
                  {"count" in action && (
                    <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-[10px] text-white">
                      {action.count}
                    </span>
                  )}
                  <span className="font-medium text-gray-700">{action.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar
