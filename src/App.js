import { Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Quote from './components/Quote';
import Calculator from './components/Calculator';

function App() {
  return (
    <>
      <header>
        <nav>
          <div className="branding">
            <Link to="/math-magicians/"><h1>Math Magicians</h1></Link>
          </div>
          <ul>
            <li>
              <Link to="/math-magicians/">Home</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/math-magicians/calculator">Calculator</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/math-magicians/quote">Quote</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/math-magicians/" element={<Home />} />
          <Route path="/math-magicians/quote" element={<Quote />} />
          <Route path="/math-magicians/calculator" element={<Calculator />} />
        </Routes>
      </main>
      <footer>
        <p className="copyright">&copy; 2023 Math Magicians | Developed by Abdulali Noori</p>
      </footer>
    </>
  );
}

export default App;
