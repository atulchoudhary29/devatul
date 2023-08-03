import { useState } from "react";
import { useRouter } from "next/router";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const navItems = [
    "About",
    "Services",
    "Portfolio",
    "Work",
    "Statistics",
    "Blog",
    "Contact",
  ];

  const handleScroll = (id) => {
    let element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
    }
  };

  const triggerNavItem = (id) => {
    router.push("/" + id); // <-- use router.push to navigate
  };

  const triggerMobileNavItem = (id) => {
    setMobileMenuOpen(false);
    router.push("/" + id); // <-- use router.push to navigate
  };

  return (
    <div className='bg-[#5540af]'>
      <div className="w-full z-50 top-0 py-3 sm:py-5 bg-transparent">
        <div className="container flex items-center justify-between mx-auto">
          <div>
            <a href="/">
              <h2 className='text-white text-4xl font-bold font-mono hover:font-serif hover:text-4xl'>DevAtul</h2>
            </a>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">
              {navItems.map((item) => (
                <li key={item} className="group pl-6">
                  <span
                    onClick={() => triggerNavItem(`#${item.toLowerCase()}`)}
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    {item}
                  </span>
                  <span
                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                  ></span>
                </li>
              ))}
            </ul>
          </div>
          <div className="block lg:hidden">
            <button onClick={() => setMobileMenuOpen(true)}>
              <i className="bx bx-menu text-4xl text-white"></i>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-100 transition-opacity lg:hidden">
          <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
            <button className="absolute top-0 right-0 mt-4 mr-4" onClick={() => setMobileMenuOpen(false)}>
              <img src="/assets/img/icon-close.svg" className="h-10 w-auto" alt="" />
            </button>
            <ul className="mt-8 flex flex-col">
              {navItems.map((item) => (
                <li key={item} className="py-2">
                  <span
                    onClick={() => triggerMobileNavItem(`#${item.toLowerCase()}`)}
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
