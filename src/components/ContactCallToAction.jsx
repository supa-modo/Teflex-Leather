import React from "react";
import { motion } from "framer-motion";
import {
  TbArrowRight,
  TbPhone,
  TbMail,
  TbMapPin,
  TbCalendarTime,
  TbPhoneCall,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import { PiMapPinAreaBold } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";

const ContactCallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Classic leather workshop background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-espresso to-charcoal">
        {/* Overlay texture */}
        <div className="absolute inset-0 opacity-[3%] mix-blend-overlay">
          <div
            className="absolute inset-0 bg-repeat"
            style={{ backgroundImage: "url('/leather-icon.png')" }}
          ></div>
        </div>

        {/* Classic decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-leather-light/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-leather-light/30 to-transparent"></div>

        {/* Elegant corner embellishments */}
        <div className="absolute top-4 md:top-6 lg:top-8 left-4 md:left-6 lg:left-8 w-16 h-16 border-t border-l border-leather-light/30"></div>
        <div className="absolute top-4 md:top-6 lg:top-8 right-4 md:right-6 lg:right-8 w-16 h-16 border-t border-r border-leather-light/30"></div>
        <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 left-4 md:left-6 lg:left-8 w-16 h-16 border-b border-l border-leather-light/30"></div>
        <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 right-4 md:right-6 lg:right-8 w-16 h-16 border-b border-r border-leather-light/30"></div>
      </div>

      <div className="container mx-auto px-2.5 md:px-4 relative z-10">
        {/* Centered heading with classic typography */}
        <motion.div
          className="text-center mb-8 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1 bg-leather-light/10 text-leather-light text-[0.65rem] md:text-xs tracking-widest uppercase rounded-sm mb-4">
            Artisan Consultation
          </span>
          <h2 className="text-[1.65rem] md:text-5xl font-display font-bold text-white mb-4 leading-tight">
            Experience{" "}
            <span className="text-leather-light italic">Bespoke</span>{" "}
            Craftsmanship
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-leather-light/40"></div>
            <div className="mx-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-leather-light"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8V16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 12H16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="h-px w-12 bg-leather-light/40"></div>
          </div>
          <p className="text-cream/80 font-sans text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover the art of personalized leather crafting with our master
            artisans. Schedule a private consultation to bring your vision to
            life.
          </p>
        </motion.div>

        {/* Classic three-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 lg:mb-16">
          {/* Visit Our Workshop */}
          <motion.div
            className="bg-charcoal/40 backdrop-blur-sm border border-leather-light/10 p-6 md:p-8 rounded-sm relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-leather-light/0 via-leather-light to-leather-light/0 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

            <h3 className="flex items-center text-xl md:text-2xl font-display font-bold text-white mb-2 md:mb-3">
              <PiMapPinAreaBold size={36} className="mr-4" />
              <span>Visit Our Workshop</span>
            </h3>
            <p className="text-cream/70 mb-4 font-sans text-sm md:text-base leading-relaxed">
              Experience our craftsmanship firsthand at our workshop in Nairobi.
              Watch our artisans at work and feel the quality of our materials.
            </p>
            <div className="text-cream text-sm md:text-base font-medium font-sans mb-6">
              123 Craftsman Way, Nairobi
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center text-sm md:text-base font-medium text-leather-light hover:text-leather-light/80 transition-colors duration-300 group"
            >
              <span>Book a Visit</span>
              <TbArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Book a Consultation */}
          <motion.div
            className="bg-leather-default/20 backdrop-blur-sm border border-leather-light/20 p-6 md:p-8 rounded-sm relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-leather-light/0 via-leather-light to-leather-light/0 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

            <h3 className="flex items-center text-xl md:text-2xl font-display font-bold text-white mb-2 md:mb-3">
              <TbCalendarTime size={36} className="mr-4" />
              <span>Private Consultation</span>
            </h3>
            <p className="text-cream/70 mb-4 font-sans text-sm md:text-base leading-relaxed">
              Schedule a one-on-one session with our master craftsmen to discuss
              your custom leather piece requirements.
            </p>
            <div className="text-cream text-sm md:text-base font-medium font-sans mb-6">
              Available Monday-Saturday
            </div>
            <Link
              to="/appointment"
              className="inline-flex items-center text-sm md:text-base font-medium text-leather-light hover:text-leather-light/80 transition-colors duration-300 group"
            >
              <span>Schedule Now</span>
              <TbArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            className="bg-charcoal/40 backdrop-blur-sm border border-leather-light/10 p-6 md:p-8 rounded-sm relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-leather-light/0 via-leather-light to-leather-light/0 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <h3 className="flex items-center text-xl md:text-2xl font-display font-bold text-white mb-2 md:mb-3">
              <TbPhoneCall size={36} className="mr-4" />
              <span>Speak With Us </span>
            </h3>
            <p className="text-cream/70 mb-4 font-sans text-sm md:text-base leading-relaxed">
              Have questions about our products or services? Our team is ready
              to assist you with any inquiries. Call Us on
            </p>
            <div className="text-cream text-sm md:text-base font-medium font-lexend mb-6">
              +254 712 345 678
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center text-sm md:text-base font-medium text-leather-light hover:text-leather-light/80 transition-colors duration-300 group"
            >
              <span>Get in Touch</span>
              <TbArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Classic CTA button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-2.5 md:py-3.5 bg-leather-light text-charcoal font-sans font-semibold tracking-tight rounded-sm hover:bg-leather-light/90 transition-colors duration-300 shadow-elegant relative overflow-hidden group"
          >
            <span className="relative z-10 text-sm md:text-base">Request Custom Order</span>
            <FaArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300 text-espresso/80 z-10" />
            <div className="absolute inset-0 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCallToAction;
