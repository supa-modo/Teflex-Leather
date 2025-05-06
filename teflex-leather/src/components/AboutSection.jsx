import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLeaf, FaHandsHelping, FaTools, FaQuoteLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-2.5 md:px-4">
        <motion.div
          className="max-w-3xl mx-auto mb-8 md:mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <span className="text-leather font-semibold tracking-wider uppercase text-primary-600 text-[0.83rem] md:text-sm mb-3 inline-block">
            Our Heritage
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-5 leading-tight">
            Crafting Excellence in Every Detail
          </h2>
          <p className="text-[0.95rem] md:text-lg text-charcoal/70 font-medium leading-relaxed font-sans">
            We have a vision to create opportunities and commercialize leather
            working skills with the greatest focus on quality products that
            satisfy the needs of our varied consumers of quality leather goods.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <FeatureCard
            icon={<FaTools />}
            title="Artisanal Craftsmanship"
            description="Our skilled artisans meticulously handcraft each item, ensuring every stitch and cut meets our rigorous quality standards."
          />
          <FeatureCard
            icon={<FaLeaf />}
            title="Sustainable Sourcing"
            description="Our products incorporate environmental and social sustainability in sourcing of raw materials and production processes."
          />
          <FeatureCard
            icon={<FaHandsHelping />}
            title="Bespoke Design"
            description="Our design team collaborates with clients to create unique, tailor-made leather products designed through the lenses of the customer."
          />
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="/male-craft.jpg"
                alt="Leather craftsman at work"
                className="rounded-lg md:rounded-none shadow-premium w-full h-[300px] md:h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-leather text-white border-r border-b border-leather-default/40 p-6 rounded-l-lg shadow-elegant hidden md:block">
                <p className="text-2xl font-bold font-display">15+ Years</p>
                <p>of Excellence</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-leather font-semibold tracking-wider uppercase text-primary-600 text-[0.83rem] md:text-sm mb-1 inline-block">
              Our Story
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-6 leading-tight">
              Timeless Elegance through Quality Craftsmanship
            </h3>

            <div className="relative mb-8 pl-12">
              <FaQuoteLeft className="absolute left-0 top-0 text-leather/30 text-4xl" />
              <p className="text-leather-dark/70 text-[0.93rem] md:text-base italic font-sans font-medium leading-relaxed">
                "Merging precision engineering with traditional craftsmanship
                has allowed us to create leather goods of exceptional quality.
                Our artisans transform East Africa's finest hides—sourced from
                responsibly raised livestock—into timeless pieces that honor
                both heritage and innovation."
              </p>
              <p className="mt-4 font-sans text-[0.93rem] md:text-base font-medium text-charcoal/90">
                — Eng. George O Juma, Founder & Master Craftsman
              </p>
            </div>

            <p className="text-charcoal/80 font-sans font-medium mb-6 leading-relaxed">
              Deeply rooted in East Africa, Teflex Leather stands as a guardian
              of traditional craftsmanship while embracing modern techniques. We
              serve a community of over 220 million people across the East
              African region—a market that has long relied on imported leather
              goods. Our mission transcends mere manufacturing; we aim to
              elevate local artisanship, creating products that reflect our
              commitment to excellence, sustainability, and cultural heritage.
              Each piece that leaves our workshop carries with it the
              distinctive character of East African leather and the unmistakable
              mark of master craftsmanship.
            </p>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/about")}
                className="group bg-leather-default text-white hover:bg-leather-dark px-8 py-4 transition-all duration-300 font-medium tracking-wider text-sm uppercase flex items-center justify-center min-w-[200px] shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] relative overflow-hidden"
              >
                <span className="relative inline-flex items-center z-10">
                  Discover Our Journey{" "}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="bg-white p-5 md:p-8 rounded-lg shadow-elegant border border-gray-100 hover:shadow-premium group h-full"
    >
      <div className="text-leather text-4xl mb-3 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 font-display text-charcoal group-hover:text-leather transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm md:text-base text-charcoal/70 leading-relaxed font-sans font-medium">
        {description}
      </p>
    </motion.div>
  );
};

export default AboutSection;
