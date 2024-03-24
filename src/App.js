import './App.css';
import { Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
