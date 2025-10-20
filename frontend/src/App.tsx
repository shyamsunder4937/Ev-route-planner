import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/home/About/About';


function App() {
  return (
    <div>
      <nav className='flex items-center justify-center gap-4'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;