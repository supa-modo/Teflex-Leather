import { useState } from 'react';
import { FaShoppingCart, FaSearch, FaFilter, FaLeaf, FaAward, FaShippingFast } from 'react-icons/fa';
import { TbArrowRight } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  // Filter products based on search term and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
    return 0; // Default to featured (no sorting)
  });

  // Get unique categories from products
  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative bg-gradient-to-b from-espresso to-espresso-dark text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[2%] pointer-events-none mix-blend-overlay">
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat"
            style={{ backgroundImage: "url('/leather-icon.png')" }}
          ></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-8 bg-leather-light/10"></div>
        <div className="absolute top-8 left-0 w-full h-[1px] bg-gradient-to-r from-leather-light/0 via-leather-light/40 to-leather-light/0"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-[15%] right-[10%] w-20 h-20 md:w-32 md:h-32 rounded-full bg-leather/20 backdrop-blur-md"
          animate={{
            y: [0, 30, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-leather-light font-medium tracking-wide uppercase text-xs sm:text-sm md:text-base mb-4 border-b border-leather-light pb-2 text-shadow">
              Handcrafted Excellence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight">
              Our <span className="text-leather-light italic">Premium</span> Products
            </h1>
            <div className="w-24 h-[2px] bg-leather-light/60 mx-auto mb-6"></div>
            <p className="text-cream/80 text-lg font-light leading-relaxed max-w-3xl mx-auto mb-8">
              Discover our collection of handcrafted leather products, made with the finest materials and exceptional craftsmanship that embodies the spirit of East African artistry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern - Leather texture */}
        <div className="absolute inset-0 opacity-[3%] pointer-events-none">
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat"
            style={{ backgroundImage: "url('/leather-icon.png')" }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="w-full lg:w-1/4 hidden lg:block">
              <motion.div 
                className="bg-white rounded-lg shadow-elegant border border-gray-100 p-6 sticky top-24"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold font-display text-charcoal mb-6 pb-2 border-b border-gray-100">Categories</h3>
                <ul className="space-y-2">
                  {categories.map(category => (
                    <li key={category}>
                      <button
                        className={`w-full text-left py-2.5 px-3 transition-colors font-medium ${
                          selectedCategory === category 
                            ? 'bg-leather-default/10 text-leather-dark border-l-2 border-leather-default' 
                            : 'hover:bg-cream/50 text-charcoal/80'
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-bold font-display text-charcoal mb-4">Why Choose Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="text-leather-default mt-1"><FaAward /></div>
                      <div>
                        <h4 className="font-medium text-charcoal">Premium Quality</h4>
                        <p className="text-sm text-charcoal/70">Finest materials, exceptional craftsmanship</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-leather-default mt-1"><FaLeaf /></div>
                      <div>
                        <h4 className="font-medium text-charcoal">Sustainable</h4>
                        <p className="text-sm text-charcoal/70">Ethically sourced materials</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-leather-default mt-1"><FaShippingFast /></div>
                      <div>
                        <h4 className="font-medium text-charcoal">Fast Delivery</h4>
                        <p className="text-sm text-charcoal/70">Quick and secure shipping</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Products */}
            <div className="w-full lg:w-3/4">
              {/* Search and Sort */}
              <motion.div 
                className="mb-8 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Search */}
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:border-leather-default focus:outline-none transition-colors duration-300 shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/40" />
                </div>

                {/* Sort */}
                <div className="min-w-[220px]">
                  <select
                    className="w-full px-4 py-3 border border-gray-200 focus:border-leather-default focus:outline-none transition-colors duration-300 shadow-sm appearance-none bg-white relative"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="featured">Sort by: Featured</option>
                    <option value="price-low">Sort by: Price (Low to High)</option>
                    <option value="price-high">Sort by: Price (High to Low)</option>
                    <option value="name-asc">Sort by: Name (A to Z)</option>
                    <option value="name-desc">Sort by: Name (Z to A)</option>
                  </select>
                  <div className="absolute right-8 top-1/2 transform -translate-y-1/2 pointer-events-none text-charcoal/40">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>

                {/* Mobile Filter Button */}
                <button
                  className="lg:hidden flex items-center justify-center gap-2 px-4 py-3 bg-leather-default text-white shadow-sm hover:bg-leather-dark transition-colors duration-300"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <FaFilter />
                  Filters
                </button>
              </motion.div>

              {/* Mobile Filters */}
              {showFilters && (
                <motion.div 
                  className="mb-8 lg:hidden bg-white rounded-lg shadow-elegant border border-gray-100 p-6"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold font-display text-charcoal mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        className={`py-2 px-4 text-sm transition-colors ${
                          selectedCategory === category 
                            ? 'bg-leather-default text-white' 
                            : 'bg-cream hover:bg-cream/70 text-charcoal'
                        }`}
                        onClick={() => {
                          setSelectedCategory(category);
                          setShowFilters(false);
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Products Grid */}
              {sortedProducts.length > 0 ? (
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {sortedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  className="text-center py-16 bg-cream/30 rounded-lg border border-gray-100"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-leather-default text-5xl mb-4 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-charcoal mb-2">No Products Found</h3>
                  <p className="text-lg text-charcoal/70 mb-6">We couldn't find any products matching your criteria.</p>
                  <button
                    className="px-6 py-3 bg-leather-default text-white hover:bg-leather-dark transition-colors duration-300 font-medium inline-flex items-center gap-2"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                    }}
                  >
                    Clear Filters
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Features Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-leather font-semibold tracking-wider uppercase text-primary-600 text-[0.83rem] md:text-sm mb-3 inline-block">
              Why Choose Our Products
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-5 leading-tight">
              Crafted with Passion
            </h2>
            <div className="w-24 h-[2px] bg-leather-default/60 mx-auto mb-6"></div>
            <p className="text-[0.95rem] md:text-lg text-charcoal/70 font-medium leading-relaxed font-sans">
              Every piece tells a story of heritage and craftsmanship, meticulously handcrafted by our master artisans using traditional techniques passed down through generations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FaLeaf className="w-6 h-6" />}
              title="Sustainable Materials"
              description="We source the finest leather from responsible suppliers, ensuring minimal environmental impact while maintaining exceptional quality."
            />
            <FeatureCard 
              icon={<FaAward className="w-6 h-6" />}
              title="Artisanal Craftsmanship"
              description="Each product is meticulously handcrafted by skilled artisans who bring years of expertise and passion to their work."
            />
            <FeatureCard 
              icon={<FaShippingFast className="w-6 h-6" />}
              title="Timeless Design"
              description="Our designs blend traditional East African elements with contemporary style, creating pieces that are both functional and elegant."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white p-8 rounded-lg shadow-elegant border border-gray-100 hover:shadow-premium group h-full"
    >
      <div className="text-leather text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-4 font-display text-charcoal group-hover:text-leather transition-colors duration-300">
        {title}
      </h3>
      <p className="text-charcoal/70 leading-relaxed font-sans font-medium">
        {description}
      </p>
    </motion.div>
  );
};

const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl, category } = product;

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="h-full"
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-elegant border border-gray-100 hover:shadow-premium transition-all duration-300 group h-full">
        <Link to={`/products/${id}`} className="block relative">
          <div className="h-64 overflow-hidden">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="absolute top-4 left-4">
            <span className="bg-leather-default text-white text-xs font-medium px-3 py-1.5 shadow-sm">
              {category}
            </span>
          </div>
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-white/90 text-leather-dark text-xs font-medium px-3 py-1.5 shadow-sm backdrop-blur-sm flex items-center gap-1">
              View Details <TbArrowRight className="w-3 h-3" />
            </span>
          </div>
        </Link>
        <div className="p-6 border-t border-gray-100">
          <Link to={`/products/${id}`}>
            <h3 className="text-lg font-bold font-display text-charcoal group-hover:text-leather transition-colors duration-300 mb-2">
              {name}
            </h3>
          </Link>
          <div className="flex justify-between items-center mb-4">
            <p className="text-leather-dark font-medium">${price.toFixed(2)}</p>
            <div className="flex items-center gap-1">
              <span className="text-amber-500">★★★★</span>
              <span className="text-amber-300">★</span>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-cream text-leather-dark font-medium hover:bg-leather-default hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-md">
            <FaShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Sample data
const products = [
  {
    id: 1,
    name: "Classic Leather Wallet",
    price: 49.99,
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
  },
  {
    id: 2,
    name: "Premium Leather Shoes",
    price: 129.99,
    category: "Footwear",
    imageUrl: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    name: "Handcrafted Leather Bag",
    price: 159.99,
    category: "Bags",
    imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"
  },
  {
    id: 4,
    name: "Leather Belt",
    price: 39.99,
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1603487742131-4160ec999306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"
  },
  {
    id: 5,
    name: "Leather Jacket",
    price: 249.99,
    category: "Clothing",
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
  },
  {
    id: 6,
    name: "Leather Briefcase",
    price: 179.99,
    category: "Bags",
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 7,
    name: "Leather Gloves",
    price: 59.99,
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1584359983106-ef9586108d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 8,
    name: "Leather Boots",
    price: 149.99,
    category: "Footwear",
    imageUrl: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 9,
    name: "Leather Backpack",
    price: 129.99,
    category: "Bags",
    imageUrl: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

export default ProductsPage;
