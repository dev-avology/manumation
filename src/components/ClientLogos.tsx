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
      url: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/IG9wqoGmStG82kdUXlsk/media/642419565cd63e4cf00dc3f4.jpeg",
      link: "https://www.mypremierhealthadvisors.com/"
    },
    {
      name: "State Farm",
      url: "https://assets.cdn.filesafe.space/5yufDyfhuTKFx8nCQCP6/media/67c7c616492ec08108e7cfb7.png",
      link: "https://www.bethprince.com/"
    },
    {
      name: "Empire Title",
      url: "https://assets.cdn.filesafe.space/5yufDyfhuTKFx8nCQCP6/media/6648ccc75edee8ee6b9f572e.jpeg",
      link: "https://empiretitleservice.com/"
    },
    {
      name: "DB Plumbing",
      url: "https://assets.cdn.filesafe.space/5yufDyfhuTKFx8nCQCP6/media/6484ab5f986800b49798b911.jpeg",
      link: "https://www.dbplumbingin.com/"
    },
    {
      name: "Tracer CoCard",
      url: "https://assets.cdn.filesafe.space/5yufDyfhuTKFx8nCQCP6/media/646ff395e1235653c23d37f2.png",
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
                <div className="h-16 flex items-center justify-center p-2 bg-light-100 dark:bg-dark-700 rounded-lg shadow-sm">
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