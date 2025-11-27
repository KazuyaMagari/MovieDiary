import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Calendar from './components/Calendar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </Router>
  );
}

export default App;
