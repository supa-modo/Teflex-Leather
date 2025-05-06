import {
  FaLeaf,
  FaHandsHelping,
  FaUsers,
  FaGlobe,
  FaQuoteLeft,
  FaTools,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { TbArrowRight } from "react-icons/tb";
import CallToAction from "../components/CallToAction";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
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
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-40 pb-8 md:pb-14 relative bg-gradient-to-b from-espresso to-espresso/80 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[2%] pointer-events-none mix-blend-overlay">
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat"
            style={{ backgroundImage: "url('/leather-icon.png')" }}
          ></div>
        </div>

        <div className="container mx-auto px-2.5 md:px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-accent-light font-medium tracking-wide uppercase text-xs sm:text-sm md:text-base mb-4 text-shadow">
              Our Heritage
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-4 md:mb-6 leading-tight">
              About{" "}
              <span className="text-leather-light italic">Teflex Leather</span>{" "}
              Gem Africa
            </h1>
            <div className="w-24 h-[2px] bg-leather-light/60 rounded-full mx-auto mb-4 md:mb-6"></div>
            <p className="text-cream/80 text-[0.9rem] md:text-lg font-sans font-light leading-relaxed max-w-3xl mx-auto mb-8">
              Transforming leather, transforming style into timeless elegance
              through exceptional craftsmanship and dedication to quality
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-leather font-semibold tracking-wider uppercase text-primary-600 text-[0.83rem] md:text-sm mb-3 inline-block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-3 md:mb-5 leading-tight">
                A Legacy of Leather Excellence
              </h2>
              <div className="w-16 h-[2px] bg-leather-default/60 mb-6"></div>

              <p className="mb-6 text-charcoal/80 text-[0.95rem] md:text-base font-sans font-medium leading-relaxed">
                Teflex Leather is a dynamic and talented team with a passion to
                turn your vision into reality. We are the definition of bespoke
                leather shoes and accessories, committed to quality and
                craftsmanship.
              </p>

              <div className="relative mb-8 pl-12">
                <FaQuoteLeft className="absolute left-0 top-0 text-leather/30 text-4xl" />
                <p className="text-leather-dark/70 text-[0.93rem] md:text-base italic font-sans font-medium leading-relaxed">
                  "We have a vision to create opportunities and commercialize
                  leather working skills with the greatest focus on quality
                  products that satisfy the needs of our varied consumers of
                  quality leather goods."
                </p>
              </div>

              <p className="text-charcoal/80 text-[0.93rem] md:text-base font-sans font-medium leading-relaxed">
                Our company is local with a mission to satisfy the leather shoes
                and other leather goods demand in the greater East African
                Community. With a population of over 220 Million people mostly
                relying on imported leather products, we intend to tap into this
                potential and grow our manufacturing and fulfill demand for
                quality in our leather shoes and other leather goods.
              </p>

              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/brands")}
                className="mt-8 group bg-leather-default text-white hover:bg-leather-dark px-8 py-3 md:py-4 transition-all duration-300 font-medium tracking-wider text-[0.78rem] md:text-sm uppercase flex items-center justify-center min-w-[200px] shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] relative overflow-hidden"
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img
                src="/male-craft.jpg"
                alt="Leather craftsman at work"
                className="rounded-lg md:rounded-none shadow-premium w-full h-[300px] md:h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-leather text-white border-r border-b border-leather-default/40 p-6 rounded-l-lg shadow-elegant hidden md:block">
                <p className="text-2xl font-bold font-display">15+ Years</p>
                <p>of Excellence</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-leather-light/30 -z-10 hidden md:block"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values & Team*/}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Background Pattern - Leather texture */}
        <div className="absolute inset-0 opacity-[2.7%] pointer-events-none">
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat"
            style={{ backgroundImage: "url('/leather-icon.png')" }}
          ></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-8 md:mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-leather font-semibold tracking-wider uppercase text-primary-600 text-[0.83rem] md:text-sm mb-3 inline-block">
              Our Core Values
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-charcoal mb-3 md:mb-5 leading-tight">
              Principles That Guide Us
            </h2>
            <div className="w-24 h-[2px] bg-leather-default/60 mx-auto mb-6"></div>
            <p className="text-[0.95rem] md:text-lg text-charcoal/70 font-medium leading-relaxed font-sans">
              At Teflex Leather, our values guide everything we do, from
              sourcing materials to crafting products and serving our customers
              with excellence and integrity.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <ValueCard
              icon={<FaLeaf />}
              title="Sustainability"
              description="We are committed to sustainable and ethical sourcing of materials, ensuring our products have minimal environmental impact."
            />
            <ValueCard
              icon={<FaTools />}
              title="Craftsmanship"
              description="We take pride in our expert craftsmanship, blending traditional techniques with modern innovation."
            />
            <ValueCard
              icon={<FaUsers />}
              title="Community"
              description="We believe in creating opportunities and transforming lives through our work, supporting local communities."
            />
            <ValueCard
              icon={<FaGlobe />}
              title="Quality"
              description="We are dedicated to producing the highest quality leather products that exceed customer expectations."
            />
          </motion.div>
        </div>


        <div className="container mx-auto pt-20 px-4">
          <motion.div
            className="text-left mb-8 md:mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-leather font-semibold tracking-wider uppercase text-leather-default text-[0.83rem] md:text-sm mb-3 inline-block">
              Meet Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-3 md:mb-5 leading-tight">
              Visionary Leadership
            </h2>
            <div className="w-24 h-[2px] bg-leather-default/80 rounded-full mb-6"></div>
            <p className="max-w-4xl text-[0.95rem] md:text-lg text-charcoal/70 font-medium leading-relaxed font-sans">
              Meet the talented team behind TEFlex Leather's success, bringing
              together expertise, passion, and dedication to craft exceptional
              leather products.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <TeamMember
              name="Eng. George O. Juma"
              position="Director and CEO"
              bio="George brings a rich engineering background into the manufacture of quality leather shoes and goods. His vision drives our company forward."
              imageUrl="/george-ceo.jpg"
            />
            <TeamMember
              name="Mr. Samson Okiya"
              position="Director - Kenya Operations"
              bio="Mr. Samson Okiya oversees our operations from the Kenyan office working towards ensuring the highest quality standards are maintained."
              imageUrl="samson-dr.jpg"
            />
            <TeamMember
              name="Mr. Edisson Abas Sanga"
              position="Director - Tanzania Operations"
              bio="Mr. Edisson Abas Sanga oversees our production operations from the Tanzania office ensuring the highest quality standards are maintained throughout."
              imageUrl="eddison-dr.jpg"
            />
          </motion.div>
        </div>
      </section>

      {/* Gender Inclusivity */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-espresso to-accent-light text-white relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat"
            style={{ backgroundImage: "url('/leather-texture.png')" }}
          ></div>
        </div>

        <div className="container mx-auto px-3 md:px-4 relative z-10">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src="/lady-craft.jpg"
                  alt="Women working with leather"
                  className="rounded-lg md:rounded-none shadow-premium w-full h-[300px] md:h-[500px] object-cover"
                />

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-accent-light -z-10 hidden md:block"></div>
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-leather-light font-semibold tracking-wider uppercase text-[0.83rem] md:text-sm mb-3 inline-block">
                Empowering Women
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3 md:mb-5 leading-tight">
                Gender Inclusivity
              </h2>
              <div className="w-16 h-[2px] bg-leather-light/60 mb-6"></div>

              <p className="mb-6 text-cream/90 font-sans font-light text-[0.93rem] md:text-base leading-relaxed">
                Traditional cobbling was a male dominated field. This kept off
                women from taking up roles in the production and crafting
                processes associated with shoe crafting. We however realize that
                there is a great potential in the attention to detail that women
                possess.
              </p>
              <p className="mb-6 text-cream/90 font-sans font-light text-[0.93rem] md:text-base leading-relaxed">
                We have therefore deliberately recruited talented and
                underprivileged women into our production. We pride in tapping
                the potential of these women to ascertain quality of our
                products.
              </p>
              <p className="text-cream/90 font-sans font-light text-[0.93rem] md:text-base leading-relaxed">
                Our in-house training aims at creating a conducive environment
                for women to take up challenges in production of quality shoes
                and other leather goods to earn a livelihood. We are the first
                leather crafting entity in the region to incorporate these
                aspects in our production process.
              </p>

              <motion.button
                whileTap={{ scale: 0.97 }}
                className="mt-8 group border border-primary-700 text-leather-dark hover:text-cream px-8 py-4 transition-all duration-300 font-semibold hover:font-medium tracking-wide text-[0.8rem] md:text-sm uppercase flex items-center justify-center min-w-[200px] relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Join Our Mission
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-leather-dark transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

const ValueCard = ({ icon, title, description }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="bg-white p-4 md:p-6 rounded-lg shadow-elegant border border-espresso/40 hover:shadow-premium group h-full"
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

const TeamMember = ({ name, position, bio, imageUrl }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="bg-white rounded-lg overflow-hidden shadow-elegant border border-gray-100 hover:shadow-premium transition-all duration-300 group"
    >
      <div className="h-80 md:h-96 overflow-hidden relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 border-t border-gray-100">
        <h3 className="text-xl font-bold font-display text-charcoal group-hover:text-leather transition-colors duration-300 mb-1">
          {name}
        </h3>
        <p className="text-leather-dark font-medium mb-2 md:mb-4">{position}</p>
        <p className="text-charcoal/70 font-sans text-[0.9rem] md:text-base font-medium">{bio}</p>
      </div>
    </motion.div>
  );
};

export default AboutPage;
