import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaHeart, FaEye, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState('all');
  const sliderRef = useRef(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredProducts(featuredProducts);
    } else {
      setFilteredProducts(featuredProducts.filter(product => product.category.toLowerCase() === activeTab));
    }
  }, [activeTab]);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'footwear', name: 'Footwear' },
    { id: 'bags', name: 'Bags' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'clothing', name: 'Clothing' }
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-leather font-medium tracking-wider uppercase text-sm mb-3 inline-block">Premium Collection</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-6 leading-tight">Featured Products</h2>
          <p className="text-lg text-charcoal/80 leading-relaxed">
            Discover our handcrafted leather products, made with the finest materials and exceptional craftsmanship that embodies luxury and durability.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12 gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === category.id ? 'bg-leather text-white shadow-elegant' : 'bg-cream hover:bg-leather/10 text-charcoal'}`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Products Slider */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredProducts.length > 0 ? (
            <>
              <Slider ref={sliderRef} {...sliderSettings} className="product-slider">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="px-3 pb-6">
                    <ProductCard product={product} />
                  </div>
                ))}
              </Slider>
              
              {/* Navigation Arrows */}
              <div className="flex justify-center mt-10 gap-4">
                <button 
                  onClick={goToPrev}
                  className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-charcoal hover:bg-leather hover:text-white transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <FaArrowLeft />
                </button>
                <button 
                  onClick={goToNext}
                  className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-charcoal hover:bg-leather hover:text-white transition-all duration-300"
                  aria-label="Next slide"
                >
                  <FaArrowRight />
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-charcoal/70">No products found in this category.</p>
            </div>
          )}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link 
            to="/products" 
            className="inline-flex items-center bg-leather hover:bg-leather-dark text-white px-8 py-4 rounded-md transition-all duration-300 font-medium tracking-wide text-sm uppercase group"
          >
            View All Collection
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl, category } = product;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-elegant transition-all duration-500 hover:shadow-premium h-full"
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link to={`/products/${id}`} className="block relative">
        <div className="h-80 overflow-hidden">
          <motion.img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-leather text-white text-xs font-medium px-3 py-1.5 rounded-full uppercase tracking-wide">
            {category}
          </span>
        </div>
        
        {/* Quick Action Buttons */}
        <motion.div 
          className="absolute right-4 top-4 flex flex-col gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
        >
          <button className="w-10 h-10 rounded-full bg-white shadow-elegant flex items-center justify-center text-charcoal hover:text-leather transition-colors duration-300">
            <FaHeart className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white shadow-elegant flex items-center justify-center text-charcoal hover:text-leather transition-colors duration-300">
            <FaEye className="w-4 h-4" />
          </button>
        </motion.div>
      </Link>
      <div className="p-6">
        <div className="mb-6">
          <Link to={`/products/${id}`}>
            <h3 className="text-xl font-bold text-charcoal mb-2 hover:text-leather transition-colors duration-300 font-display">
              {name}
            </h3>
          </Link>
          <p className="text-leather font-medium">${price.toFixed(2)}</p>
        </div>
        <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-cream text-charcoal font-medium rounded-md hover:bg-leather hover:text-white transition-all duration-300 uppercase text-sm tracking-wide">
          <FaShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

// Sample data
const featuredProducts = [
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
    name: "Designer Leather Boots",
    price: 199.99,
    category: "Footwear",
    imageUrl: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
  },
  {
    id: 8,
    name: "Leather Card Holder",
    price: 29.99,
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1606503825008-909a67e63c3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

export default FeaturedProducts;
