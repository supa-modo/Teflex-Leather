import { motion } from "framer-motion";
import { TbArrowNarrowRight } from "react-icons/tb";

const ProductGrid = ({ products, onViewBrandCollection }) => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewBrandCollection={onViewBrandCollection}
          />
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-charcoal/70 text-sm md:text-base lg:text-lg">
            No products found matching your criteria !
          </p>
        </div>
      )}
    </motion.div>
  );
};

const ProductCard = ({ product, onViewBrandCollection }) => {
  const { id, name, description, imageUrl, brand, category } = product;

  return (
    <motion.div
      className="group bg-white border border-espresso/20 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }}
    >
      {/* Kingsman-inspired decorative elements */}
      <div className="absolute top-4 left-4 w-8 h-8 border border-leather-light/30 transform rotate-45 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border border-leather-light/30 transform rotate-45 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Product Image */}
      <div className="relative h-[260px] overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Brand Badge */}
        <div className="absolute top-4 right-4 bg-leather-dark/80 text-leather-light text-xs font-medium py-1 px-3 backdrop-blur-sm">
          {brand}
        </div>

        {/* View Brand Collection Button */}
        <button
          onClick={() => onViewBrandCollection(brand)}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-leather-light text-espresso-dark text-xs uppercase tracking-wider font-medium py-2 px-4 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
        >
          View {brand} Collection
          <TbArrowNarrowRight className="ml-2" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-display font-bold text-charcoal group-hover:text-leather-dark transition-colors duration-300">
            {name}
          </h3>
          <span className="text-xs font-medium text-leather-light/80 border border-leather-light/30 px-2 py-0.5">
            {category}
          </span>
        </div>
        <p className="text-charcoal/70 text-sm line-clamp-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProductGrid;
