import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Calendar from './components/Calendar';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
