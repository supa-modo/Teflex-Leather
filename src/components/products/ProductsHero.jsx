import { motion } from "framer-motion";

const ProductsHero = () => {
  return (
    <section className="pt-32 pb-10 lg:pb-16 relative bg-gradient-to-b from-espresso to-espresso/80 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[2%] pointer-events-none mix-blend-overlay">
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{ backgroundImage: "url('/leather-icon.png')" }}
        ></div>
      </div>

      {/* Kingsman-inspired decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-leather-light/20 transform rotate-45 hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-leather-light/20 transform rotate-45 hidden md:block"></div>

      <div className="container mx-auto px-2.5 md:px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-leather-light font-medium tracking-wide uppercase text-xs sm:text-sm md:text-base mb-4 border-b border-leather-light pb-2 text-shadow">
            Refined Collection
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight">
            Teflex{" "}
            <span className="text-leather-light italic">Leather Gem</span>{" "}
            Collection
          </h1>
          <p className="text-cream/80 text-sm md:text-base lg:text-lg font-sans leading-relaxed max-w-3xl mx-auto mb-8">
            Discover our exclusive collection of handcrafted leather products,
            where timeless elegance meets modern sophistication.
          </p>

          {/* Kingsman-inspired decorative elements */}
          <div className="flex justify-center items-center gap-8 mt-8 md:mt-12">
            <div className="w-16 h-[1px] bg-leather-light/40"></div>
            <div className="w-8 h-8 border border-leather-light/40 transform rotate-45"></div>
            <div className="w-16 h-[1px] bg-leather-light/40"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsHero;
