import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import CalculatorPage from './pages/CalculatorPage';
import UserGuide from "./User-Guide/page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/user-guide" element={<UserGuide />} />
      </Routes>
    </Router>
  );
}

export default App;