import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaLeaf,
  FaShieldAlt,
  FaHandHolding,
  FaGlobeAfrica,
} from "react-icons/fa";
import { TbArrowRight } from "react-icons/tb";

const BrandsSection = () => {
  const [hoveredBrand, setHoveredBrand] = useState(null);

  return (
    <section className="py-24 md:py-28 bg-white relative overflow-hidden">
      {/* Background Pattern - Leather texture */}
      <div className="absolute inset-0 opacity-[3%] pointer-events-none ">
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{ backgroundImage: "url('/leather-icon.png')" }}
        ></div>
      </div>

      {/* Decorative Elements - Gold stitching */}
      <div className="absolute top-0 left-0 w-full h-8 bg-leather-light/10"></div>
      <div className="absolute top-8 left-0 w-full h-[1px] bg-gradient-to-r from-leather-light/0 via-leather-light/40 to-leather-light/0"></div>

      <div className="container mx-auto px-2.5 md:px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto mb-8 md:mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-leather font-semibold tracking-wider uppercase text-primary-600 text-[0.83rem] md:text-sm mb-1 inline-block">
            Exclusive Collections
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-espresso mb-3 leading-tight">
            Our{" "}
            <span className="text-leather font-display italic">Premium</span>{" "}
            Brands
          </h2>
          <div className="w-24 h-[2px] bg-leather-default/60 mx-auto mb-4"></div>
          <p className="text-espresso/80 text-[0.97rem] md:text-lg font-light leading-relaxed max-w-4xl mx-auto">
            Discover our collection of premium leather brands, each with its own
            unique heritage and character, meticulously crafted with exceptional
            attention to detail and quality for discerning professionals and
            connoisseurs.
          </p>
        </motion.div>

        {/* Featured Collections */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredBrand(index)}
                onMouseLeave={() => setHoveredBrand(null)}
                className="relative group"
              >
                <BrandCard brand={brand} isHovered={hoveredBrand === index} />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/brands"
              className="group bg-leather-light text-espresso-dark hover:bg-cream px-8 py-4 transition-all duration-300 font-medium tracking-wide text-[0.8rem] md:text-sm uppercase flex items-center justify-center mx-auto max-w-xs shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Explore All Collections{" "}
                <TbArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 bg-cream transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            </Link>
          </motion.div>
        </div>

        {/* Why Choose Our Brands Section */}
        <div className="relative py-20 md:py-28 bg-gradient-to-b from-espresso to-espresso-dark text-white overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-leather-light/40"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-leather-light/40"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-leather-light/40"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-leather-light/40"></div>

          {/* Background texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
            <div
              className="absolute top-0 left-0 w-full h-full bg-repeat"
              style={{ backgroundImage: "url('/leather-texture.png')" }}
            ></div>
          </div>

          {/* Decorative Elements - Gold stitching */}
          <div className="absolute top-0 left-0 w-full h-8 bg-leather-light/10"></div>
          <div className="absolute top-8 left-0 w-full h-[1px] bg-gradient-to-r from-leather-light/0 via-leather-light/40 to-leather-light/0"></div>

          <div className="container mx-auto px-2.5 md:px-4 relative z-10">
            <motion.div
              className="max-w-7xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-8 md:mb-14">
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
                <div className="w-24 h-[2px] bg-leather-light/60 mx-auto mb-6"></div>
                <p className="text-cream/80 text-[0.93rem] md:text-lg font-light leading-relaxed max-w-4xl mx-auto">
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
                    className="bg-primary-900/80 backdrop-blur-sm border border-leather-light/20 p-6 md:p-8 relative overflow-hidden h-full"
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
        </div>
      </div>
    </section>
  );
};

const BrandCard = ({ brand, isHovered }) => {
  const { name, description, imageUrl, link, tag } = brand;

  return (
    <div className="h-full bg-white overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)] border border-leather-light/20 transition-all duration-300 relative group">
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-leather-light/40 z-10"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-leather-light/40 z-10"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-leather-light/40 z-10"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-leather-light/40 z-10"></div>

      <div className="relative overflow-hidden h-64">
        <motion.img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full p-5 text-white z-10">
          <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-leather-light transition-colors duration-300">
            {name}
          </h3>
        </div>
      </div>
      <div className="p-5 md:p-7 bg-white">
        <p className="text-espresso/80 font-light leading-relaxed mb-6 line-clamp-3 text-base">
          {description}
        </p>
        <Link
          to={link}
          className="inline-flex items-center text-leather font-medium text-[0.8rem] md:text-sm uppercase md:tracking-wide hover:text-espresso transition-colors gap-2 group border-b border-leather/30 pb-1 hover:border-espresso"
        >
          <span>Discover Collection</span>
          <motion.span
            className="inline-block"
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowRight className="text-xs" />
          </motion.span>
        </Link>
      </div>
    </div>
  );
};

// Brand features
const brandFeatures = [
  {
    title: "Heritage Quality",
    description:
      "Our leather is sourced from the finest East African livestock, processed using traditional methods that preserve its natural beauty and durability for generations to come.",
    icon: <FaLeaf className="h-5 w-5" />,
  },
  {
    title: "Professional Grade",
    description:
      "Trusted by security officers, military personnel, and business professionals who demand reliability, sophistication, and uncompromising excellence in their leather goods.",
    icon: <FaShieldAlt className="h-5 w-5" />,
  },
  {
    title: "Artisanal Mastery",
    description:
      "Each piece is meticulously handcrafted by skilled artisans who have perfected their craft over generations, ensuring exceptional attention to detail and timeless elegance.",
    icon: <FaHandHolding className="h-5 w-5" />,
  },
  {
    title: "Ethical Sourcing",
    description:
      "We're committed to ethical sourcing and environmentally responsible production methods that honor our East African heritage while preserving resources for future generations.",
    icon: <FaGlobeAfrica className="h-5 w-5" />,
  },
];

// Sample data
const brands = [
  {
    name: "KARAVAN",
    description:
      "Elegant and sophisticated leather accessories for the modern traveler. Each piece is designed with functionality and style in mind, perfect for those who appreciate the finer things in life.",
    imageUrl: "/shoe-9.jpg",
    link: "/brands/karavan",
    tag: "Professional",
  },
  {
    name: "NOELLA",
    description:
      "Feminine and chic leather goods designed for the contemporary woman. NOELLA combines timeless elegance with modern sensibilities to create pieces that are both beautiful and practical.",
    imageUrl: "shoe-3.jpg",
    link: "/brands/noella",
    tag: "Luxury",
  },
  {
    name: "NaCHUCHI",
    description:
      "Bold and vibrant leather creations that make a statement. NaCHUCHI is for those who dare to be different, with unique designs and eye-catching colors that reflect individuality and confidence.",
    imageUrl: "/shoe-11.jpg",
    link: "/brands/nachuchi",
    tag: "Tactical",
  },
  {
    name: "TheBOY",
    description:
      "Rugged and durable leather products for the modern man. TheBOY combines traditional craftsmanship with contemporary design to create pieces that are built to last and improve with age.",
    imageUrl: "shoe-8.jpg",
    link: "/brands/theboy",
    tag: "Military Grade",
  },
];

// Client logos - using more professional placeholder URLs
const clientLogos = [
  "https://placehold.co/200x80/f8f5f0/8B5A2B?text=MINISTRY+OF+DEFENSE&font=playfair",
  "https://placehold.co/200x80/f8f5f0/8B5A2B?text=EAST+AFRICAN+AIRWAYS&font=playfair",
  "https://placehold.co/200x80/f8f5f0/8B5A2B?text=ROYAL+SAFARI+CLUB&font=playfair",
  "https://placehold.co/200x80/f8f5f0/8B5A2B?text=NAIROBI+GRAND+HOTEL&font=playfair",
  "https://placehold.co/200x80/f8f5f0/8B5A2B?text=SERENGETI+ENTERPRISES&font=playfair",
];

export default BrandsSection;
