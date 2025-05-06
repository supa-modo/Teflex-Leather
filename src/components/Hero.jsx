import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const constraintsRef = useRef(null);
  const navigate = useNavigate();
  const [currentBg, setCurrentBg] = useState(0);

  // Background images for carousel
  const bgImages = [
    "/shoe-9.jpg",
    "/shoe-01.jpg",
    "/shoe-2.jpg",
    "/shoe-8.jpg",
    "/shoe-02.jpg",
  ];

  // Auto-slide background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 7000); // Change every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Carousel with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/95 to-espresso/80 z-10"></div>

      {/* Carousel Background Images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentBg}
          className="absolute inset-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url('${bgImages[currentBg]}')`,
            backgroundPosition: "center 30%",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
        ></motion.div>
      </AnimatePresence>

      {/* Additional overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Floating Elements */}
      <div
        ref={constraintsRef}
        className="absolute inset-0 z-10 overflow-hidden"
      >
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
      </div>

      {/* Content */}
      <div className="container mx-auto px-3 md:px-4 relative z-20 text-white max-w-screen flex flex-col min-h-[100vh">
        <div className="flex flex-col lg:flex-row gap-8 items-start flex-grow py-16 md:py-20">
          {/* Left Content Column */}
          <div className="text-shadow-lg lg:w-[50%] mt-14 lg:mt-16 pl-0 md:pl-16 flex flex-col">
            <div className="pt-12 md:pt-16 pb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-2 md:mb-4"
              >
                <span className="inline-block text-leather-light font-medium tracking-wide  uppercase text-xs sm:text-sm md:text-base mb-2 md:mb-4 border-b border-leather-light pb-2 text-shadow">
                  Teflex Leather Gem Africa
                </span>
              </motion.div>

              <motion.h1
                className="text-[2.1rem] md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6 md:mb-8 text-shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="block">Transforming Leather with</span>
                <span className="block">
                  Unrivaled{" "}
                  <span className="text-leather-light">
                    Craftsmanship & Style
                  </span>
                </span>
              </motion.h1>

              <motion.p
                className="text-[0.92rem] sm:text-base md:text-lg mb-12 md:mb-10 text-white font-light font-sans leading-7 md:leading-8 text-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Handcrafted leather products of exceptional quality, designed
                with precision and passion. Experience the artistry of East
                African leather craftsmanship that combines tradition with
                modern elegance.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 md:gap-5 justify-center md:justify-start mb-8 md:mb-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/brands")}
                  className="w-full md:w-auto group bg-leather-default text-white hover:bg-leather-dark px-8 py-4 transition-all duration-300 font-medium tracking-wider text-xs md:text-sm uppercase flex items-center justify-center min-w-[200px] shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] relative overflow-hidden"
                >
                  <span className="relative inline-flex items-center z-10">
                    Explore Collection
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
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/about")}
                  className="w-full md:w-auto group text-white hover:bg-cream/10 border-2 border-cream hover:backdrop-blur-sm hover:border-primary-500 px-8 py-4 transition-all duration-300 font-medium tracking-wider text-xs md:text-sm uppercase flex items-center justify-center min-w-[200px] shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] relative overflow-hidden"
                >
                  <span className="relative inline-flex items-center z-10">
                    Learn More
                   
                  </span>
                  <span className="absolute inset-0 bg-cream/10 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Right Content Column - Elegant Leather Showcase */}
          <div className="hidden lg:block relative lg:w-[50%] h-[350px] md:h-[450px] lg:h-[550px] lg:mt-24 overflow-hidden">
            {/* Elegant Leather Emblem */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Outer Circle */}
              <motion.div
                className="relative w-[80%] h-[80%] rounded-full border border-leather-light/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                {/* Inner Circle */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] rounded-full border border-leather-light/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                >
                  {/* Diagonal Lines */}
                  <div className="absolute inset-0">
                    {/* Top-left to bottom-right */}
                    <motion.div
                      className="absolute top-0 left-0 w-full h-[1px] bg-leather-light/10 origin-top-left"
                      initial={{ rotate: 0, opacity: 0 }}
                      animate={{ rotate: 45, opacity: 1 }}
                      transition={{ duration: 1.2, delay: 0.4 }}
                    ></motion.div>

                    {/* Top-right to bottom-left */}
                    <motion.div
                      className="absolute top-0 right-0 w-full h-[1px] bg-leather-light/10 origin-top-right"
                      initial={{ rotate: 0, opacity: 0 }}
                      animate={{ rotate: -45, opacity: 1 }}
                      transition={{ duration: 1.2, delay: 0.5 }}
                    ></motion.div>
                  </div>

                  {/* Central Emblem */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    {/* Stylized 'T' Logo with Glow Effect */}
                    <motion.div
                      className="relative h-[80%] w-[2px] bg-gradient-to-b from-leather-light/0 via-leather-light to-leather-light/0 drop-shadow-[0_0_5px_rgba(211,169,126,0.8)] filter blur-[0.2px]"
                      initial={{ scaleY: 0 }}
                      animate={{
                        scaleY: 1,
                        filter: ["blur(0.2px)", "blur(0.5px)", "blur(0.2px)"],
                      }}
                      transition={{
                        scaleY: { duration: 0.8, delay: 0.8 },
                        filter: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <motion.div
                        className="absolute top-[20%] left-1/2 h-[2px] w-[45px] -translate-x-1/2 bg-gradient-to-r from-leather-light/0 via-leather-light to-leather-light/0 drop-shadow-[0_0_5px_rgba(211,169,126,0.8)] filter blur-[0.2px]"
                        initial={{ scaleX: 0 }}
                        animate={{
                          scaleX: 1,
                          filter: ["blur(0.2px)", "blur(0.5px)", "blur(0.2px)"],
                        }}
                        transition={{
                          scaleX: { duration: 0.8, delay: 1 },
                          filter: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                          },
                        }}
                      ></motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Orbital Elements */}
                <div className="absolute inset-0">
                  {/* Orbital Text - Top */}
                  <motion.div
                    className="absolute top-[5%] left-1/2 -translate-x-1/2 text-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    <span className="text-leather-light text-xs uppercase tracking-[0.25em] font-light">
                      Craftsmanship
                    </span>
                  </motion.div>

                  {/* Orbital Text - Right */}
                  <motion.div
                    className="absolute top-1/2 right-[5%] -translate-y-1/2 text-center"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                  >
                    <span className="text-leather-light text-xs uppercase tracking-[0.25em] font-light">
                      Heritage
                    </span>
                  </motion.div>

                  {/* Orbital Text - Bottom */}
                  <motion.div
                    className="absolute bottom-[5%] left-1/2 -translate-x-1/2 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                  >
                    <span className="text-leather-light text-xs uppercase tracking-[0.25em] font-light">
                      Excellence
                    </span>
                  </motion.div>

                  {/* Orbital Text - Left */}
                  <motion.div
                    className="absolute top-1/2 left-[5%] -translate-y-1/2 text-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                  >
                    <span className="text-leather-light text-xs uppercase tracking-[0.25em] font-light">
                      Quality
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top Left */}
              <motion.div
                className="absolute top-[10%] left-[10%] w-[60px] h-[60px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <div className="absolute top-0 left-0 w-[1px] h-[30px] bg-gradient-to-b from-leather-light/80 to-leather-light/0"></div>
                <div className="absolute top-0 left-0 h-[1px] w-[30px] bg-gradient-to-r from-leather-light/80 to-leather-light/0"></div>
              </motion.div>

              {/* Top Right */}
              <motion.div
                className="absolute top-[10%] right-[10%] w-[60px] h-[60px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.7 }}
              >
                <div className="absolute top-0 right-0 w-[1px] h-[30px] bg-gradient-to-b from-leather-light/80 to-leather-light/0"></div>
                <div className="absolute top-0 right-0 h-[1px] w-[30px] bg-gradient-to-l from-leather-light/80 to-leather-light/0"></div>
              </motion.div>

              {/* Bottom Left */}
              <motion.div
                className="absolute bottom-[10%] left-[10%] w-[60px] h-[60px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                <div className="absolute bottom-0 left-0 w-[1px] h-[30px] bg-gradient-to-t from-leather-light/80 to-leather-light/0"></div>
                <div className="absolute bottom-0 left-0 h-[1px] w-[30px] bg-gradient-to-r from-leather-light/80 to-leather-light/0"></div>
              </motion.div>

              {/* Bottom Right */}
              <motion.div
                className="absolute bottom-[10%] right-[10%] w-[60px] h-[60px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.9 }}
              >
                <div className="absolute bottom-0 right-0 w-[1px] h-[30px] bg-gradient-to-t from-leather-light/80 to-leather-light/0"></div>
                <div className="absolute bottom-0 right-0 h-[1px] w-[30px] bg-gradient-to-l from-leather-light/80 to-leather-light/0"></div>
              </motion.div>
            </div>

            {/* Established Date */}
            <motion.div
              className="absolute bottom-[5%] left-1/2 -translate-x-1/2 z-50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="h-[1px] w-[40px] bg-gradient-to-r from-leather-light/0 via-leather-light/60 to-leather-light/0"></div>
                <span className="text-leather-light text-xs uppercase tracking-[0.3em] font-light">
                  Est. 2010
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stylish Stats Section - Positioned at the bottom */}
      <motion.div
        className="absolute bottom-3 md:bottom-20 left-0 z-20 w-full px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className=" mx-auto">
          <div className="lg:w-[45%] pl-0 md:pl-8">
            <div className="grid grid-cols-3 gap-1.5 md:gap-6 border-t border-leather-light/20 pt-4 w-full">
              {/* Stat 1 */}
              <div className="text-center">
                <motion.span
                  className="block text-xl md:text-2xl lg:text-3xl font-bold text-leather-light"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  15+
                </motion.span>
                <span className="text-[0.6rem] md:text-xs uppercase tracking-wider text-cream/80 mt-1">
                  Years Experience
                </span>
              </div>

              {/* Stat 2 */}
              <div className="text-center border-x border-leather-light/20 px-1.5 md:px-2">
                <motion.span
                  className="block text-xl md:text-2xl lg:text-3xl font-bold text-leather-light"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  100%
                </motion.span>
                <span className="text-[0.6rem] md:text-xs uppercase tracking-wider text-cream/80 mt-1">
                  Genuine Leather
                </span>
              </div>

              {/* Stat 3 */}
              <div className="text-center">
                <motion.span
                  className="block text-xl md:text-2xl lg:text-3xl font-bold text-leather-light"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  10k+
                </motion.span>
                <span className="text-[0.6rem] md:text-xs uppercase tracking-wider text-cream/80 mt-1">
                  Satisfied Clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="hidden lg:flex absolute bottom-2 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="w-0.5 h-6 md:h-8 bg-cream/40"
          animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
