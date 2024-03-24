import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Table from './components/CRUD/Table';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/table" element={<Table />} />
      </Routes>
    </Router>
  );
}

export default App;
