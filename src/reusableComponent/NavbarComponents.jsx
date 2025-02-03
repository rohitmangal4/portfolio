import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      let currentSection = "";
      sections.forEach((section) => {
        const { top, bottom } = section.getBoundingClientRect();
        if (top <= 0 && bottom >= 0) {
          currentSection = `#${section.id}`;
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f141f]/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h3 className="text-4xl font-bold text-cyan-500">Portfolio</h3>
          </div>

          {/* Mobile Menu Toggle Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={handleMobileMenuToggle} className="text-gray-300 hover:text-cyan-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>


          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`${
                    activeLink === item.href ? "text-cyan-500" : "text-gray-300"
                  } hover:text-cyan-500 transition-colors duration-300`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href).scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } fixed inset-0 z-40 bg-[#0f141f] md:hidden`}
        onClick={closeMobileMenu}
      >
        <div
          className="flex justify-end p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleMobileMenuToggle}
            className="text-gray-300 hover:text-yellow-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="bg-[#0f141f] w-[300px] h-screen  flex flex-col items-start px-6 gap-6"> 
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`${
                activeLink === item.href ? "text-cyan-500" : "text-gray-300"
              } hover:bg-cyan-500/10 hover:border border-cyan-400/50 w-full px-2 py-2 rounded-lg text-xl transition-colors duration-300`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href).scrollIntoView({
                  behavior: "smooth",
                });
                closeMobileMenu();
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


