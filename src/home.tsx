import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Stats from './components/Stats';
import ClientLogos from './components/ClientLogos';
import PainPoints from './components/PainPoints';
import CaseStudies from './components/CaseStudies';
import Calculator from './components/Calculator';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import BlogPreview from './components/BlogPreview';
import CTA from './components/CTA';
import { useTheme } from './context/ThemeContext';


function App() {
  const { isDarkMode } = useTheme();

  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-dark-700 text-light-100' : 'bg-light-200 text-secondary-900'} font-sans transition-colors duration-300`}>
   
      <main>
        <Hero />
        <ClientLogos />
        <About />
        <Stats />
        <Calculator />
        <Services />
        <Process />
        <PainPoints />
        <CaseStudies />
        <Testimonial />
        <FAQ />
        <BlogPreview />
        <CTA />
      </main>
    </div>
  );
}

export default App;