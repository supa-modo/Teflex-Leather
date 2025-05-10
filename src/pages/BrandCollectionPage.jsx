import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa';
import { TbArrowRight } from "react-icons/tb";
import CallToAction from '../components/CallToAction';
import ContactCallToAction from '../components/ContactCallToAction';
import ProductGrid from '../components/products/ProductGrid';
import ProductFeatures from '../components/products/ProductFeatures';
import { products as allProducts, brands } from "../data/products";

const BrandCollectionPage = () => {
  const { brandId } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [brandData, setBrandData] = useState(null);
  const [brandProducts, setBrandProducts] = useState([]);

  // Using brands data imported from products.jsx

  useEffect(() => {
    // Get brand data based on URL parameter
    const normalizedBrandId = brandId.toLowerCase();
    const brand = brands[normalizedBrandId];
    
    if (brand) {
      setBrandData(brand);
      
      // Filter products for this brand
      const filteredProducts = allProducts.filter(product => 
        product.brand.toLowerCase() === normalizedBrandId
      );
      setBrandProducts(filteredProducts);
      
      // Reset search and category filters when brand changes
      setSearchTerm('');
      setSelectedCategory('All');
    } else {
      // Handle invalid brand ID
      navigate('/products');
    }
    
    // Clean up function to prevent memory leaks
    return () => {
      // Reset states when component unmounts
      setBrandData(null);
      setBrandProducts([]);
    };
  }, [brandId, navigate]);

  // Filter products based on search term and category
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Get unique categories from brand products
  const categories = ['All', ...new Set(brandProducts.map(product => product.category))];
  
  // Update filtered products when search term, category, or brand products change
  useEffect(() => {
    const newFilteredProducts = brandProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    
    setFilteredProducts(newFilteredProducts);
  }, [searchTerm, selectedCategory, brandProducts]);

  if (!brandData) {
    return <div className="pt-32 text-center">Loading...</div>;
  }

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className={`pt-32 pb-20 relative ${brandData.accentColor} text-white overflow-hidden`}>
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
        
        {/* Kingsman-inspired decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-leather-light/20 transform rotate-45 hidden md:block"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-leather-light/20 transform rotate-45 hidden md:block"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-leather-light font-medium tracking-wide uppercase text-xs sm:text-sm md:text-base mb-4 border-b border-leather-light pb-2 text-shadow">
              Brand Collection
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight">
              The <span className="text-leather-light italic">{brandData.name}</span> Collection
            </h1>
            <div className="w-24 h-[2px] bg-leather-light/60 mx-auto mb-6"></div>
            <p className="text-cream/80 text-lg font-light leading-relaxed max-w-3xl mx-auto mb-8">
              {brandData.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={brandData.heroImage} 
                alt={brandData.name} 
                className="w-full h-[400px] object-cover rounded-sm shadow-premium"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-leather-light/30 -z-10 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-leather-light/30 -z-10 hidden md:block"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-leather-default font-semibold tracking-wider uppercase text-[0.83rem] md:text-sm mb-2 inline-block">
                {brandData.tagline}
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4 leading-tight">
                About the {brandData.name} Collection
              </h2>
              <div className="w-16 h-[2px] bg-leather-default/60 mb-6"></div>
              
              <p className="text-charcoal/80 text-[0.93rem] md:text-base font-sans font-medium leading-relaxed mb-8">
                {brandData.longDescription}
              </p>
              
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/products')}
                className="group bg-leather-default text-white hover:bg-leather-dark px-8 py-4 transition-all duration-300 font-medium tracking-wider text-xs md:text-sm uppercase flex items-center justify-center shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] relative overflow-hidden"
              >
                <span className="relative inline-flex items-center z-10">
                  Explore All Collections
                  <TbArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-leather-dark transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Pattern - Leather texture */}
        <div className="absolute inset-0 opacity-[3%] pointer-events-none">
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat"
            style={{ backgroundImage: "url('/leather-icon.png')" }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4">
          {/* Mobile Filters Button */}
          <div className="lg:hidden mb-6">
            <button 
              onClick={() => setShowMobileFilters(true)}
              className="flex items-center justify-center w-full py-3 px-4 bg-cream border border-leather-light/20 text-charcoal font-medium rounded-sm"
            >
              <FaFilter className="mr-2" />
              Filters
            </button>
          </div>

          {/* Mobile Filters Sidebar */}
          {showMobileFilters && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/50" onClick={() => setShowMobileFilters(false)}></div>
              <div className="absolute right-0 top-0 bottom-0 w-[80%] max-w-md bg-white shadow-xl p-6 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold font-display text-charcoal">Filters</h3>
                  <button 
                    onClick={() => setShowMobileFilters(false)}
                    className="text-charcoal/60 hover:text-charcoal"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>
                
                {/* Search */}
                <div className="relative mb-8">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:border-leather-default focus:outline-none transition-colors duration-300 shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/40" />
                </div>
                
                {/* Category Filter */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold font-display text-charcoal mb-4 pb-2 border-b border-gray-100">Categories</h4>
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
                </div>
                
                <div className="pt-6 border-t border-gray-100">
                  <button 
                    onClick={() => setShowMobileFilters(false)}
                    className="w-full bg-leather-default text-white py-3 font-medium rounded-sm"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="w-full lg:w-1/4 hidden lg:block">
              <motion.div 
                className="bg-white rounded-sm shadow-elegant border border-gray-100 p-6 sticky top-32"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Search */}
                <div className="relative mb-8">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:border-leather-default focus:outline-none transition-colors duration-300 shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/40" />
                </div>
                
                {/* Category Filter */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold font-display text-charcoal mb-4 pb-2 border-b border-gray-100">Categories</h3>
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
                </div>
                
                {/* Product Features */}
                <ProductFeatures />
              </motion.div>
            </div>

            {/* Products Grid */}
            <div className="w-full lg:w-3/4">
              {/* Collection Title */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-display font-bold text-charcoal mb-2">
                  {brandData.name} Products
                </h2>
                <div className="w-16 h-[2px] bg-leather-default/60 mb-4"></div>
                <p className="text-charcoal/70">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                </p>
              </motion.div>

              {/* Products Grid */}
              <ProductGrid 
                products={filteredProducts} 
                onViewBrandCollection={() => {}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Call To Action */}
      <ContactCallToAction />
      
      {/* Newsletter Call To Action */}
      <CallToAction />
    </div>
  );
};

export default BrandCollectionPage;
