import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, FileText } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const steps = [
  {
    title: "Step 1: Log in to Admin Panel",
    description: "Navigate to the admin panel and enter your credentials to log in.",
  },
  {
    title: "Step 2: Go to the Blog Section",
    description: "On the dashboard, locate and click on the 'Blog' section in the menu.",
  },
  {
    title: "Step 3: Click 'Add New Post'",
    description: "Find the 'Add New Post' button and click it to create a new blog post.",
  },
  {
    title: "Step 4: Enter Blog Content",
    description: "Fill in the title, content, and upload images for your blog post.",
  },
  {
    title: "Step 5: Set Categories & Tags",
    description: "Select the appropriate categories and add relevant tags to your post.",
  },
  {
    title: "Step 6: Publish the Blog Post",
    description: "Click the 'Publish' button to make the blog post live on the site.",
  },
];

const UserGuide = () => {
  const { isDarkMode } = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className={`min-h-screen py-40 px-6 md:px-12 ${isDarkMode ? 'dark bg-dark-700 text-light-100' : 'bg-light-200 text-secondary-900'}`}>
      <motion.div 
        className="max-w-3xl mx-auto text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4">How to Add a Blog Post</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">Follow these simple steps to publish a new blog post on the site.</p>
      </motion.div>
      
      <div className="grid gap-6 max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 flex items-start space-x-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
          >
            <CheckCircle className="text-primary-500 w-8 h-8 mt-1" />
            <div>
              <h2 className="text-lg font-semibold mb-1">{step.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

     {/* <div className="text-center mt-8">
        <button className="px-6 py-2 text-lg flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg shadow-md transition">
          <FileText className="w-5 h-5" />
          <span>View Full Guide</span>
        </button>
      </div>*/}
    </div>
  );
};

export default UserGuide;
