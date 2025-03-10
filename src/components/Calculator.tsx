import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calculator as CalculatorIcon, Clock, DollarSign, Users, PenTool as Tool, ArrowRight, CheckCircle, Loader } from 'lucide-react';

type CalculatorStep = {
  question: string;
  field: keyof FormData;
  type: 'number' | 'select';
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
  prefix?: string;
  suffix?: string;
};

type FormData = {
  hoursPerWeek: number;
  hourlyRate: number;
  teamSize: number;
  toolsSpend: number;
  businessType: string;
};

type CalculationResult = {
  annualTimeSavings: number;
  annualMoneySavings: number;
  toolsOptimization: number;
  totalSavings: number;
};

const Calculator = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    hoursPerWeek: 40,
    hourlyRate: 100,
    teamSize: 1,
    toolsSpend: 500,
    businessType: 'insurance',
  });
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculationMessages, setCalculationMessages] = useState<string[]>([]);
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const steps: CalculatorStep[] = [
    {
      question: "How many hours per week do you spend on administrative tasks?",
      field: "hoursPerWeek",
      type: "number",
      min: 1,
      max: 80,
      suffix: "hours"
    },
    {
      question: "What's your hourly rate or the value of your time?",
      field: "hourlyRate",
      type: "number",
      min: 15,
      max: 1000,
      prefix: "$",
      suffix: "/hour"
    },
    {
      question: "How many people are on your team?",
      field: "teamSize",
      type: "number",
      min: 1,
      max: 100,
      suffix: "people"
    },
    {
      question: "How much do you spend monthly on business tools and software?",
      field: "toolsSpend",
      type: "number",
      min: 0,
      max: 10000,
      prefix: "$",
      suffix: "/month"
    },
    {
      question: "What type of service business do you run?",
      field: "businessType",
      type: "select",
      options: [
        { value: "insurance", label: "Insurance Agency" },
        { value: "real-estate", label: "Real Estate" },
        { value: "financial", label: "Financial Services" },
        { value: "legal", label: "Legal Services" },
        { value: "consulting", label: "Consulting" },
        { value: "coaching", label: "Coaching" },
        { value: "other", label: "Other Service Business" }
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (steps[currentStep].type === 'number') {
      const numValue = parseInt(value);
      const min = steps[currentStep].min || 0;
      const max = steps[currentStep].max || 1000000;
      
      if (!isNaN(numValue) && numValue >= min && numValue <= max) {
        setFormData({
          ...formData,
          [name]: numValue
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value
    });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateSavings();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateSavings = () => {
    setIsCalculating(true);
    
    const messages = [
      "Analyzing your administrative workload...",
      "Calculating potential time savings...",
      "Evaluating tool optimization opportunities...",
      "Identifying process improvement potential...",
      "Finalizing your personalized savings report..."
    ];
    
    let messageIndex = 0;
    
    const messageInterval = setInterval(() => {
      if (messageIndex < messages.length) {
        setCalculationMessages(prev => [...prev, messages[messageIndex]]);
        messageIndex++;
      } else {
        clearInterval(messageInterval);
        
        const timeSavingsPercent = getTimeSavingsPercentByBusinessType(formData.businessType);
        const annualTimeSavings = formData.hoursPerWeek * 52 * timeSavingsPercent;
        
        const ownerRate = 100;
        const teamMemberRate = 40;
        
        const ownerSavings = annualTimeSavings * ownerRate;
        
        const teamMemberSavings = formData.teamSize > 1 
          ? annualTimeSavings * teamMemberRate * (formData.teamSize - 1) 
          : 0;
        
        const annualMoneySavings = ownerSavings + teamMemberSavings;
        
        const toolsOptimizationPercent = 0.25;
        const toolsOptimization = formData.toolsSpend * 12 * toolsOptimizationPercent;
        
        const totalSavings = annualMoneySavings + toolsOptimization;
        
        setResult({
          annualTimeSavings,
          annualMoneySavings,
          toolsOptimization,
          totalSavings
        });
        
        setTimeout(() => {
          setIsCalculating(false);
        }, 1000);
      }
    }, 1000);
  };

  const getTimeSavingsPercentByBusinessType = (businessType: string): number => {
    const savingsMap: {[key: string]: number} = {
      'insurance': 0.4,
      'real-estate': 0.35,
      'financial': 0.45,
      'legal': 0.3,
      'consulting': 0.35,
      'coaching': 0.3,
      'other': 0.35
    };
    
    return savingsMap[businessType] || 0.35;
  };

  const handleSubmitContactForm = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare data for webhook
    const webhookData = {
      ...contactForm,
      tag: "#manumation calculator submission",
      calculatorResults: {
        ...formData,
        ...result
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
        setFormSubmitted(true);
        console.log('Webhook data sent successfully:', webhookData);
      } else {
        console.error('Failed to send webhook data');
      }
    } catch (error) {
      console.error('Error sending webhook data:', error);
    }
  };

  const resetCalculator = () => {
    setCurrentStep(0);
    setFormData({
      hoursPerWeek: 40,
      hourlyRate: 100,
      teamSize: 1,
      toolsSpend: 500,
      businessType: 'insurance',
    });
    setIsCalculating(false);
    setCalculationMessages([]);
    setResult(null);
    setShowForm(false);
    setFormSubmitted(false);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(Math.round(num));
  };

  return (
    <section id="calculator" className="py-20 bg-light-100 dark:bg-dark-800" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-dark-700 dark:text-dark-700 font-medium text-sm mb-4"
          >
            ROI Calculator
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          >
            Calculate Your Potential Savings
          </motion.h2>
          
          <motion.p 
            className="text-lg text-secondary-600 dark:text-light-300 max-w-3xl mx-auto"
          >
            Answer a few quick questions to see how much time and money you could save with Manumation's business automation solutions.
          </motion.p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-light-200 dark:bg-dark-700 rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            {!result ? (
              <div className="p-8">
                {!isCalculating ? (
                  <>
                    <div className="mb-8">
                      <div className="flex justify-between mb-4">
                        {steps.map((_, index) => (
                          <div 
                            key={index}
                            className={`h-2 rounded-full flex-1 mx-1 ${
                              index <= currentStep 
                                ? 'bg-primary-500' 
                                : 'bg-secondary-200 dark:bg-dark-500'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-secondary-500 dark:text-light-400 text-center">
                        Step {currentStep + 1} of {steps.length}
                      </p>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-6 dark:text-light-100">
                      {steps[currentStep].question}
                    </h3>
                    
                    <div className="mb-8">
                      {steps[currentStep].type === 'number' ? (
                        <div className="relative">
                          {steps[currentStep].prefix && (
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary-500 dark:text-light-400">
                              {steps[currentStep].prefix}
                            </span>
                          )}
                          
                          <input
                            type="number"
                            name={steps[currentStep].field}
                            value={formData[steps[currentStep].field] as number}
                            onChange={handleInputChange}
                            min={steps[currentStep].min}
                            max={steps[currentStep].max}
                            className={`w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-dark-600 bg-light-100 dark:bg-dark-600 text-secondary-800 dark:text-light-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-center text-xl ${
                              steps[currentStep].prefix ? 'pl-10' : ''
                            }`}
                          />
                          
                          {steps[currentStep].suffix && (
                            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary-500 dark:text-light-400">
                              {steps[currentStep].suffix}
                            </span>
                          )}
                        </div>
                      ) : (
                        <select
                          name={steps[currentStep].field}
                          value={formData[steps[currentStep].field] as string}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-dark-600 bg-light-100 dark:bg-dark-600 text-secondary-800 dark:text-light-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-center text-xl"
                        >
                          {steps[currentStep].options?.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                    
                    <div className="flex justify-between">
                      <button
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        className={`px-6 py-3 rounded-lg font-medium ${
                          currentStep === 0
                            ? 'bg-secondary-200 dark:bg-dark-600 text-secondary-400 dark:text-dark-400 cursor-not-allowed'
                            : 'bg-secondary-200 dark:bg-dark-600 text-secondary-800 dark:text-light-100 hover:bg-secondary-300 dark:hover:bg-dark-500'
                        } transition-colors`}
                      >
                        Back
                      </button>
                      
                      <motion.button
                        onClick={nextStep}
                        className="bg-primary-500 hover:bg-primary-600 text-dark-700 font-medium py-3 px-6 rounded-lg transition-colors shadow-md inline-flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {currentStep < steps.length - 1 ? 'Next' : 'Calculate Savings'}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.button>
                    </div>
                  </>
                ) : (
                  <div className="py-12">
                    <div className="flex flex-col items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="mb-8"
                      >
                        <CalculatorIcon className="h-16 w-16 text-primary-500" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold mb-8 dark:text-light-100">
                        Calculating Your Potential Savings...
                      </h3>
                      
                      <div className="w-full max-w-md space-y-4">
                        {calculationMessages.map((message, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center bg-light-100 dark:bg-dark-600 p-4 rounded-lg"
                          >
                            <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                            <span className="dark:text-light-200">{message}</span>
                          </motion.div>
                        ))}
                        
                        {calculationMessages.length < 5 && (
                          <motion.div
                            animate={{ 
                              opacity: [0.5, 1, 0.5],
                              y: [0, -5, 0]
                            }}
                            transition={{ 
                              duration: 1.5,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                            className="flex items-center justify-center"
                          >
                            <Loader className="h-8 w-8 text-primary-500 animate-spin" />
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-8">
                {!showForm ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center mb-8"
                    >
                      <div className="inline-flex items-center justify-center bg-primary-100 dark:bg-primary-900 w-20 h-20 rounded-full mb-6">
                        <DollarSign className="h-10 w-10 text-primary-600 dark:text-primary-400" />
                      </div>
                      
                      <h3 className="text-3xl font-bold mb-2 dark:text-light-100">
                        Your Annual Savings Potential
                      </h3>
                      
                      <div className="text-5xl font-display font-bold text-primary-600 dark:text-primary-400 mb-6">
                        {formatCurrency(result.totalSavings)}
                      </div>
                      
                      <p className="text-secondary-600 dark:text-light-300 mb-8">
                        Based on your inputs, here's how much you could save by implementing Manumation's business automation solutions.
                      </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-light-100 dark:bg-dark-600 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center mb-4">
                          <Clock className="h-6 w-6 text-primary-500 mr-3" />
                          <h4 className="font-bold dark:text-light-100">Time Savings</h4>
                        </div>
                        <p className="text-3xl font-bold mb-2 dark:text-light-200">
                          {formatNumber(result.annualTimeSavings)} hrs
                        </p>
                        <p className="text-sm text-secondary-600 dark:text-light-400">
                          Hours saved annually
                        </p>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-light-100 dark:bg-dark-600 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center mb-4">
                          <Users className="h-6 w-6 text-primary-500 mr-3" />
                          <h4 className="font-bold dark:text-light-100">Labor Value</h4>
                        </div>
                        <p className="text-3xl font-bold mb-2 dark:text-light-200">
                          {formatCurrency(result.annualMoneySavings)}
                        </p>
                        <p className="text-sm text-secondary-600 dark:text-light-400">
                          Value of time saved
                        </p>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-light-100 dark:bg-dark-600 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center mb-4">
                          <Tool className="h-6 w-6 text-primary-500 mr-3" />
                          <h4 className="font-bold dark:text-light-100">Tools Savings</h4>
                        </div>
                        <p className="text-3xl font-bold mb-2 dark:text-light-200">
                          {formatCurrency(result.toolsOptimization)}
                        </p>
                        <p className="text-sm text-secondary-600 dark:text-light-400">
                          Software cost reduction
                        </p>
                      </motion.div>
                    </div>
                    
                    <div className="bg-light-300 dark:bg-dark-500 p-6 rounded-xl mb-8">
                      <h4 className="font-bold mb-4 dark:text-light-100">How We Calculate Your Savings</h4>
                      <ul className="space-y-2 text-secondary-700 dark:text-light-300">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>We analyze your current time spent on administrative tasks ({formData.hoursPerWeek} hours/week) and apply industry-specific automation potential</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>We value the owner's time at $100/hour and team members' time at $40/hour</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>We factor in your team size ({formData.teamSize} people) to determine total labor savings</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>We analyze your current software spend ({formatCurrency(formData.toolsSpend)}/month) and identify potential consolidation savings</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                      <motion.button
                        onClick={() => setShowForm(true)}
                        className="bg-primary-500 hover:bg-primary-600 text-dark-700 font-medium py-3 px-6 rounded-lg transition-colors shadow-md flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Get Your Detailed Report
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.button>
                      
                      <motion.button
                        onClick={resetCalculator}
                        className="bg-light-200 dark:bg-dark-600 hover:bg-light-300 dark:hover:bg-dark-500 text-secondary-800 dark:text-light-100 font-medium py-3 px-6 rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Recalculate
                      </motion.button>
                    </div>
                  </>
                ) : (
                  <div className="p-4">
                    {!formSubmitted ? (
                      <>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="text-center mb-8"
                        >
                          <h3 className="text-2xl font-bold mb-4 dark:text-light-100">
                            Get Your Detailed Savings Report
                          </h3>
                          <p className="text-secondary-600 dark:text-light-300">
                            Fill out the form below to receive a comprehensive breakdown of your potential savings and a personalized automation strategy.
                          </p>
                        </motion.div>
                        
                        <form onSubmit={handleSubmitContactForm} className="space-y-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-light-300 mb-1">
                              Full Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={contactForm.name}
                              onChange={handleContactInputChange}
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
                              value={contactForm.email}
                              onChange={handleContactInputChange}
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
                              value={contactForm.phone}
                              onChange={handleContactInputChange}
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
                              value={contactForm.company}
                              onChange={handleContactInputChange}
                              className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-dark-600 bg-light-100 dark:bg-dark-600 text-secondary-800 dark:text-light-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                              placeholder="Your company"
                            />
                          </div>
                          
                          <div className="pt-4">
                            <motion.button
                              type="submit"
                              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              Send Me My Report
                            </motion.button>
                          </div>
                          
                          <p className="text-xs text-center text-secondary-500 dark:text-light-400">
                            By submitting this form, you agree to receive communications about Manumation's services. We respect your privacy and will never share your information.
                          </p>
                        </form>
                      </>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center py-12"
                      >
                        <div className="inline-flex items-center justify-center bg-primary-100 dark:bg-primary-900 w-20 h-20 rounded-full mb-6">
                          <CheckCircle className="h-10 w-10 text-primary-600 dark:text-primary-400" />
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-4 dark:text-light-100">
                          Thank You!
                        </h3>
                        
                        <p className="text-secondary-600 dark:text-light-300 mb-8 max-w-md mx-auto">
                          Your detailed savings report is on its way to your inbox. I'll be in touch shortly to discuss how we can implement these savings in your business.
                        </p>
                        
                        <motion.button
                          onClick={resetCalculator}
                          className="bg-primary-500 hover:bg-primary-600 text-dark-700 font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Calculate Again
                        </motion.button>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;