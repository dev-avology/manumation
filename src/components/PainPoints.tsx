import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CheckCircle,
  XCircle,
  HelpCircle,
  Clock,
  Calendar,
  Inbox,
  Search,
  Meh,
  Frown,
  SmilePlus,
  Lightbulb,
  ArrowRight,
  Download,
  Calendar as CalendarIcon
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { usePopup } from '../context/PopupContext';

const PainPoints = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { openQuiz } = usePopup();

  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const resultsRef = React.useRef<HTMLDivElement>(null);

  const handleDownloadResults = async () => {
    if (!resultsRef.current) return;
    
    setIsGeneratingPDF(true);
    
    try {
      const canvas = await html2canvas(resultsRef.current, {
        scale: 2,
        logging: false,
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgWidth = 210;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('manumation-assessment-results.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="quiz-section" className="py-20 bg-light-100 dark:bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <motion.span 
            className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 font-medium text-sm mb-4"
          >
            Self-Assessment
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          >
            Is Manumation Right For You?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-secondary-600 dark:text-light-300 max-w-3xl mx-auto"
          >
            Take this quick quiz to see if you're suffering from the common symptoms of business inefficiency that I specialize in curing.
          </motion.p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-light-200 dark:bg-dark-700 rounded-xl p-8 text-center shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HelpCircle className="h-16 w-16 text-primary-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 dark:text-light-100">Ready to Find Out?</h3>
            <p className="text-secondary-600 dark:text-light-300 mb-8">
              This 2-minute quiz will reveal if your business is suffering from inefficiencies that are costing you time, money, and sanity.
            </p>
            <motion.button
              onClick={openQuiz}
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Quiz
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;