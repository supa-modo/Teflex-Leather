import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaArrowUp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaFacebookF
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-espresso relative font-sans">
      {/* Decorative top border */}
      <div className="h-[1px] w-full bg-gradient-to-r from-leather-light/0 via-leather-light/60 to-leather-light/0"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay">
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{ backgroundImage: "url('/leather-icon.png')" }}
        ></div>
      </div>
      
      {/* Decorative Elements - Gold stitching */}
      <div className="absolute top-0 left-0 w-full h-8 bg-leather-light/10"></div>
      <div className="absolute top-8 left-0 w-full h-[1px] bg-gradient-to-r from-leather-light/0 via-leather-light/40 to-leather-light/0"></div>
      
      <div className="pt-20 pb-6 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo/Monogram */}
              <Link to="/" className="inline-block mb-2">
                  
                  <img src="/logo.png" alt="Teflex Logo" className='w-32 md:w-40 h-32 md:h-40 bg-white rounded-xl'/>
                  <div className="text-center mt-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-leather-light/60">Est. 2010</span>
                  </div>
              </Link>
              
              <div className="w-24 h-[1px] bg-leather-light/30 mb-10"></div>
              
              {/* Main Footer Content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mb-12">
                {/* Contact Information */}
                <div className="flex flex-col items-center md:items-start">
                  <h4 className="text-leather-light font-lexend text-base mb-6">Contact Us</h4>
                  <div className="space-y-4">
                    <div className="flex items-center text-cream/70 hover:text-leather-light transition-colors duration-300">
                      <FaMapMarkerAlt className="mr-3 text-leather-light/70" />
                      <span className="text-sm">Kimathi Street, Nairobi, Kenya</span>
                    </div>
                    <a href="tel:+254725500444" className="flex items-center text-cream/70 hover:text-leather-light transition-colors duration-300">
                      <FaPhone className="mr-3 text-leather-light/70" />
                      <span className="text-sm">+254 725 500 444</span>
                    </a>
                    <a href="mailto:info@teflexleather.com" className="flex items-center text-cream/70 hover:text-leather-light transition-colors duration-300">
                      <FaEnvelope className="mr-3 text-leather-light/70" />
                      <span className="text-sm">info@teflexleather.com</span>
                    </a>
                  </div>
                </div>
                
                {/* Quick Links */}
                <div className="flex flex-col items-center">
                  <h4 className="text-leather-light font-lexend text-base mb-6">Quick Links</h4>
                  <div className="flex flex-col space-y-3">
                    <Link to="/brands" className="text-cream/70 hover:text-leather-light text-sm transition-colors duration-300">Collections</Link>
                    <Link to="/about" className="text-cream/70 hover:text-leather-light text-sm transition-colors duration-300">Heritage</Link>
                    <Link to="/contact" className="text-cream/70 hover:text-leather-light text-sm transition-colors duration-300">Contact Us</Link>
                    </div>
                </div>
                
                {/* Newsletter */}
                <div className="flex flex-col items-center md:items-end">
                  <h4 className="text-leather-light font-lexend text-base mb-6">Newsletter</h4>
                  <p className="text-cream/70 text-sm mb-4 text-center md:text-right">Subscribe to receive updates on new collections and exclusive offers.</p>
                  <form className="flex flex-col w-full max-w-xs">
                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full bg-transparent border-b border-leather-light/30 px-4 py-2 text-white placeholder-cream/40 focus:outline-none focus:border-leather-light"
                        required
                      />
                      <button 
                        type="submit" 
                        className="absolute right-0 bottom-2 text-leather-light hover:text-cream transition-colors duration-300"
                      >
                        <FaEnvelope />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-8 mb-6">
                <SocialLink href="https://instagram.com" icon={<FaInstagram size={22}/>} label="Instagram" />
                <SocialLink href="https://facebook.com" icon={<FaFacebook size={22} />} label="Facebook" />
                <SocialLink href="https://twitter.com" icon={<FaXTwitter size={22} />} label="Twitter" />
              </div>
              
              <div className="w-24 h-[1px] font-lexend bg-leather-light/30 mb-8"></div>
              
              <p className="text-cream/40 text-xs text-center max-w-lg">
                &copy; {new Date().getFullYear()} Teflex Leather. All rights reserved. Handcrafted with pride in East Africa.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-10 h-10 bg-leather-light/10 border border-leather-light/30 text-leather-light hover:bg-leather-light hover:text-espresso/70 flex items-center justify-center transition-all duration-300 z-50 group"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="group-hover:scale-110 transition-transform duration-300" />
      </button>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <motion.a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label={label}
    className="text-cream/70 hover:text-leather-light transition-colors duration-300"
    whileHover={{ y: -2 }}
    transition={{ duration: 0.3 }}
  >
    {icon}
  </motion.a>
);

export default Footer;
