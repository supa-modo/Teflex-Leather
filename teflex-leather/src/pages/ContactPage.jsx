import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaChevronDown,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaArrowRight,
  FaFacebookF,
} from "react-icons/fa";
import {FaLinkedinIn, FaXTwitter} from "react-icons/fa6";
import { TbArrowRight, TbMailFilled, TbPhoneCall, TbSend } from "react-icons/tb";
import {PiMapPinAreaBold} from "react-icons/pi";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set isSubmitting to true to show loading state
    setIsSubmitting(true);

    // In a real application, you would send the form data to a server
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setFormStatus("success");
      setIsSubmitting(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus(null);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1000); // Simulate network delay
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-10 relative bg-gradient-to-b from-espresso to-espresso/80 text-white overflow-hidden">
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
            <span className="inline-block text-accent-light font-medium tracking-wide uppercase text-xs sm:text-sm md:text-base mb-2 md:mb-4 pb-2 text-shadow">
              Get In Touch
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-3 md:mb-5 leading-tight">
              Contact <span className="text-leather-light italic">Us</span>
            </h1>
            <div className="w-24 h-[2px] bg-leather-light/60 mx-auto mb-4 md:mb-6"></div>
            <p className="text-cream/80 text-[0.9rem] md:text-lg font-sans font-light leading-relaxed max-w-3xl mx-auto mb-8">
              We'd love to hear from you. Reach out to us with any questions,
              inquiries, or custom orders. Our team is ready to provide you with
              exceptional service and craftsmanship.
            </p>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 text-leather-light hover:text-leather transition-colors duration-300"
              >
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaChevronDown />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Background Pattern - Leather texture */}
        <div className="absolute inset-0 opacity-[2.5%] pointer-events-none">
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat"
            style={{ backgroundImage: "url('/leather-icon.png')" }}
          ></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ContactCard
                  icon={<TbPhoneCall className="w-8 h-8" />}
                  title="Phone"
                  details={["+254 725 500 444"]}
                  action={{
                    text: "Call Us",
                    link: "tel:+254725500444",
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ContactCard
                  icon={<TbMailFilled className="w-8 h-8" />}
                  title="Email"
                  details={[
                    "info@teflexleather.com",
                    "support@teflexleather.com",
                  ]}
                  action={{
                    text: "Send Email",
                    link: "mailto:info@teflexleather.com",
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <ContactCard
                  icon={<PiMapPinAreaBold className="w-8 h-8" />}
                  title="Visit Us"
                  details={["TeFlex Leather", "Nairobi, Kenya"]}
                  action={{
                    text: "Get Directions",
                    link: "https://maps.google.com",
                  }}
                />
              </motion.div>
            </div>

            {/* Social Media */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl md:text-2xl font-bold font-display text-charcoal mb-4">
                Connect With Us
              </h3>
              <div className="flex justify-center gap-4">
                <SocialLink
                  href="https://facebook.com"
                  icon={<FaFacebookF size={18}/>}
                  label="Facebook"
                />
                <SocialLink
                  href="https://twitter.com"
                  icon={<FaXTwitter size={18}/>}
                  label="Twitter"
                />
                <SocialLink
                  href="https://instagram.com"
                  icon={<FaInstagram size={19}/>}
                  label="Instagram"
                />
                <SocialLink
                  href="https://linkedin.com"
                  icon={<FaLinkedinIn size={19}/>}
                  label="LinkedIn"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section
        id="contact-form"
        className="py-20 bg-cream relative overflow-hidden"
      >
        {/* Background Pattern - Leather texture */}
        <div className="absolute inset-0 opacity-[1.5%] pointer-events-none">
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat"
            style={{ backgroundImage: "url('/leather-icon.png')" }}
          ></div>
        </div>

        <div className="container mx-auto px-2.5 md:px-4">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 md:p-8 shadow-elegant relative overflow-hidden"
              >
               
                <h2 className="text-3xl md:text-4xl font-bold font-display text-espresso mb-2 leading-tight">
                  Send Us a Message
                </h2>
                <div className="w-16 h-1 bg-leather-default rounded-full mb-4 md:mb-6"></div>
                <p className="mb-8 text-espresso/70 font-sans font-medium text-[0.93rem] md:text-base leading-relaxed">
                  Fill out the form below and we'll get back to you as soon as
                  possible. We value your inquiries and aim to provide
                  exceptional service.
                </p>

                {formStatus === "success" && (
                  <motion.div
                    className="bg-leather/10 border border-green-600/40 text-leather px-2 md:px-6 py-3 rounded-md mb-4 md:mb-8"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-medium text-sm md:text-base text-green-600">
                      Your message has been sent successfully. We'll get back to
                      you soon!
                    </p>
                  </motion.div>
                )} 

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-espresso/80 mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-cream-dark/30 rounded-md focus:outline-none focus:ring-2 focus:ring-leather focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    {/* <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-espresso/80 mb-2"
                      >
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-cream-dark/30 rounded-md focus:outline-none focus:ring-2 focus:ring-leather focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div> */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-espresso/80 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-cream-dark/30 rounded-md focus:outline-none focus:ring-2 focus:ring-leather focus:border-transparent transition-all duration-300"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>
                  
                    
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-espresso/80 mb-2"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-cream-dark/30 rounded-md focus:outline-none focus:ring-2 focus:ring-leather focus:border-transparent transition-all duration-300"
                        placeholder="Product Inquiry"
                      />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-espresso/80 mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-white border border-cream-dark/30 rounded-md focus:outline-none focus:ring-2 focus:ring-leather focus:border-transparent transition-all duration-300"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="bg-leather-default text-white px-8 py-3 md:py-4 transition-all duration-300 font-medium tracking-wide text-[0.8rem] md:text-sm uppercase shadow-elegant relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                    <div className="absolute inset-0 bg-espresso-dark scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                  </motion.button>
                </form>
              </motion.div>

              {/* Map and Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="h-full flex flex-col">
                  <div className=" overflow-hidden shadow-elegant mb-8 h-[400px] relative">
                    
                    {/* In a real application, you would embed a Google Map here */}
                    <div className="w-full h-full bg-white flex items-center justify-center">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743782!2d36.70730054218751!3d-1.3028617999999935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="TeFlex Leather Location"
                      ></iframe>
                    </div>
                  </div>

                  <div className="bg-white p-5 md:p-8 rounded-xl shadow-elegant border border-cream-dark/10 relative overflow-hidden">
                   <h3 className="text-xl font-bold font-display text-espresso mb-2 flex items-center">
                      <FaClock className="mr-3 text-leather" /> Business Hours
                    </h3>
                    <div className="w-16 h-1 bg-leather-default rounded-full mb-4 md:mb-6"></div>
                    <ul className="space-y-4">
                      <BusinessHour
                        day="Monday - Friday"
                        hours="8:00 AM - 6:00 PM"
                      />
                      <BusinessHour day="Saturday" hours="9:00 AM - 4:00 PM" />
                      <BusinessHour day="Sunday" hours="Closed" closed />
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern - Leather texture */}
        <div className="absolute inset-0 opacity-[2.5%] pointer-events-none">
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat"
            style={{ backgroundImage: "url('/leather-icon.png')" }}
          ></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-8 bg-leather-light/5"></div>
        <div className="absolute top-8 left-0 w-full h-[1px] bg-gradient-to-r from-leather-light/0 via-leather-light/30 to-leather-light/0"></div>

        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-leather-default font-medium tracking-wide uppercase text-sm mb-3 inline-block">
              Help Center
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-3 leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-[2px] bg-leather-default rounded-full mx-auto mb-4 md:mb-5"></div>
            <p className="text-[0.93rem] md:text-lg text-espresso/70 font-sans font-medium leading-relaxed">
              Find answers to common questions about our products and services.
              If you can't find what you're looking for, please contact us.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 md:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <FaqItem
                  question="How can I place a custom order?"
                  answer="You can place a custom order by filling out our contact form or calling us directly. Our team will work with you to understand your requirements and create a bespoke leather product that meets your needs. We pride ourselves on our ability to bring your vision to life with exceptional craftsmanship."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <FaqItem
                  question="What is your shipping policy?"
                  answer="We offer shipping throughout East Africa. Shipping times vary depending on your location, but typically range from 3-7 business days. International shipping is available upon request. All orders are carefully packaged to ensure your leather products arrive in perfect condition."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <FaqItem
                  question="Do you offer product warranties?"
                  answer="Yes, all our products come with a 1-year warranty against manufacturing defects. This warranty covers issues related to craftsmanship and materials but does not cover normal wear and tear or damage due to improper use. We stand behind the quality of our products and are committed to customer satisfaction."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <FaqItem
                  question="Can I visit your workshop?"
                  answer="Yes, we welcome visitors to our workshop in Nairobi. Please contact us in advance to schedule a visit so we can ensure someone is available to show you around and answer your questions. Seeing our craftsmen at work provides a deeper appreciation for the skill and attention to detail that goes into each piece."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <FaqItem
                  question="How do I care for my leather products?"
                  answer="We recommend regular cleaning with a soft, dry cloth to remove dust. For deeper cleaning, use a leather cleaner and conditioner specifically designed for the type of leather your product is made from. Keep leather products away from direct sunlight and heat sources, and avoid exposure to water or harsh chemicals. Proper care will ensure your leather goods develop a beautiful patina and last for years."
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full bg-cream  shadow-md flex items-center justify-center text-espresso hover:bg-leather hover:text-leather-default transition-all duration-300"
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    {icon}
  </motion.a>
);

const ContactCard = ({ icon, title, details, action }) => {
  return (
    <div className="bg-white p-5 md:p-8 rounded-xl shadow-elegant border border-cream-dark/10 text-center h-full transition-all duration-300 hover:shadow-premium hover:-translate-y-1">
      <div className="text-leather text-4xl mb-3 md:mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold font-display text-espresso/90 mb-2 md:mb-4">
        {title}
      </h3>
      <div className="mb-3 md:mb-6">
        {details.map((detail, index) => (
          <p key={index} className="text-espresso/70 mb-1">
            {detail}
          </p>
        ))}
      </div>
      {action && (
        <a
          href={action.link}
          className="inline-flex items-center gap-2 text-leather-default font-sans font-semibold tracking-tight hover:text-leather-dark transition-colors group"
        >
          <span>{action.text}</span>
          <motion.span
            className="inline-block"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaArrowRight size={14}/>
          </motion.span>
        </a>
      )}
    </div>
  );
};

const BusinessHour = ({ day, hours, closed }) => {
  return (
    <li className="flex justify-between items-center py-2 border-b border-cream-dark/10 last:border-0">
      <span className="font-medium text-[0.9rem] md:text-base text-espresso">{day}</span>
      <span
        className={`closed ? "text-leather-default font-medium" : "text-espresso/70" text-[0.9rem] md:text-base`}
      >
        {hours}
      </span>
    </li>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-cream-dark/10 rounded-lg overflow-hidden shadow-lg relative font-sans tracking-tight">
     
      <motion.button
        className="w-full text-left p-4 md:p-5 bg-white flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-leather-default/60 transition-all duration-300 relative z-10"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: "rgba(245, 240, 235, 0.5)" }}
      >
        <span className="font-semibold text-espresso text-[0.93rem] md:text-base">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className={`text-leather ${
            isOpen ? "text-leather-dark" : "text-leather-default"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </motion.div>
      </motion.button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden bg-white/50 relative z-10"
      >
        <div className="p-4 pt-3">
          <p className="text-gray-500 text-[0.9rem] md:text-base font-medium leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
