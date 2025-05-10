import { motion } from 'framer-motion';

const BrandTabs = ({ activeTab, onTabClick }) => {
  return (
    <section className="py-8 bg-cream/50 border-b border-leather-light/10 sticky top-16 z-20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto hide-scrollbar space-x-1 md:space-x-4 justify-center">
          <TabButton 
            label="All Collections" 
            active={activeTab === 'all'} 
            onClick={() => onTabClick('all')} 
          />
          <TabButton 
            label="Karavan" 
            active={activeTab === 'karavan'} 
            onClick={() => onTabClick('karavan')} 
          />
          <TabButton 
            label="NaChuchi" 
            active={activeTab === 'nachuchi'} 
            onClick={() => onTabClick('nachuchi')} 
          />
          <TabButton 
            label="Savanna" 
            active={activeTab === 'savanna'} 
            onClick={() => onTabClick('savanna')} 
          />
          <TabButton 
            label="Kingsman" 
            active={activeTab === 'kingsman'} 
            onClick={() => onTabClick('kingsman')} 
          />
        </div>
      </div>
    </section>
  );
};

const TabButton = ({ label, active, onClick }) => {
  return (
    <motion.button
      className={`whitespace-nowrap px-4 py-3 font-medium text-sm transition-colors duration-300 relative ${
        active 
          ? 'text-leather-dark' 
          : 'text-charcoal/70 hover:text-leather-default'
      }`}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
    >
      {label}
      {active && (
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-leather-default"
          layoutId="activeTab"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </motion.button>
  );
};

export default BrandTabs;
