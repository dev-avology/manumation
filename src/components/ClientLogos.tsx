import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ClientLogos = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const logos = [
    {
      name: "Premier Health Advisors",
      url: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://www.mypremierhealthadvisors.com/"
    },
    {
      name: "State Farm",
      url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://www.bethprince.com/"
    },
    {
      name: "Empire Title",
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://empiretitleservice.com/"
    },
    {
      name: "DB Plumbing",
      url: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://www.dbplumbingin.com/"
    },
    {
      name: "Tracer CoCard",
      url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://tracer-c2fs.com/"
    }
  ];

  return (
    <section className="py-12 bg-light-200 dark:bg-dark-800" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-xl font-medium text-secondary-600 dark:text-light-300">
            Trusted By Leading Agencies
          </h3>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <a 
                href={logo.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group transition-transform duration-300 hover:scale-105"
              >
                <div className="h-16 w-32 flex items-center justify-center p-2 bg-light-100 dark:bg-dark-700 rounded-lg shadow-sm">
                  <img 
                    src={logo.url} 
                    alt={logo.name} 
                    className="h-full w-full object-contain filter dark:invert transition-all duration-300 group-hover:opacity-80"
                  />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;