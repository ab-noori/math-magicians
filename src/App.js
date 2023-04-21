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
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/quote">Quote</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2023 Math Magicians | Made by Abdulali Noori</p>
      </footer>
    </>
  );
}

export default App;
