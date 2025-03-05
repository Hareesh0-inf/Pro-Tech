import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Register from './pages/register';
import Projects from './pages/projects';
import Tasks from './pages/tasks';
import { isLoggedIn } from './auth/authService';

function App() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);

  return (
    <Router>
      <div className="App">
        {loggedIn ? (
          <>
            <nav className='-mt-8 bg-rose-500 h-7 w-screen -ml-8'>
              <ul className='flex flex-row'>
                <li className="ml-10 text-rose-100"><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li className="ml-10 text-rose-100"><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li className="ml-10 text-rose-100"><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
                <li className="ml-10 text-rose-100"><NavLink to="/tasks" activeClassName="active">Tasks</NavLink></li>
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
            <Route path="/login" element={<Login setIsLoggedIn={setLoggedIn} />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
        {!loggedIn && <Navigate to="/login" />}
      </div>
    </Router>
  );
}

export default App;
