import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle, Calendar, Loader } from 'lucide-react';
import { usePopup } from '../context/PopupContext';

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { openQuiz } = usePopup();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/5yufDyfhuTKFx8nCQCP6/webhook-trigger/7a1b180f-26de-448e-8be5-6d843d743bde', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setShowCalendar(true);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    "Personalized automation strategy",
    "Systems that match your unique business",
    "Ongoing support and optimization",
    "Increased revenue, decreased stress"
  ];

  return (
    <section id="contact" className="py-20 bg-light-100 dark:bg-dark-800" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <motion.div 
              className="md:w-1/2 p-8 md:p-12"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-700 mb-6">
                Ready to Transform Your Business?
              </h2>
              
              <p className="text-dark-700 text-lg mb-8">
                I don't just understand your business—I feel your challenges in my bones. When you're ready to transform frustration into freedom, chaos into clarity, and potential into profit, I'm ready to build the perfect system for your business.
              </p>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center text-dark-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.button
                onClick={openQuiz}
                className="bg-white text-dark-700 font-medium py-3 px-6 rounded-full shadow-md inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Take the Quiz & Get Started
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 bg-light-100 dark:bg-dark-700 p-8 md:p-12"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {!showCalendar ? (
                <>
                  <h3 className="text-2xl font-bold mb-6 dark:text-light-100">Get in Touch</h3>
                  
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-light-300 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-dark-600 bg-light-100 dark:bg-dark-600 text-secondary-800 dark:text-light-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-light-300 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-dark-600 bg-light-100 dark:bg-dark-600 text-secondary-800 dark:text-light-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="business" className="block text-sm font-medium text-secondary-700 dark:text-light-300 mb-1">
                          Business Type
                        </label>
                        <select
                          id="business"
                          name="business"
                          value={formData.business}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-dark-600 bg-light-100 dark:bg-dark-600 text-secondary-800 dark:text-light-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        >
                          <option value="">Select your business type</option>
                          <option value="insurance">Insurance Agency</option>
                          <option value="real-estate">Real Estate</option>
                          <option value="coaching">Coaching/Consulting</option>
                          <option value="other">Other Service Business</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-light-300 mb-1">
                          Your Biggest Business Challenge
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-dark-600 bg-light-100 dark:bg-dark-600 text-secondary-800 dark:text-light-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="Tell me what's holding your business back..."
                        ></textarea>
                      </div>
                      
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-primary-600 hover:bg-primary-700 text-dark-700 font-medium py-3 px-6 rounded-lg transition-colors shadow-md flex items-center justify-center ${isSubmitting ? 'opacity-70' : ''}`}
                        whileHover={isSubmitting ? {} : { scale: 1.02 }}
                        whileTap={isSubmitting ? {} : { scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader className="animate-spin mr-2 h-5 w-5" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit
                          </>
                        )}
                      </motion.button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-8"
                    >
                      <div className="inline-flex items-center justify-center bg-primary-100 dark:bg-primary-900 w-20 h-20 rounded-full mb-6">
                        <CheckCircle className="h-10 w-10 text-dark-700 dark:text-dark-700" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 dark:text-light-100">
                        Thank You!
                      </h3>
                      
                      <p className="text-secondary-600 dark:text-light-300 mb-8">
                        Your message has been received. I'll be in touch shortly to discuss how we can transform your business operations.
                      </p>
                      
                      <motion.button
                        onClick={() => setShowCalendar(true)}
                        className="bg-primary-500 hover:bg-primary-600 text-dark-700 font-medium py-3 px-6 rounded-lg transition-colors shadow-md inline-flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Calendar className="mr-2 h-5 w-5" />
                        Schedule Your Call Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.button>
                    </motion.div>
                  )}
                </>
              ) : (
                <div className="h-full">
                  <h3 className="text-2xl font-bold mb-6 dark:text-light-100">Schedule Your Strategy Call</h3>
                  <div className="rounded-lg overflow-hidden">
                    <iframe 
                      src="https://api.leadconnectorhq.com/widget/booking/exCGzR6pDrz2wfc2aoNt" 
                      style={{ width: '100%', border: 'none', height: '600px' }} 
                      scrolling="no" 
                      id="exCGzR6pDrz2wfc2aoNt_1740680455958"
                    ></iframe>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <motion.button
                      onClick={() => setShowCalendar(false)}
                      className="text-primary-600 dark:text-primary-400 font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      Back to Contact Form
                    </motion.button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;