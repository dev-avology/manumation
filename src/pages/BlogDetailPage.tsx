import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
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
import Blog16Content from '../blogs/Blog16Content';
import Blog17Content from '../blogs/Blog17Content';
import Blog18Content from '../blogs/Blog18Content';
import Blog19Content from '../blogs/Blog19Content';
import Blog20Content from '../blogs/Blog20Content';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import Blog1Content from '../blogs/Blog1Content';
import Blog2Content from '../blogs/Blog2Content';
import Blog3Content from '../blogs/Blog3Content';
import Blog4Content from '../blogs/Blog4Content';
import Blog5Content from '../blogs/Blog5Content';
import Blog6Content from '../blogs/Blog6Content';
import Blog7Content from '../blogs/Blog7Content';
import Blog8Content from '../blogs/Blog8Content';
import Blog9Content from '../blogs/Blog9Content';
import Blog10Content from '../blogs/Blog10Content';
import Blog11Content from '../blogs/Blog11Content';
import Blog12Content from '../blogs/Blog12Content';
import Blog13Content from '../blogs/Blog13Content';
import Blog14Content from '../blogs/Blog14Content';
import Blog15Content from '../blogs/Blog15Content';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const blogPosts = [
    {
      id: 1,
      title: "What If You Could Clone Yourself? How AI Agents Are Replacing Busywork for Founders",
      excerpt: "Let's face it, being a founder often means being everything: CEO, sales rep, social media manager, customer service, project coordinator, and copywriter. You know what needs to be done, but there's just not enough of you to go around.",
      date: "May 24, 2025",
      readTime: "7 min read",
      category: "AI agents for entrepreneurs",
      image: b1Image,
    },
    {
      id: 2,
      title: "Why You're Paying for Tools You're Not Using And How Manumation Fixes That",
      excerpt: "You're subscribed to Notion, Calendly, Slack, Zoom, ClickUp, Zapier, Airtable, Canva, Stripe, and ten other platforms. 'Just in case.' Sound familiar?",
      date: "May 26, 2025",
      readTime: "9 min read",
      category: "software stack optimization",
      image: b2Image,
    },
    {
      id: 3,
      title: "From Lead to Loyal Client: How to Build a 24/7 Sales System With Manumation",
      excerpt: "It happens all the time: You get a lead. You're excited. You mean to follow up. Then life happens: meetings, deadlines, family, and burnout.",
      date: "May 27, 2025",
      readTime: "8 min read",
      category: "sales funnel automation",
      image: b3Image,
    },
    {
      id: 4,
      title: "The Real ROI of Automation: How Manumation Pays for Itself in 30 Days",
      excerpt: "If you've ever hesitated to invest in automation because it feels like another sunk cost or \"Tech thing to figure out,\" you're not alone",
      date: "May 27, 2025",
      readTime: "8 min read",
      category: "ROI of automation",
      image: b4Image,
    },
    {
      id: 5,
      title: "35% Revenue in 6 Months? The Secret's Out",
      excerpt: "According to Forbes, Most entrepreneurs didn't start their business to spend their days in spreadsheets, chasing follow-ups, or duct-taping broken systems together.",
      date: "May 27, 2025",
      readTime: "8 min read",
      category: "Revenue Growth",
      image: b5Image,
    },
    {
      id: 6,
      title: "What's the Secret to Explosive Revenue Growth in Half a Year?",
      excerpt: "Let's cut straight to it: If your revenue has flatlined or worse, dipped, you're probably missing one (or all) of these three pillars: smart systems, focused humans, and automations that actually work.",
      date: "May 27, 2025",
      readTime: "8 min read",
      category: "Explosive Revenue",
      image: b6Image,
    },
    {
      id: 7,
      title: "Leaving Money on the Table? This Strategy Adds 35% More to Your Total",
      excerpt: "You didn't start your business to drown in busywork. Yet somehow, you're deep in task overwhelm, patching holes in workflows with duct tape and duct-tired energy.",
      date: "May 27, 2025",
      readTime: "8 min read",
      category: "Marketing Strategies",
      image: b7Image,
    },
    {
      id: 8,
      title: "200+ Businesses Transformed, Discover the Automation Revolution",
      excerpt: "What if your business could work with you, even while you sleep? That's not just a dream anymore. It's the everyday reality for over 200 businesses that have embraced the Manumation Revolution, our unique blend of human creativity, AI agents, and business automation that unlocks growth on autopilot.",
      date: "May 27, 2025",
      readTime: "8 min read",
      category: "Business Automation",
      image: b8Image,
    },
    {
      id: 9,
      title: "How Automation is Redefining Service Businesses",
      excerpt: "If you've ever said, 'I wish I had more hours in the day,' you're not alone. Service-based businesses, especially those run by lean teams or solo founders, are stretched thin trying to serve clients, manage operations, and grow sustainably. But here's the truth: time isn't the issue. Efficiency is.",
      date: "May 27, 2025",
      readTime: "8 min read",
      category: "service business automation",
      image: b9Image,
    },
    {
      id: 10,
      title: "Instant ROI with 30 Years of Smart Automation Expertise",
      excerpt: "Imagine walking into your office tomorrow and finding every repetitive task already done flawlessly. No more chasing invoices, scheduling calls manually, or duct-taping your tech stack. That's not a dream. That's Manumation.",
      date: "May 27, 2025",
      readTime: "8 min read",
      category: "Instant ROI",
      image: b10Image,
    },
    {
      id: 11,
      title: "Unlock Dramatic Savings with Decades of Automation Experience",
      excerpt: "If you've ever thought, 'There's got to be a better way to run this business,' you're not alone. Most small business owners and service providers hit the same wall: Long hours, inconsistent income, and no clear path to scaling without sacrificing sanity.",
      date: "May 27, 2025",
      readTime: "8 min read",
      category: "Automation savings",
      image: b11Image,
    },
    {
      id: 12,
      title: "Discover the Automation Advantage Behind 200+ Business Success Stories",
      excerpt: "What if the bottleneck in your business isn't a lack of effort, but a lack of automation? Across 200+ service-based businesses, one thing consistently separated the overwhelmed from the thriving: they stopped duct-taping tools together and started using automation as a growth system, not a tech pile-up.",
      date: "May 27, 2025",
      readTime: "8 min read",
      category: "Automation success stories",
      image: b12Image,
    },
    {
      id: 13,
      title: "The Future of Automation: What's Next for Manumation",
      excerpt: "As we continue to push the boundaries of what automation can do, we're excited to see what's next for Manumation. Join us as we explore the latest trends, innovations, and opportunities in the world of automation.",
      date: "May 27, 2025",
      readTime: "8 min read",
      category: "Future of automation",
      image: b13Image,
    },
    {
      id: 14,
      title: "The Future of Automation: What's Next for Manumation",
      excerpt: "As we continue to push the boundaries of what automation can do, we're excited to see what's next for Manumation. Join us as we explore the latest trends, innovations, and opportunities in the world of automation.",
      date: "May 27, 2025",
      readTime: "8 min read",
      category: "Future of automation",
      image: b14Image,
    },
    {
      id: 15,
      title: "The Future of Automation: What's Next for Manumation",
      excerpt: "As we continue to push the boundaries of what automation can do, we're excited to see what's next for Manumation. Join us as we explore the latest trends, innovations, and opportunities in the world of automation.",
      date: "May 27, 2025",
      readTime: "8 min read",
      category: "Future of automation",
      image: b15Image,
    },
    {
      id: 16,
      title: "The Future of Automation: What's Next for Manumation",
      excerpt: "As we continue to push the boundaries of what automation can do, we're excited to see what's next for Manumation. Join us as we explore the latest trends, innovations, and opportunities in the world of automation.",
      date: "May 27, 2025",
      readTime: "8 min read",
      category: "Future of automation",
      image: b16Image,
    },
    {
      id: 17,
      title: "The Future of Automation: What's Next for Manumation",
      excerpt: "As we continue to push the boundaries of what automation can do, we're excited to see what's next for Manumation. Join us as we explore the latest trends, innovations, and opportunities in the world of automation.",
      date: "May 27, 2025",
      readTime: "8 min read",
      category: "Future of automation",
      image: b16Image,
    },
    {
      id: 18,
      title: "The Future of Automation: What's Next for Manumation",
      excerpt: "As we continue to push the boundaries of what automation can do, we're excited to see what's next for Manumation. Join us as we explore the latest trends, innovations, and opportunities in the world of automation.",
      date: "May 27, 2025",
      readTime: "8 min read",
      category: "Future of automation",
      image: b16Image,
    },
    {
      id: 19,
      title: "The Future of Automation: What's Next for Manumation",
      excerpt: "As we continue to push the boundaries of what automation can do, we're excited to see what's next for Manumation. Join us as we explore the latest trends, innovations, and opportunities in the world of automation.",
      date: "May 27, 2025",
      readTime: "8 min read",
      category: "Future of automation",
      image: b16Image,
    },
    {
      id: 20,
      title: "The Future of Automation: What's Next for Manumation",
      excerpt: "As we continue to push the boundaries of what automation can do, we're excited to see what's next for Manumation. Join us as we explore the latest trends, innovations, and opportunities in the world of automation.",
      date: "May 27, 2025",
      readTime: "8 min read",
      category: "Future of automation",
      image: b16Image,
    },
  ];

  const post = blogPosts.find(post => post.id === Number(id));

  if (!post) {
    return (
      <div className={`min-h-screen ${isDarkMode ? 'dark bg-dark-700 text-light-100' : 'bg-light-200 text-secondary-900'} font-sans transition-colors duration-300`}>
        <Header />
        <main className="pt-20">
          <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Post not found</h1>
              <button
                onClick={() => navigate('/blog')}
                className="text-primary-600 hover:text-primary-700"
              >
                Back to Blog
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  let BlogContentComponent = null;
  if (post.id === 1) BlogContentComponent = <Blog1Content />;
  if (post.id === 2) BlogContentComponent = <Blog2Content />;
  if (post.id === 3) BlogContentComponent = <Blog3Content />;
  if (post.id === 4) BlogContentComponent = <Blog4Content />;
  if (post.id === 5) BlogContentComponent = <Blog5Content />;
  if (post.id === 6) BlogContentComponent = <Blog6Content />;
  if (post.id === 7) BlogContentComponent = <Blog7Content />;
  if (post.id === 8) BlogContentComponent = <Blog8Content />;
  if (post.id === 9) BlogContentComponent = <Blog9Content />;
  if (post.id === 10) BlogContentComponent = <Blog10Content />;
  if (post.id === 11) BlogContentComponent = <Blog11Content />;
  if (post.id === 12) BlogContentComponent = <Blog12Content />;
  if (post.id === 13) BlogContentComponent = <Blog13Content />;
  if (post.id === 14) BlogContentComponent = <Blog14Content />;
  if (post.id === 15) BlogContentComponent = <Blog15Content />;
  if (post.id === 16) BlogContentComponent = <Blog16Content />;
  if (post.id === 17) BlogContentComponent = <Blog17Content />;
  if (post.id === 18) BlogContentComponent = <Blog18Content />;
  if (post.id === 19) BlogContentComponent = <Blog19Content />;
  if (post.id === 20) BlogContentComponent = <Blog20Content />;

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-dark-700 text-light-100' : 'bg-light-200 text-secondary-900'} font-sans transition-colors duration-300`}>
      <Header />
      <main className="pt-20">
        <article className="py-20 bg-light-200 dark:bg-dark-800 flex justify-center">
          <div className="prose dark:prose-invert max-w-5xl w-full mx-auto">
            {BlogContentComponent ? BlogContentComponent : (
              <p className="mb-6 text-lg leading-relaxed">Blog content coming soon.</p>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;