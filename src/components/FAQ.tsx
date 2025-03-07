import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "How quickly can I expect to see results from automation?",
      answer: "Most clients begin seeing tangible results within the first 30 days. The initial phase focuses on quick wins that immediately free up time and reduce stress. Full implementation typically takes 60-90 days, with ROI continuing to improve as systems mature and optimize."
    },
    {
      question: "Will I need to change all my existing tools and software?",
      answer: "Not necessarily. My approach is to work with your existing tools when possible, optimizing how they're used and integrated. When replacements are recommended, it's because the ROI is clearly demonstrated. I'm tool-agnostic and focused on what works best for your specific business."
    },
    {
      question: "I'm not tech-savvy. Will I be able to use these automated systems?",
      answer: "Absolutely. I design systems with user-friendliness as a priority. Many clients who describe themselves as 'not tech-savvy' find my solutions intuitive and easy to use. Plus, comprehensive training and ongoing support ensure you're never left struggling with technology."
    },
    {
      question: "How is Manumation different from other automation consultants?",
      answer: "Unlike many consultants who focus solely on technology, Manumation takes a holistic approach that balances automation with the human touch. I have 30+ years of entrepreneurial experience, so I understand the real-world challenges of running a service business. My solutions are practical, not theoretical, and I'm committed to your success beyond implementation."
    },
    {
      question: "What types of businesses benefit most from your services?",
      answer: "Service-based businesses with repetitive processes and client communication needs benefit most. This includes insurance agencies, real estate professionals, financial advisors, legal services, consultants, coaches, and similar businesses where client relationships and operational efficiency directly impact revenue."
    },
    {
      question: "Do you offer ongoing support after implementation?",
      answer: "Yes, ongoing support is a core part of my service. I don't just set up systems and disappear. All clients receive regular check-ins, optimization reviews, and access to support. As your business evolves, your systems should evolve too, and I'm committed to ensuring they continue to serve your changing needs."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-light-300 dark:bg-dark-700" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-dark-700 dark:text-dark-700 font-medium text-sm mb-4"
          >
            Common Questions
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p 
            className="text-lg text-secondary-600 dark:text-light-300 max-w-3xl mx-auto"
          >
            Get answers to the most common questions about business automation and how Manumation can help your business.
          </motion.p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.button
                onClick={() => toggleQuestion(index)}
                className={`w-full text-left p-6 rounded-lg flex justify-between items-center transition-colors ${
                  openIndex === index 
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300' 
                    : 'bg-light-100 dark:bg-dark-800 hover:bg-light-200 dark:hover:bg-dark-600'
                } shadow-sm`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="font-bold text-lg dark:text-light-100">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0 text-primary-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-secondary-500 dark:text-light-400" />
                )}
              </motion.button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-light-50 dark:bg-dark-700 p-6 rounded-b-lg mt-1 text-secondary-700 dark:text-light-300"
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;