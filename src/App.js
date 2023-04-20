// import {
//   BrowserRouter, Routes, Route, Outlet, Link
// } from 'react-router-dom';
import './App.scss';
import Quote from './components/Quote';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="app">
      <Quote />
      <Calculator />
    </div>
  );
}

export default App;
