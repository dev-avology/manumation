import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  X,
  Calendar as CalendarIcon,
  Loader,
  Download
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

interface QuizPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuizPopup: React.FC<QuizPopupProps> = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);
  const [answers, setAnswers] = useState<{[key: number]: boolean}>({});
  const [showResults, setShowResults] = useState(false);
  const [showBookingCalendar, setShowBookingCalendar] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const resultsRef = React.useRef<HTMLDivElement>(null);

  // Reset state when popup is opened
  useEffect(() => {
    if (isOpen) {
      setCurrentQuestion(null);
      setAnswers({});
      setShowResults(false);
      setShowBookingCalendar(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
      });
      setIsSubmitting(false);
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const handleAnswer = (questionIndex: number, answer: boolean) => {
    setAnswers({
      ...answers,
      [questionIndex]: answer
    });
    
    // Auto-advance to next question
    if (questionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(questionIndex + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setShowResults(true);
      }, 500);
    }
  };

  const startQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setShowBookingCalendar(false);
  };

  const getYesCount = () => {
    return Object.values(answers).filter(answer => answer).length;
  };

  const handleBookCall = () => {
    setShowBookingCalendar(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare data for webhook
    const webhookData = {
      ...formData,
      tag: "#manumation quiz",
      quizResults: {
        yesAnswers: getYesCount(),
        totalQuestions: questions.length,
        answers: Object.entries(answers).map(([questionIndex, answer]) => ({
          question: questions[parseInt(questionIndex)].question,
          answer: answer ? "Yes" : "No"
        })),
        recommendation: getYesCount() >= 6 
          ? "Definitely needs Manumation" 
          : getYesCount() >= 3 
            ? "Could benefit from Manumation" 
            : "Doing better than most"
      }
    };
    
    try {
      // Send data to webhook
      const response = await fetch('https://services.leadconnectorhq.com/hooks/5yufDyfhuTKFx8nCQCP6/webhook-trigger/52e3822c-2b32-4a6c-b8bd-520c35610734', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData)
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        console.log('Webhook data sent successfully:', webhookData);
      } else {
        console.error('Failed to send webhook data');
      }
    } catch (error) {
      console.error('Error sending webhook data:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const questions = [
    {
      question: "Do you spend more time managing your business than actually doing what you love?",
      icon: <Clock className="h-6 w-6 text-dark-700 dark:text-dark-700" />,
      yesResponse: "Life's too short to be drowning in admin. I can help you reclaim 15+ hours per week.",
      noResponse: "That's impressive! But imagine what you could do with even more time focused on growth."
    },
    {
      question: "Ever wake up at 3 AM remembering a client you forgot to follow up with?",
      icon: <Calendar className="h-6 w-6 text-dark-700 dark:text-dark-700" />,
      yesResponse: "Sleep better knowing your follow-ups happen automatically, even when you're dreaming.",
      noResponse: "Either you have a superhuman memory or you're already using some automation. Let's take it to the next level."
    },
    {
      question: "Is your inbox where potential clients go to be forgotten?",
      icon: <Inbox className="h-6 w-6text-dark-700 dark:text-dark-700" />,
      yesResponse: "Your inbox shouldn't be a graveyard for opportunities. Let's resurrect those relationships.",
      noResponse: "Excellent! But are you sure nothing's slipping through the cracks?"
    },
    {
      question: "Do you have more software subscriptions than streaming services?",
      icon: <Search className="h-6 w-6text-dark-700 dark:text-dark-700" />,
      yesResponse: "Tech stack bloat is real. I can help you consolidate and save $$$.",
      noResponse: "Minimalism is good! But are your few tools working together efficiently?"
    },
    {
      question: "Have you ever said 'there must be a better way to do this' at least 3 times in one day?",
      icon: <Meh className="h-6 w-6text-dark-700 dark:text-dark-700" />,
      yesResponse: "There IS a better way. Several, actually. And I know them all.",
      noResponse: "Either you're already optimized or you've given up hoping. Let's assume the former!"
    },
    {
      question: "Do your clients sometimes wonder if you've fallen off the face of the earth?",
      icon: <Frown className="h-6 w-6text-dark-700 dark:text-dark-700" />,
      yesResponse: "Client communication shouldn't require superhuman effort. Automation can make you omnipresent.",
      noResponse: "Your clients must love your attentiveness! Let's make sure it stays sustainable."
    },
    {
      question: "Is your business growth limited by the number of hours in a day?",
      icon: <SmilePlus className="h-6 w-6text-dark-700 dark:text-dark-700" />,
      yesResponse: "Time is finite, but your business potential shouldn't be. Let's break that ceiling.",
      noResponse: "You've cracked the code of scaling without burnout? I'm impressed! Let's take it even further."
    },
    {
      question: "Have you ever purchased a tool or system that's now gathering digital dust?",
      icon: <Lightbulb className="h-6 w-6text-dark-700 dark:text-dark-700" />,
      yesResponse: "Shiny object syndrome is expensive. Let's focus on what actually works for YOUR business.",
      noResponse: "You're either extremely disciplined or extremely lucky with your tech choices. Either way, I'm impressed!"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-light-100 dark:bg-dark-800 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex justify-between items-center p-6 border-b border-secondary-200 dark:border-dark-600 bg-light-100 dark:bg-dark-800">
              <h2 className="text-2xl font-display font-bold dark:text-light-100">Is Manumation Right For You?</h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-secondary-200 dark:hover:bg-dark-600 transition-colors"
              >
                <X className="h-6 w-6 text-secondary-600 dark:text-light-300" />
              </button>
            </div>
            
            <div className="p-6">
              {currentQuestion === null && !showResults ? (
                <div className="text-center">
                  <HelpCircle className="h-16 w-16 text-primary-500 mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4 dark:text-light-100">Ready to Find Out?</h3>
                  <p className="text-secondary-600 dark:text-light-300 mb-8">
                    This 2-minute quiz will reveal if your business is suffering from inefficiencies that are costing you time, money, and sanity.
                  </p>
                  <motion.button
                    onClick={startQuiz}
                    className="bg-primary-600 hover:bg-primary-700 text-dark-700 dark:text-dark-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md inline-flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Quiz
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </div>
              ) : showResults ? (
                <>
                  {!showBookingCalendar ? (
                    <>
                      {!isSubmitted ? (
                        <div>
                          <div ref={resultsRef} className="text-center mb-8">
                            <div className="inline-flex items-center justify-center bg-primary-100 dark:bg-primary-900 w-20 h-20 rounded-full mb-6">
                              {getYesCount() >= 4 ? (
                                <CheckCircle className="h-10 w-10 text-primary-600 dark:text-primary-400" />
                              ) : (
                                <HelpCircle className="h-10 w-10 text-primary-600 dark:text-primary-400" />
                              )}
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-4 dark:text-light-100">
                              {getYesCount() >= 6 
                                ? "You're Definitely in the Right Place!" 
                                : getYesCount() >= 3 
                                  ? "You Could Benefit from Manumation" 
                                  : "You're Doing Better Than Most!"}
                            </h3>
                            
                            <p className="text-lg text-secondary-600 dark:text-light-300 mb-6">
                              {getYesCount() >= 6 
                                ? "Based on your answers, you're experiencing multiple inefficiencies that are holding your business back. The good news? These are exactly the problems I solve every day." 
                                : getYesCount() >= 3 
                                  ? "You've got some areas where automation could significantly improve your business operations and free up your time." 
                                  : "You seem to have many aspects of your business running smoothly, but there's always room for optimization."}
                            </p>
                          </div>
                          
                          <div className="bg-light-200 dark:bg-dark-700 p-6 rounded-lg mb-8">
                            <h4 className="font-bold mb-4 dark:text-light-100">What This Means For You:</h4>
                            <ul className="space-y-3">
                              {getYesCount() >= 3 && (
                                <>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-secondary-700 dark:text-light-300">
                                      You could reclaim {getYesCount() * 2}+ hours per week through proper automation
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-secondary-700 dark:text-light-300">
                                      Your client experience could be significantly enhanced with systematic communication
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-secondary-700 dark:text-light-300">
                                      You're likely leaving money on the table with leads that fall through the cracks
                                    </span>
                                  </li>
                                </>
                              )}
                              <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-secondary-700 dark:text-light-300">
                                  A personalized Manumation strategy session would help identify your biggest opportunities
                                </span>
                              </li>
                            </ul>
                          </div>
                          
                          <form onSubmit={handleSubmitForm} className="space-y-4 mb-8">
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
                              <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 dark:text-light-300 mb-1">
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-dark-600 bg-light-100 dark:bg-dark-600 text-secondary-800 dark:text-light-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                placeholder="(555) 123-4567"
                              />
                            </div>
                            
                            <div>
                              <label htmlFor="company" className="block text-sm font-medium text-secondary-700 dark:text-light-300 mb-1">
                                Company Name
                              </label>
                              <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-dark-600 bg-light-100 dark:bg-dark-600 text-secondary-800 dark:text-light-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                placeholder="Your company"
                              />
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                              <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className={`flex-1 bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md flex items-center justify-center ${
                                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                }`}
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
                                    Get Your Detailed Report
                                  </>
                                )}
                              </motion.button>
                              
                              <motion.button
                                type="button"
                                onClick={handleDownloadResults}
                                disabled={isGeneratingPDF}
                                className={`flex-1 bg-secondary-200 dark:bg-dark-600 hover:bg-secondary-300 dark:hover:bg-dark-500 text-secondary-800 dark:text-light-100 font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center ${
                                  isGeneratingPDF ? 'opacity-70 cursor-not-allowed' : ''
                                }`}
                                whileHover={isGeneratingPDF ? {} : { scale: 1.02 }}
                                whileTap={isGeneratingPDF ? {} : { scale: 0.98 }}
                              >
                                {isGeneratingPDF ? (
                                  <>
                                    <Loader className="animate-spin mr-2 h-5 w-5" />
                                    Generating PDF...
                                  </>
                                ) : (
                                  <>
                                    <Download className="mr-2 h-5 w-5" />
                                    Download Results
                                  </>
                                )}
                              </motion.button>
                            </div>
                          </form>
                          
                          <div className="text-center">
                            <motion.button
                              onClick={handleBookCall}
                              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md inline-flex items-center"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <CalendarIcon className="mr-2 h-5 w-5" />
                              Schedule a Strategy Call
                            </motion.button>
                          </div>
                        </div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          className="text-center py-8"
                        >
                          <div className="inline-flex items-center justify-center bg-primary-100 dark:bg-primary-900 w-20 h-20 rounded-full mb-6">
                            <CheckCircle className="h-10 w-10 text-primary-600 dark:text-primary-400" />
                          </div>
                          
                          <h3 className="text-2xl font-bold mb-4 dark:text-light-100">
                            Thank You!
                          </h3>
                          
                          <p className="text-secondary-600 dark:text-light-300 mb-8">
                            Your detailed savings report is on its way to your inbox. I'll be in touch shortly to discuss how we can implement these savings in your business.
                          </p>
                          
                          <motion.button
                            onClick={handleBookCall}
                            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md inline-flex items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <CalendarIcon className="mr-2 h-5 w-5" />
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
                          onClick={() => setShowBookingCalendar(false)}
                          className="text-primary-600 dark:text-primary-400 font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          Back to Results
                        </motion.button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <motion.div
                  className="bg-light-200 dark:bg-dark-700 rounded-xl p-6 shadow-lg"
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-secondary-500 dark:text-light-400">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <div className="flex space-x-1">
                      {questions.map((_, index) => (
                        <div 
                          key={index}
                          className={`h-1.5 w-6 rounded-full ${
                            index === currentQuestion 
                              ? 'bg-primary-500' 
                              : index < currentQuestion 
                                ? 'bg-primary-300' 
                                : 'bg-secondary-300 dark:bg-dark-500'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                      <div className="text-primary-600 dark:text-primary-400">
                        {questions[currentQuestion].icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold dark:text-light-100">
                      {questions[currentQuestion].question}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <motion.button
                      onClick={() => handleAnswer(currentQuestion, true)}
                      className={`p-4 rounded-lg flex items-center justify-between ${
                        answers[currentQuestion] === true
                          ? 'bg-primary-100 dark:bg-primary-900/30 border-2 border-primary-500'
                          : 'bg-light-100 dark:bg-dark-600 hover:bg-light-300 dark:hover:bg-dark-500 border-2 border-transparent'
                      } transition-colors`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="font-medium dark:text-light-100">Yes, that's me!</span>
                      <CheckCircle className={`h-5 w-5 ${
                        answers[currentQuestion] === true
                          ? 'text-primary-500'
                          : 'text-secondary-400 dark:text-dark-400'
                      }`} />
                    </motion.button>
                    
                    <motion.button
                      onClick={() => handleAnswer(currentQuestion, false)}
                      className={`p-4 rounded-lg flex items-center justify-between ${
                        answers[currentQuestion] === false
                          ? 'bg-secondary-100 dark:bg-dark-600 border-2 border-secondary-500'
                          : 'bg-light-100 dark:bg-dark-600 hover:bg-light-300 dark:hover:bg-dark-500 border-2 border-transparent'
                      } transition-colors`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="font-medium dark:text-light-100">Not really</span>
                      <XCircle className={`h-5 w-5 ${
                        answers[currentQuestion] === false
                          ? 'text-secondary-500'
                          : 'text-secondary-400 dark:text-dark-400'
                      }`} />
                    </motion.button>
                  </div>
                  
                  {answers[currentQuestion] !== undefined && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className={`p-4 rounded-lg ${
                        answers[currentQuestion]
                          ? 'bg-primary-50 dark:bg-primary-900/10 border-l-4 border-primary-500'
                          : 'bg-secondary-50 dark:bg-dark-600 border-l-4 border-secondary-500'
                      }`}
                    >
                      <p className="text-secondary-700 dark:text-light-300">
                        {answers[currentQuestion] 
                          ? questions[currentQuestion].yesResponse
                          : questions[currentQuestion].noResponse
                        }
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuizPopup;