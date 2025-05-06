import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TbArrowRight } from "react-icons/tb";
import { FaEnvelope } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="py-28 md:py-36 bg-gradient-to-b from-accent-light to-accent-dark relative overflow-hidden">
      {/* Background Pattern - Leather texture */}
      <div className="absolute inset-0 opacity-[2%] pointer-events-none mix-blend-overlay">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-repeat" 
          style={{ backgroundImage: "url('/leather-icon.png')" }}
        ></div>
      </div>
      
     
      <div className="container mx-auto px-2 md:px-4 relative z-10">
        <div className="max-w-screen-2xl mx-auto">
          {/* Main CTA Section */}
          <div className="relative shadow-xl">
             
            <div className="py-16 md:py-20 px-3 md:px-16 bg-leather-dark/80 backdrop-blur-md border border-leather-light/20 shadow-[0_10px_50px_-12px_rgba(0,0,0,0.5)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="inline-block text-leather-light font-display italic font-medium  text-xl mb-4">Artisanal Excellence Since 2010</span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
                    Experience the <span className="text-leather-light italic">Timeless Elegance</span> of East African Leather 
                  </h2>
                  <div className="w-24 h-[2px] bg-leather-light/60 mx-auto lg:mx-0 mb-6"></div>
                  <p className="text-cream/90 text-[0.95rem] md:text-lg font-light font-sans leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                    Each piece tells a story of heritage and craftsmanship, meticulously handcrafted by our master artisans using traditional techniques passed down through generations.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center lg:justify-start">
                    <Link 
                      to="/collections" 
                      className="group bg-leather-light text-espresso-dark hover:bg-cream px-8 py-4 transition-all duration-300 font-semibold md:font-medium  tracking-wide text-xs md:text-sm uppercase flex items-center justify-center min-w-[200px] shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] relative overflow-hidden"
                    >
                      <span className="relative z-10">Explore Collection</span>
                      <span className="absolute inset-0 bg-cream transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                    </Link>
                    <Link 
                      to="/bespoke" 
                      className="group border border-leather-light/60 text-leather-light hover:text-cream px-8 py-4 transition-all duration-300 font-semibold md:font-medium tracking-wide text-xs md:text-sm uppercase flex items-center justify-center min-w-[200px] relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">Bespoke Services <TbArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" /></span>
                      <span className="absolute inset-0 bg-leather-dark transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                    </Link>
                  </div>
                </motion.div>
                
                {/* Right side image or form */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="bg-leather-dark/70 backdrop-blur-sm border border-leather-light/30 px-4 py-8 md:p-10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-display font-bold text-leather-light mb-2">Join Our Exclusive Circle</h3>
                      <p className="text-cream/80 font-sans text-[0.93rem] md:text-base font-light">Be the first to receive updates on limited editions, private events, and artisan insights.</p>
                    </div>
                    
                    <form className="space-y-5 font-sans">
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="Your Name" 
                          className="w-full px-5 py-3 md:py-4 text-[0.9rem] md:text-base bg-espresso-dark/50 border border-leather-light/30 text-white placeholder-cream/40 focus:outline-none focus:border-leather-light transition-colors duration-300"
                          required
                        />
                      </div>
                      <div className="relative">
                        <input 
                          type="email" 
                          placeholder="Your Email Address" 
                          className="w-full px-5 py-3 md:py-4 text-[0.9rem] md:text-base bg-espresso-dark/50 border border-leather-light/30 text-white placeholder-cream/40 focus:outline-none focus:border-leather-light transition-colors duration-300"
                          required
                        />
                        <FaEnvelope className="absolute right-5 top-1/2 -translate-y-1/2 text-leather-light/50" />
                      </div>
                      <div className="relative">
                        <select 
                          className="w-full text-[0.93rem] md:text-base px-5 py-3 md:py-4 bg-espresso-dark/50 border border-leather-light/30 text-accent-light focus:outline-none focus:border-leather-light transition-colors duration-300 appearance-none"
                          required
                        >
                          <option value="" disabled selected>Interests</option>
                          <option value="footwear">Leather Footwear</option>
                          <option value="accessories">Accessories</option>
                          <option value="bespoke">Bespoke Services</option>
                          <option value="all">All Products</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-leather-light/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </div>
                      <button 
                        type="submit" 
                        className="w-full bg-leather-light hover:bg-leather text-espresso-dark font-semibold  tracking-wider text-[0.8rem] md:text-sm uppercase py-3 md:py-4 transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.2)]"
                      >
                        Subscribe
                      </button>
                    </form>
                    
                    <div className="mt-6 text-center">
                      <p className="text-cream/50 text-xs font-light">By subscribing, you agree to our Privacy Policy and consent to receive updates from Teflex Leather.</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-leather-light/30 -z-10"></div>
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-leather-light/30 -z-10"></div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Testimonial snippet */}
          <motion.div 
            className="mt-10 md:mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="inline-block bg-leather-dark/60 backdrop-blur-sm px-8 py-6 border-t border-b border-leather-light/30">
              <p className="text-cream/90 font-serif italic text-lg md:text-xl">"The epitome of luxury and craftsmanship in East African leather goods."</p>
              <div className="mt-3 text-leather-light text-[0.9rem] md:text-base font-sans font-medium">— African Luxury Magazine</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
