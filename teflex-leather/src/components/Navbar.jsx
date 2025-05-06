import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaShoppingBag, FaSearch } from "react-icons/fa";
import {
  TbArrowRight,
  TbBuildingWarehouse,
  TbHome2,
  TbMenu2,
  TbX,
} from "react-icons/tb";
import { PiWarehouse, PiWarehouseBold } from "react-icons/pi";
import { AiFillProduct, AiOutlineProduct } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setIsMenuOpen(false);
    }
  };

  const NavLink = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
      <Link
        to={to}
        className={`relative text-[1.1rem] font-medium py-2 ${
          isActive ? "text-leather-default font-semibold" : ""
        } ${isScrolled ? " hover:text-primary-500" : "hover:text-primary-400"}`}
      >
        {children}
        {isActive && (
          <motion.div
            layoutId="navbar-underline"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-leather"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 pt-1 md:pt-0 transition-all duration-500  font-lexend ${
        isScrolled || isMenuOpen
          ? "bg-white/95 backdrop-blur-sm shadow-elegant"
          : "bg-transparent md:py-3"
      }`}
    >
      <div className="lg:mx-14 mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="logo.png" alt="Logo" className="w-[5.6rem] h-[5.6rem]" />
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-leather-default font-display tracking-wide flex flex-col leading-6"
          >
            <span
              className={`${
                isScrolled ? "text-leather-dark" : "text-accent-light"
              }`}
            >
              Teflex
            </span>
            <span
              className={`ml-4 ${
                isScrolled ? "text-leather-default" : "text-leather-light"
              }  `}
            >
              Leather
            </span>
          </motion.span>
        </Link>

        <div className="flex items-center space-x-6">
          {/* Desktop Navigation */}
          <nav
            className={`hidden lg:flex items-center space-x-8 transition-colors duration-300 ${
              isScrolled ? "text-charcoal " : "text-cream"
            }`}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/brands">Our Brands</NavLink>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* <button
              onClick={toggleSearch}
              className="text-charcoal hover:text-leather transition-colors duration-300 focus:outline-none"
              aria-label="Search"
            >
              <FaSearch className="w-5 h-5" />
            </button>
            <Link
              to="/cart"
              className="text-charcoal hover:text-leather transition-colors duration-300 relative"
              aria-label="Shopping cart"
            >
              <FaShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-leather text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link> */}
            <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/contact")}
                  className={`group ${
                    isScrolled
                      ? "bg-leather-dark hover:bg-accent-default text-white "
                      : "bg-cream hover:bg-leather-dark text-leather-dark hover:text-white font-semibold"
                  } px-6 py-2.5 transition-all duration-300 tracking-wider text-[0.9rem] flex items-center justify-center shadow-md relative overflow-hidden`}
                >
                  <span className="relative inline-flex items-center z-10">
                    Contact Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                  <span className={`absolute inset-0 ${isScrolled ? "bg-accent-default" : "bg-leather-dark"} transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`}></span>
                </motion.button>
            
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 lg:hidden">
          {/* <button
            onClick={toggleSearch}
            className="text-charcoal focus:outline-none"
            aria-label="Search"
          >
            <FaSearch className="w-5 h-5" />
          </button>
          <Link
            to="/cart"
            className="text-charcoal relative"
            aria-label="Shopping cart"
          >
            <FaShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-leather text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </Link> */}
          <button
            className={`${
              isScrolled ? "text-neutral-600" : "text-primary-200"
            } focus:outline-none mb-4`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <TbX className="w-8 h-8" />
            ) : (
              <TbMenu2 className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {/* <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-elegant"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-leather focus:border-transparent"
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <button
                  onClick={toggleSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-leather"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-elegant overflow-hidden"
          >
            <div className="container mx-auto px-4 py-5 space-y-2">
              <MobileNavLink to="/">
                <div className="flex items-center space-x-2.5">
                  <TbHome2 size={22} />
                  <span>Home</span>
                </div>
              </MobileNavLink>
              <MobileNavLink to="/about">
                {" "}
                <div className="flex items-center space-x-2.5">
                  <PiWarehouseBold size={22} />
                  <span>About Us</span>
                </div>
              </MobileNavLink>
              <MobileNavLink to="/products">
                {" "}
                <div className="flex items-center space-x-2.5">
                  <AiFillProduct size={22} />
                  <span>Products</span>
                </div>
              </MobileNavLink>
              <MobileNavLink to="/brands">
                {" "}
                <div className="flex items-center space-x-2.5">
                  <img
                    src="/leather-icon.png"
                    alt=""
                    className="w-[1.18rem] mr-3"
                  />
                  <span>Our Brands</span>
                </div>
              </MobileNavLink>
              <div className="pt-4 border-t border-gray-100">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate("/contact")}
                  className={`block w-full group bg-leather-dark hover:bg-accent-default text-white px-5 py-2.5  transition-colors duration-300 text-sm `}
                >
                  <div className="flex items-center justify-center">
                    <span>Contact Us</span>
                    <TbArrowRight className="ml-2 group-hover:translate-x-1.5 transition-all duration-300" />
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const MobileNavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`block text-base font-medium transition-colors duration-300 py-2 border-b border-gray-100 ${
        isActive ? "text-leather" : "text-charcoal hover:text-leather"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
