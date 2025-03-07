import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const BlogPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Updated blog posts with dates one week apart for the last 3 weeks
  const blogPosts = [
    {
      title: "The Hidden Cost of Manual Processes in Your Business",
      excerpt: "Discover how manual processes are silently draining your business resources and how automation can save you thousands of dollars annually.",
      date: "May 15, 2025",
      readTime: "7 min read",
      category: "Efficiency",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "5 Ways to Automate Your Client Onboarding Process",
      excerpt: "Learn how to create a seamless, automated client onboarding experience that impresses clients and saves your team countless hours.",
      date: "May 8, 2025",
      readTime: "9 min read",
      category: "Client Experience",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Why Most CRMs Fail (And How to Make Yours Succeed)",
      excerpt: "Understand the common pitfalls of CRM implementation and discover the strategies that ensure your CRM becomes a valuable business asset.",
      date: "May 1, 2025",
      readTime: "8 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <section className="py-20 bg-light-200 dark:bg-dark-800" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <motion.span 
              className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 font-medium text-sm mb-4"
            >
              Latest Insights
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold"
            >
              From the Blog
            </motion.h2>
          </div>
          
          <motion.a
            href="https://keanonbiz.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 dark:text-primary-400 font-medium inline-flex items-center mt-4 md:mt-0"
            whileHover={{ x: 5 }}
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.a>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-light-100 dark:bg-dark-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-secondary-200 dark:bg-dark-600 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center text-secondary-500 dark:text-light-400 text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 dark:text-light-100">{post.title}</h3>
                <p className="text-secondary-600 dark:text-light-400 text-sm mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-secondary-500 dark:text-light-500 text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                  
                  <motion.a
                    href="https://keanonbiz.com/blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 font-medium text-sm inline-flex items-center"
                    whileHover={{ x: 3 }}
                  >
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;