import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import b1Image from '../assets/images/b1.png';
import b2Image from '../assets/images/b2.png';
import b3Image from '../assets/images/b3.png';
import b4Image from '../assets/images/b4.png';
import b5Image from '../assets/images/b5.png';
import b6Image from '../assets/images/b6.png';
import b7Image from '../assets/images/b7.png';
import b8Image from '../assets/images/b8.png';
import b9Image from '../assets/images/b9.png';
import b10Image from '../assets/images/b10.png';
import b11Image from '../assets/images/b11.png';
import b12Image from '../assets/images/b12.png';
import b13Image from '../assets/images/b13.png';
import b14Image from '../assets/images/b14.png';
import b15Image from '../assets/images/b15.png';
import b16Image from '../assets/images/b16.png';
import b17Image from '../assets/images/b17.png';
import b18Image from '../assets/images/b18.png';
import b19Image from '../assets/images/b19.png';
import b20Image from '../assets/images/b20.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

const BlogPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { isDarkMode } = useTheme();

  const blogPosts = [
    {
      id: 1,
      title: "What If You Could Clone Yourself? How AI Agents Are Replacing Busywork for Founders",
      excerpt: "Let's face it, being a founder often means being everything: CEO, sales rep, social media manager, customer service, project coordinator, and copywriter. You know what needs to be done, but there's just not enough of you to go around.",
      date: "May 01, 2025",
      readTime: "7 min read",
      category: "AI agents for entrepreneurs",
      image: b1Image,
      content: "Full blog post content here..."
    },
    {
      id: 2,
      title: "Why You're Paying for Tools You're Not Using And How Manumation Fixes That",
      excerpt: "You're subscribed to Notion, Calendly, Slack, Zoom, ClickUp, Zapier, Airtable, Canva, Stripe, and ten other platforms. 'Just in case.' Sound familiar?",
      date: "May 03, 2025",
      readTime: "9 min read",
      category: "software stack optimization",
      image: b2Image,
      content: "Full blog post content here..."
    },
    {
      id: 3,
      title: "From Lead to Loyal Client: How to Build a 24/7 Sales System With Manumation",
      excerpt: "It happens all the time: You get a lead. You're excited. You mean to follow up. Then life happens: meetings, deadlines, family, and burnout.",
      date: "May 04, 2025",
      readTime: "8 min read",
      category: "sales funnel automation",
      image: b3Image,
      content: "Full blog post content here..."
    },
    {
      id: 4,
      title: "The Real ROI of Automation: How Manumation Pays for Itself in 30 Days",
      excerpt: "If you've ever hesitated to invest in automation because it feels like another sunk cost or “Tech thing to figure out,” you’re not alone",
      date: "May 07, 2025",
      readTime: "8 min read",
      category: "ROI of automation",
      image: b4Image,
      content: "Full blog post content here..."
    },
    {
        id: 5,
        title: "35% Revenue in 6 Months? The Secret's Out",
        excerpt: "According to Forbes, Most entrepreneurs didn’t start their business to spend their days in spreadsheets, chasing follow-ups, or duct-taping broken systems together.",
        date: "May 10, 2025",
        readTime: "8 min read",
        category: "Revenue Growth",
        image: b5Image,
        content: "Full blog post content here..."
    },
    {
        id: 6,
        title: "What's the Secret to Explosive Revenue Growth in Half a Year?",
        excerpt: "Let’s cut straight to it: If your revenue has flatlined or worse, dipped, you’re probably missing one (or all) of these three pillars: smart systems, focused humans, and automations that actually work.",
        date: "May 10, 2025",
        readTime: "8 min read",
        category: "Explosive Revenue",
        image: b6Image,
        content: "Full blog post content here..."
    },
    {
        id: 7,
        title: "Leaving Money on the Table? This Strategy Adds 35% More to Your Total",
        excerpt: "You didn’t start your business to drown in busywork. Yet somehow, you're deep in task overwhelm, patching holes in workflows with duct tape and duct-tired energy.",
        date: "May 12, 2025",
        readTime: "8 min read",
        category: "Marketing Strategies",
        image: b7Image,
        content: "Full blog post content here..."
    },
    {
        id: 8,
        title: "200+ Businesses Transformed, Discover the Automation Revolution",
        excerpt: "What if your business could work with you, even while you sleep?",
        date: "May 14, 2025",
        readTime: "8 min read",
        category: "Business Automation",
        image: b8Image,
        content: "Full blog post content here..."
    },
    {
        id: 9,
        title: "How Automation is Redefining Service Businesses",
        excerpt: "If you’ve ever said, “I wish I had more hours in the day,” you’re not alone. Service-based businesses, especially those run by lean teams or solo founders, are stretched thin trying to serve clients, manage operations, and grow sustainably. But here’s the truth: time isn’t the issue. Efficiency is.",
        date: "May 15, 2025",
        readTime: "8 min read",
        category: "service business automation",
        image: b9Image,
        content: "Full blog post content here..."
    },
    {
        id: 10,
        title: "Instant ROI with 30 Years of Smart Automation Expertise",
        excerpt: "Imagine walking into your office tomorrow and finding every repetitive task already done flawlessly. No more chasing invoices, scheduling calls manually, or duct-taping your tech stack. That’s not a dream. That’s Manumation.",
        date: "May 20, 2025",
        readTime: "8 min read",
        category: "Instant ROI",
        image: b10Image,
        content: "Full blog post content here..."
    },
    {
        id: 11,
        title: "Unlock Dramatic Savings with Decades of Automation Experience",
        excerpt: "If you’ve ever thought, “There’s got to be a better way to run this business,” you’re not alone. Most small business owners and service providers hit the same wall: Long hours, inconsistent income, and no clear path to scaling without sacrificing sanity.",
        date: "May 20, 2025",
        readTime: "8 min read",
        category: "Automation savings",
        image: b11Image,
        content: "Full blog post content here..."
    },
    {
        id: 12,
        title: "Discover the Automation Advantage Behind 200+ Business Success Stories",
        excerpt: "What if the bottleneck in your business isn’t a lack of effort, but a lack of automation?",
        date: "May 21, 2025",
        readTime: "8 min read",
        category: "Automation success stories",
        image: b12Image,
        content: "Full blog post content here..."
    },
    {
        id: 13,
        title: "The Automation For Unlock Revenue Growth ",
        excerpt: "You didn’t start your business to work 60-hour weeks and still feel like you’re barely keeping up. Yet here you are wearing every hat, juggling a thousand tabs, and wondering if growth means more chaos.",
        date: "May 23, 2025",
        readTime: "8 min read",
        category: "Automation for entrepreneurs",
        image: b13Image,
        content: "Full blog post content here..."
    },
    {
        id: 14,
        title: "Burnout to Breakthrough Starts Here with Automation That Works ",
        excerpt: "You didn’t start your business to drown in task lists, chase overdue invoices, or be the one who remembers every single thing that keeps the wheels turning. You started this because you had a vision. Freedom. Impact. Maybe even a little fun.",
        date: "May 24, 2025",
        readTime: "8 min read",
        category: "Breakthrough productivity tools",
        image: b14Image,
        content: "Full blog post content here..."
    },
    {
        id: 15,
        title: "Stop the Struggle and Watch Your Service Business Soar with Automation",
        excerpt: "If running your business feels like juggling flaming swords while riding a unicycle, you’re not alone.",
        date: "May 24, 2025",
        readTime: "8 min read",
        category: "Automate service business",
        image: b15Image,
        content: "Full blog post content here..."
    },
    {
        id: 16,
        title: "Tired of Stagnant Growth? See How Automation Can Change Everything",
        excerpt: "If you’ve been grinding away in your business but growth feels like it hit a wall, you’re not alone. Whether you’re a coach juggling too many clients, a creative stuck in service delivery, or a small team buried in admin, stagnant growth is a signal, not a sentence.",
        date: "May 25, 2025",
        readTime: "8 min read",
        category: " Automation for business growth",
        image: b16Image,
        content: "Full blog post content here..."
    },
    {
        id: 17,
        title: "Why You're Still Drowning in Admin Work (And How Manumation Fixes It)",
        excerpt: "You started your business to create freedom, not to spend your best hours sending follow-up emails, juggling appointment reminders, or updating spreadsheets at 1 AM. Yet here you are, stuck in a cycle of busywork that’s draining your energy and capping your growth.",
        date: "May 26, 2025",
        readTime: "8 min read",
        category: "business process automation",
        image: b17Image,
        content: "Full blog post content here..."
    },
    {
        id: 18,
        title: "Manumation vs. Automation: What’s the Difference and Why It Matters for Your Business",
        excerpt: "Let’s clear the air automation is powerful. But if you’ve ever bought a tool, set up a workflow, and still felt like you’re drowning in to-dos… You already know: Automation alone isn’t the answer.",
        date: "May 26, 2025",
        readTime: "8 min read",
        category: "intelligent automation for business",
        image: b18Image,
        content: "Full blog post content here..."
    },
    {
        id: 19,
        title: "How Small Teams Scale Big with Manumation: Less Stress, More Results",
        excerpt: "Most small business owners and founders feel like they’re wearing 17 hats CEO one minute, customer service the next, then suddenly graphic designer, bookkeeper, and email scheduler.",
        date: "May 26, 2025",
        readTime: "8 min read",
        category: "scale small business",
        image: b19Image,
        content: "Full blog post content here..."
    },
    {
        id: 20,
        title: "The 5 Bottlenecks Killing Your Business Growth (That You Didn’t Know You Could Automate)",
        excerpt: "If you're pouring hours into your business but still feeling stuck at the same revenue plateau, you're not alone. The truth? Most business owners hit growth ceilings not because of a lack of effort but because of invisible bottlenecks",
        date: "May 26, 2025",
        readTime: "8 min read",
        category: "business growth bottlenecks",
        image: b20Image,
        content: "Full blog post content here..."
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-dark-700 text-light-100' : 'bg-light-200 text-secondary-900'} font-sans transition-colors duration-300`}>
      <Header />
      <main className="pt-20">
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
                
                <motion.h1 
                  className="text-4xl md:text-5xl font-display font-bold"
                >
                  Our Blog
                </motion.h1>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage; 