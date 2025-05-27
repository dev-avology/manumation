import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import b1Image from '../assets/images/b1.png';
import b2Image from '../assets/images/b2.png';
import b3Image from '../assets/images/b3.png';

const BlogPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Updated blog posts with dates one week apart for the last 3 weeks
  const blogPosts = [
    {
      id: 1,
      title: "What If You Could Clone Yourself? How AI Agents Are Replacing Busywork for Founders",
      excerpt: "Let's face it, being a founder often means being everything: CEO, sales rep, social media manager, customer service, project coordinator, and copywriter. You know what needs to be done, but there's just not enough of you to go around.",
      date: "May 24, 2025",
      readTime: "7 min read",
      category: "AI agents for entrepreneurs",
      image: b1Image
    },
    {
      id: 2,
      title: "Why You're Paying for Tools You're Not Using And How Manumation Fixes That",
      excerpt: "You're subscribed to Notion, Calendly, Slack, Zoom, ClickUp, Zapier, Airtable, Canva, Stripe, and ten other platforms. 'Just in case.' Sound familiar?",
      date: "May 26, 2025",
      readTime: "9 min read",
      category: "software stack optimization",
      image: b2Image
    },
    {
      id: 3,
      title: "From Lead to Loyal Client: How to Build a 24/7 Sales System With Manumation",
      excerpt: "It happens all the time: You get a lead. You're excited. You mean to follow up. Then life happens: meetings, deadlines, family, and burnout.",
      date: "May 27, 2025",
      readTime: "8 min read",
      category: "sales funnel automation",
      image: b3Image
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
              className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-dark-700 dark:text-dark-700 font-medium text-sm mb-4"
            >
              Latest Insights
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold"
            >
              From the Blog
            </motion.h2>
          </div>
          
          <motion.div
            className="text-primary-600 dark:text-primary-400 font-medium inline-flex items-center mt-4 md:mt-0"
            whileHover={{ x: 5 }}
          >
            <Link to="/blog" className="inline-flex items-center">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-light-100 dark:bg-dark-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <Link to={`/blog/${post.id}`}>
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
                    
                    <div className="text-primary-600 dark:text-primary-400 font-medium text-sm inline-flex items-center">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;