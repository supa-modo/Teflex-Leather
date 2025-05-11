import { Link, useNavigate } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { motion } from "framer-motion";
import { TbArrowRight } from "react-icons/tb";
import {
  FaLeaf,
  FaShieldAlt,
  FaHandHolding,
  FaGlobeAfrica,
} from "react-icons/fa";
import ContactCallToAction from "../components/ContactCallToAction";

const BrandsPage = () => {

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-40 pb-8 relative bg-gradient-to-b from-espresso to-espresso/80 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[2%] pointer-events-none mix-blend-overlay">
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat"
            style={{ backgroundImage: "url('/leather-icon.png')" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-accent-light font-medium tracking-wide uppercase text-xs sm:text-sm md:text-base mb-4 text-shadow">
              Discover Excellence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-4 md:mb-5 leading-tight">
              Our <span className="text-leather-light italic">Premium</span>{" "}
              Brands
            </h1>
            <div className="w-24 h-[2px] bg-leather-light/60 rounded-full mx-auto mb-6"></div>
            <p className="text-cream/80 text-[0.9rem] md:text-lg font-sans font-light leading-relaxed max-w-3xl mx-auto mb-8">
              Discover our collection of premium leather brands, each with its
              own unique heritage and character, meticulously crafted with
              exceptional attention to detail and quality for discerning
              professionals and connoisseurs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-4 md:py-16 bg-white relative overflow-hidden">
        {/* Background Pattern - Leather texture */}
        <div className="absolute inset-0 opacity-[3%] pointer-events-none">
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat"
            style={{ backgroundImage: "url('/leather-icon.png')" }}
          ></div>
        </div>

        <div className="container mx-auto px-2.5 md:px-4">
          {brands.map((brand, index) => (
            <BrandSection
              key={brand.id}
              brand={brand}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Our Brands Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-espresso/80 to-charcoal text-white relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[2%] pointer-events-none mix-blend-overlay">
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat"
            style={{ backgroundImage: "url('/leather-icon.png')" }}
          ></div>
        </div>

        <div className="container mx-auto px-2.5 md:px-4 relative z-10">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-left mb-8 md:mb-14">
              <span className="inline-block text-leather-light font-serif italic text-lg mb-4">
                Artisanal Excellence
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 md:mb-5 leading-tight">
                Why Choose{" "}
                <span className="text-leather-light italic">
                  Teflex Leather
                </span>{" "}
                Brands
              </h3>
              <div className="w-24 h-[2px] bg-leather-light/60 mb-6"></div>
              <p className="text-cream/80 text-[0.93rem] md:text-lg font-light leading-relaxed max-w-4xl">
                Our leather goods are sought after by professionals who demand
                both functionality and sophistication, trusted by official
                personnel, security officers, military personnel, and business
                professionals across East Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {brandFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-neutral-600 backdrop-blur-sm border border-leather-light/20 p-6 md:p-8 relative overflow-hidden h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-leather-light/30"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-leather-light/30"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-leather-light/30"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-leather-light/30"></div>

                  <div className="flex items-center justify-center mb-3">
                    <div className="bg-leather-light mr-2 md:mr-4 w-fit text-espresso p-3 rounded-full flex-shrink-0 shadow-[0_4px_10px_0_rgba(0,0,0,0.3)] ">
                      {feature.icon}
                    </div>

                    <h4 className="font-display font-semibold text-leather-light text-xl text-center">
                      {feature.title}
                    </h4>
                  </div>
                  <div className="w-12 h-[2px] bg-leather-light/40 rounded-full mx-auto mb-4"></div>
                  <p className="text-cream/90 font-light leading-relaxed text-center">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Call To Action */}
      <ContactCallToAction />
    </div>
  );
};

const BrandSection = ({ brand, reverse }) => {
  const navigate = useNavigate();
  const {
    id,
    name,
    description,
    tagline,
    longDescription,
    imageUrl,
    products,
  } = brand;

  return (
    <div className={`py-10 md:py-16 ${reverse ? "bg-cream/30" : ""}`}>
      <div className="container mx-auto">
        <motion.div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={`${reverse ? "order-1 lg:order-2" : ""}`}
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-leather font-semibold tracking-wider uppercase text-primary-600 text-[0.83rem] md:text-sm mb-2 md:mb-3 inline-block">
              Premium Collection
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-2 md:mb-3 leading-tight">
              {name}
            </h2>
            <div className="w-16 h-[2px] bg-leather-default/60 mb-6"></div>
            <p className="text-leather-dark/90 font-medium italic mb-4 md:mb-6">
              {tagline}
            </p>
            <p className="mb-6 text-charcoal/80 text-[0.93rem] md:text-base font-sans font-medium leading-relaxed">
              {description}
            </p>
            <p className="mb-8 text-charcoal/70 text-[0.93rem] md:text-base font-sans font-medium leading-relaxed">
              {longDescription}
            </p>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(`/brands/${id}`)}
              className="group bg-leather-default text-white hover:bg-leather-dark px-8 py-4 transition-all duration-300 font-medium tracking-wider text-xs md:text-sm uppercase flex items-center justify-center min-w-[200px] shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] relative overflow-hidden"
            >
              <span className="relative inline-flex items-center z-10">
                Explore {name} Collection
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 md:h-5 w-4 md:w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
              <span className="absolute inset-0 bg-leather-dark transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            </motion.button>
          </motion.div>
          <motion.div
            className={`${reverse ? "order-2 lg:order-1" : ""}`}
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src={imageUrl}
                alt={name}
                className="rounded-lg md:rounded-none shadow-premium w-full h-[300px] md:h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-leather text-white border-r border-b border-leather-default/40 p-6 rounded-l-lg shadow-elegant hidden md:block">
                <p className="text-2xl font-bold font-display">
                  {products.length}+
                </p>
                <p>Products</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// const ProductCard = ({ product }) => {
//   const { id, name, price, imageUrl } = product;

//   return (
//     <Link to={`/products/${id}`} className="group">
//       <motion.div
//         className="bg-white rounded-lg overflow-hidden shadow-elegant border border-gray-100 hover:shadow-premium transition-all duration-300 h-full"
//         whileHover={{ y: -5 }}
//         transition={{ duration: 0.3 }}
//       >
//         <div className="h-56 overflow-hidden relative">
//           <img
//             src={imageUrl}
//             alt={name}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//         </div>
//         <div className="p-5 border-t border-gray-100">
//           <h4 className="font-display font-bold text-charcoal group-hover:text-leather transition-colors text-lg mb-2">{name}</h4>
//           <div className="flex justify-between items-center">
//             <p className="text-leather-dark font-medium">${price.toFixed(2)}</p>
//             <span className="text-leather-light text-sm font-medium group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100 flex items-center gap-1">
//               View <TbArrowRight />
//             </span>
//           </div>
//         </div>
//       </motion.div>
//     </Link>
//   );
// };

// Brand features
const brandFeatures = [
  {
    title: "Heritage Quality",
    icon: <FaShieldAlt className="w-5 h-5" />,
    description:
      "Our products are crafted with meticulous attention to detail, using time-honored techniques passed down through generations.",
  },
  {
    title: "Sustainable Sourcing",
    icon: <FaLeaf className="w-5 h-5" />,
    description:
      "We ethically source our materials from responsible suppliers, ensuring minimal environmental impact.",
  },
  {
    title: "Artisan Crafted",
    icon: <FaHandHolding className="w-5 h-5" />,
    description:
      "Each piece is handcrafted by skilled artisans who bring years of expertise and passion to their work.",
  },
  {
    title: "East African Heritage",
    icon: <FaGlobeAfrica className="w-5 h-5" />,
    description:
      "Our designs celebrate the rich cultural heritage of East Africa, blending traditional elements with contemporary style.",
  },
];

// Sample data
const brands = [
  {
    id: "theboy",
    name: "TheBOY",
    link: "/brands/theboy",
    tagline: "Bring out the boy in every male",
    description:
      "Bespoke Leather Products uniquely designed with the boy in mind.",
    longDescription:
      "Our wallets, belts, loafers and custom men's shoes bring out the boy in every male. TheBOY collection combines playful sophistication with masculine elegance, creating leather goods that make a statement.",
    imageUrl: "shoe-2.jpg",
    products: [
      {
        id: 401,
        name: "Leather Wallet",
        price: 49.99,
        imageUrl: "shoe-3.jpg",
      },
      {
        id: 402,
        name: "Leather Belt",
        price: 39.99,
        imageUrl: "shoe-4.jpg",
      },
      {
        id: 403,
        name: "Leather Loafers",
        price: 119.99,
        imageUrl: "shoe-5.jpg",
      },
      {
        id: 404,
        name: "Leather Card Holder",
        price: 29.99,
        imageUrl: "shoe-1.jpg",
      },
    ],
  },
  {
    id: "karavan",
    name: "KARAVAN",
    link: "/brands/karavan",
    tagline: "Affordability and style",
    description:
      "Leather shoes designs that meet the robust application while maintaining elegance and style.",
    longDescription:
      "Karavan is one of our off the shelf shoes that infuse unmatched style and quality. Our Karavan brand represents the perfect blend of durability and sophistication, designed for the modern professional who values both comfort and appearance.",
    imageUrl: "shoe-6.jpg",
    products: [
      {
        id: 101,
        name: "Classic Oxford Shoes",
        price: 129.99,
        imageUrl: "shoe-6.jpg",
      },
      {
        id: 102,
        name: "Leather Loafers",
        price: 119.99,
        imageUrl: "shoe-6.jpg",
      },
      {
        id: 103,
        name: "Formal Derby Shoes",
        price: 139.99,
        imageUrl: "shoe-6.jpg",
      },
      {
        id: 104,
        name: "Casual Leather Boots",
        price: 149.99,
        imageUrl: "shoe-6.jpg",
      },
    ],
  },
  {
    id: "noella",
    name: "NOELLA",
    link: "/brands/noella",
    tagline: "Good doesn't have to be out of your reach",
    description:
      "Leather goods and accessories such as bags, pouches, straps etc., crafted from high-quality genuine leather.",
    longDescription:
      "The products in this range are designed and produced on order. Each Noella piece is a testament to our commitment to quality and craftsmanship, offering luxury that is accessible without compromising on excellence.",
    imageUrl: "shoe-6.jpg",
    products: [
      {
        id: 201,
        name: "Leather Tote Bag",
        price: 159.99,
        imageUrl: "shoe-6.jpg",
      },
      {
        id: 202,
        name: "Leather Clutch",
        price: 89.99,
        imageUrl: "shoe-6.jpg",
      },
      {
        id: 203,
        name: "Leather Crossbody Bag",
        price: 129.99,
        imageUrl: "shoe-6.jpg",
      },
      {
        id: 204,
        name: "Leather Briefcase",
        price: 179.99,
        imageUrl: "shoe-6.jpg",
      },
    ],
  },
  {
    id: "nachuchi",
    name: "NaCHUCHI",
    link: "/brands/nachuchi",
    tagline: "Bring out the sweetness in comfort",
    description:
      "Robust and durable products with a greater focus on functionality.",
    longDescription:
      "Comfort and style infused into a durable product. Our NaCHUCHI line is designed for those who need reliable leather goods that can withstand daily use while maintaining their aesthetic appeal and comfort.",
    imageUrl: "shoe-6.jpg",
    products: [
      {
        id: 301,
        name: "Leather Work Boots",
        price: 169.99,
        imageUrl: "shoe-6.jpg",
      },
      {
        id: 302,
        name: "Leather Backpack",
        price: 129.99,
        imageUrl: "shoe-6.jpg",
      },
      {
        id: 303,
        name: "Leather Travel Bag",
        price: 199.99,
        imageUrl: "shoe-6.jpg",
      },
      {
        id: 304,
        name: "Leather Work Gloves",
        price: 59.99,
        imageUrl: "shoe-6.jpg",
      },
    ],
  },
  
];

export default BrandsPage;
