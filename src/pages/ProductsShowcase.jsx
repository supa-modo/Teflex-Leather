import { useState, useEffect } from 'react';
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products as allProducts, brands } from "../data/products";

// Import components
import ProductsHero from '../components/products/ProductsHero';
import BrandTabs from '../components/products/BrandTabs';
import ProductGrid from '../components/products/ProductGrid';
import ProductFeatures from "../components/products/ProductFeatures";
import ContactCallToAction from '../components/ContactCallToAction';

const ProductsShowcase = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  // Get unique brands and categories from all products
  const brands = ['All', ...new Set(allProducts.map(product => product.brand))];
  const categories = ['All', ...new Set(allProducts.map(product => product.category))];

  // Filter products whenever filter criteria change
  useEffect(() => {
    const newFilteredProducts = allProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesActiveTab = activeTab === 'all' || product.brand.toLowerCase() === activeTab;
      return matchesSearch && matchesBrand && matchesCategory && matchesActiveTab;
    });
    
    setFilteredProducts(newFilteredProducts);
  }, [searchTerm, selectedBrand, selectedCategory, activeTab]);

  // Handle brand tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (tabName !== 'all') {
      setSelectedBrand(tabName.charAt(0).lowercase() + tabName.slice(1));
    } else {
      setSelectedBrand('All');
    }
  };

  // Handle view brand collection
  const handleViewBrandCollection = (brand) => {
    navigate(`/brands/${brand.toLowerCase()}`);
  };
  
  // Reset filters when component mounts
  useEffect(() => {
    // Reset to initial state when component mounts
    setSearchTerm('');
    setSelectedCategory('All');
    
    // Only set selectedBrand based on activeTab if needed
    if (activeTab !== 'all') {
      setSelectedBrand(activeTab.charAt(0).toUpperCase() + activeTab.slice(1));
    } else {
      setSelectedBrand('All');
    }
    
    // Scroll to top for better UX
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full overflow-x-hidden" key="products-showcase-container">
      {/* Hero Section */}
      <ProductsHero key="products-hero" />

      {/* Brand Tabs Section */}
      <BrandTabs key="brand-tabs" activeTab={activeTab} onTabClick={handleTabClick} />

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
                
                {/* Brand Filter */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold font-display text-charcoal mb-4 pb-2 border-b border-gray-100">Brands</h4>
                  <ul className="space-y-2">
                    {brands.map(brand => (
                      <li key={brand}>
                        <button
                          className={`w-full text-left py-2.5 px-3 transition-colors font-medium ${
                            selectedBrand === brand 
                              ? 'bg-leather-default/10 text-leather-dark border-l-2 border-leather-default' 
                              : 'hover:bg-cream/50 text-charcoal/80'
                          }`}
                          onClick={() => setSelectedBrand(brand)}
                        >
                          {brand}
                        </button>
                      </li>
                    ))}
                  </ul>
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
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
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
                
                {/* Brand Filter */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold font-display text-charcoal mb-4 pb-2 border-b border-gray-100">Brands</h3>
                  <ul className="space-y-2">
                    {brands.map(brand => (
                      <li key={brand}>
                        <button
                          className={`w-full text-left py-2.5 px-3 transition-colors font-medium ${
                            selectedBrand === brand 
                              ? 'bg-leather-default/10 text-leather-dark border-l-2 border-leather-default' 
                              : 'hover:bg-cream/50 text-charcoal/80'
                          }`}
                          onClick={() => setSelectedBrand(brand)}
                        >
                          {brand}
                        </button>
                      </li>
                    ))}
                  </ul>
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
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-display font-bold text-charcoal mb-2">
                  {activeTab === 'all' 
                    ? 'All Collections' 
                    : `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Collection`}
                </h2>
                <div className="w-16 h-[2px] bg-leather-default/60 mb-4"></div>
                <p className="text-charcoal/70">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} available
                </p>
              </motion.div>

              {/* Products Grid */}
              <ProductGrid 
                key="products-grid"
                products={filteredProducts} 
                onViewBrandCollection={handleViewBrandCollection}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Call To Action */}
      <ContactCallToAction />
    </div>
  );
};



export default ProductsShowcase;
