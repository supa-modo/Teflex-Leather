import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaStar } from "react-icons/fa";
import { TbArrowRight, TbArrowLeft } from "react-icons/tb";
import { PiUserDuotone } from "react-icons/pi";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayTimerRef = useRef(null);

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Setup autoplay for mobile only
  useEffect(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }

    if (isMobile && !isAnimating) {
      autoplayTimerRef.current = setInterval(() => {
        handleNext();
      }, 8000);
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isMobile, isAnimating]);

  // Get visible testimonials based on device and current index
  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [activeIndex];
    } else {
      // On desktop, show two testimonials side by side
      return [activeIndex, (activeIndex + 1) % testimonials.length];
    }
  };

  const handleNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex((current) => (current + 1) % testimonials.length);

    // Reset animation flag after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );

    // Reset animation flag after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const handleDotClick = (index) => {
    if (isAnimating || index === activeIndex) return;

    setIsAnimating(true);
    setActiveIndex(index);

    // Reset animation flag after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="pt-20 md:pt-28 bg-gradient-to-b from-espresso to-accent-light text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[1.5%] pointer-events-none mix-blend-overlay">
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{ backgroundImage: "url('/leather-icon.png')" }}
        ></div>
      </div>

     
      <div className="container mx-auto px-2 md:px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-leather font-semibold tracking-wider uppercase text-leather-light text-[0.83rem] md:text-sm mb-3 inline-block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
            The <span className="text-cream italic">Teflex Experience</span>
          </h2>
          <div className="w-24 h-[2px] bg-leather-light mx-auto mb-6"></div>
          <p className="text-cream/80 text-[0.97rem] md:text-lg font-light leading-relaxed max-w-4xl mx-auto">
            Don't just take our word for it, here's what our clients have to say
            about their experience with Teflex Leather's artisanal
            craftsmanship.
          </p>
        </motion.div>

        {/* Testimonials carousel container */}
        <div className="relative">
          {/* Testimonials grid - responsive layout */}
          <div
            className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-8`}
          >
            {visibleTestimonials.map((index) => (
              <motion.div
                key={`testimonial-${index}`}
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1 }}
              >
                <TestimonialCard testimonial={testimonials[index]} />
              </motion.div>
            ))}
          </div>

          {/* Carousel navigation */}
          <div className="flex justify-between items-center px-4 mt-12 max-w-lg mx-auto">
            <button
              onClick={handlePrev}
              disabled={isAnimating}
              className="group bg-leather-default/5 backdrop-blur-sm border border-leather-light w-12 h-12 flex items-center justify-center hover:bg-leather-light text-leather-default hover:text-espresso/60 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            </button>

            <div className="flex items-center gap-2 md:gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  disabled={isAnimating}
                  className={`h-2.5  rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                    visibleTestimonials.includes(index)
                      ? "bg-leather-default w-6"
                      : "bg-cream hover:bg-cream/50 w-2.5"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="group bg-leather-default/5 backdrop-blur-sm border border-leather-light w-12 h-12 flex items-center justify-center hover:bg-leather-light text-leather-default hover:text-espresso/60 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: "James Anderson",
    since: "2020",
    text: "Teflex Leather products have transformed my professional appearance. The quality of their leather briefcases is unmatched, with exceptional durability and a timeless aesthetic that draws compliments wherever I go.",
    imageUrl: "/testimonial1.jpg",
  },
  {
    name: "Sarah Mwangi",
    since: "2019",
    text: "As someone who values craftsmanship, I'm impressed by Teflex's attention to detail. Their leather goods age beautifully, developing a rich patina that tells the story of your journey. Truly East African excellence.",
    imageUrl: "/testimonial2.jpg",
  },
  {
    name: "Captain Robert Ochieng",
    since: "2021",
    text: "In my profession, equipment reliability is non-negotiable. Teflex's tactical leather gear has withstood the harshest conditions while maintaining its integrity and professional appearance. Exceptional quality.",
    imageUrl: "/testimonial3.jpg",
  },
  {
    name: "Elizabeth Wanjiru",
    since: "2018",
    text: "The bespoke leather accessories from Teflex have added a touch of sophistication to my wardrobe. Their commitment to sustainable practices and local craftsmanship makes supporting them an easy choice.",
    imageUrl: "/testimonial4.jpg",
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-neutral-600 backdrop-blur-sm border border-leather-light/20 p-4 md:p-8 relative overflow-hidden h-full">
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-leather-light/60"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-leather-light/60"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-leather-light/60"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-leather-light/60"></div>

      <div className="absolute -top-3 left-4 text-leather-light/30">
        <FaQuoteLeft className="w-16 h-16" />
      </div>

      <div className="flex flex-col h-full relative z-10">
        <div className=" flex justify-end">
          <div className="flex space-x-1 text-leather-light">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-5 h-5" />
            ))}
          </div>
        </div>
        <p className="text-cream font-sans italic text-sm md:text-base mt-6 mb-4 md:mb-8 flex-grow leading-relaxed">
          "{testimonial.text}"
        </p>
        <div className="flex items-center mt-auto pt-3 border-t border-leather-light/20">
          <div className="h-12 md:h-14 w-12 md:w-14 rounded-full bg-leather-light/10 flex items-center justify-center mr-4 border border-leather-light/20 overflow-hidden">
           <PiUserDuotone className="w-6 md:w-7 h-6 md:h-7"/>
          </div>
          <div>
            <h4 className="font-semibold text-xl text-leather-light font-display">
              {testimonial.name}
            </h4>
            <p className="text-cream/60 text-sm font-light">
              Customer since {testimonial.since}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
