import { BrowserRouter as Router, Route, Link, Navigate } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Register from './pages/Register'
import Projects from './pages/projects';
import Tasks from './pages/tasks';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <>
            <nav className='-mt-8 bg-rose-500 h-7 w-screen -ml-8'>
              <ul className='flex flex-row'>
                <li className="ml-10 text-rose-100"><Link to="/">Home</Link></li>
                <li className="ml-10 text-rose-100"><Link to="/about">About</Link></li>
                <li className="ml-10 text-rose-100"><Link to="/projects">Projects</Link></li>
                <li className="ml-10 text-rose-100"><Link to="/tasks">Tasks</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn(true)} />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
