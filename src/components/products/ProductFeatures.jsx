import { FaAward, FaLeaf, FaShippingFast } from 'react-icons/fa';

const ProductFeatures = () => {
  return (
    <div className="mt-8 pt-6 border-t border-gray-100">
      <h3 className="text-xl font-bold font-display text-charcoal mb-4">Craftsmanship</h3>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="text-leather-default mt-1"><FaAward /></div>
          <div>
            <h4 className="font-medium text-charcoal">Premium Quality</h4>
            <p className="text-sm text-charcoal/70">Finest materials, exceptional craftsmanship</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="text-leather-default mt-1"><FaLeaf /></div>
          <div>
            <h4 className="font-medium text-charcoal">Sustainable</h4>
            <p className="text-sm text-charcoal/70">Ethically sourced materials</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="text-leather-default mt-1"><FaShippingFast /></div>
          <div>
            <h4 className="font-medium text-charcoal">Bespoke Service</h4>
            <p className="text-sm text-charcoal/70">Custom designs available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
