import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./home";
import UserGuide from "./User-Guide/page";
import Footer from "./components/Footer";
import StickyButton from './components/StickyButton';
import QuizPopup from './components/QuizPopup';
import { usePopup } from './context/PopupContext';

function App() {
  const { isQuizOpen, closeQuiz } = usePopup();
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-guide" element={<UserGuide />} />
      </Routes>
      <Footer />
      <StickyButton />
      <QuizPopup isOpen={isQuizOpen} onClose={closeQuiz} />
    </Router>
  );
}

export default App;
