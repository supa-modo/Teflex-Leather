import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TbArrowLeft } from "react-icons/tb";
import { FaArrowLeft } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section className="py-20 min-h-screen flex items-center relative bg-gradient-to-b from-espresso to-espresso/70 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[2%] pointer-events-none mix-blend-overlay">
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{ backgroundImage: "url('/leather-icon.png')" }}
        ></div>
      </div>
    
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-block">
              <span className="text-[10rem] md:text-[15rem] font-bold font-display text-leather-light/20 leading-none">404</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-6xl md:text-8xl font-bold font-display text-leather-light">404</h1>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">Page Not Found</h2>
            <div className="w-24 h-[2px] bg-leather-light/60 mx-auto mb-6"></div>
            <p className="text-[0.93rem] md:text-lg text-cream/80 mb-8 max-w-2xl mx-auto font-sans">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link to="/" className="group bg-leather-light hover:bg-leather-dark px-8 py-4 transition-all duration-300 font-medium tracking-wider text-[0.8rem] md:text-sm uppercase flex items-center justify-center min-w-[200px] shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <FaArrowLeft className="mr-3 group-hover:-translate-x-1 transition-transform duration-300" />
                  Return to Homepage
                </span>
                <span className="absolute inset-0 bg-leather-dark transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500"></span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
