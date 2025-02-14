import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Register from './pages/register';
import Projects from './pages/projects';
import Tasks from './pages/tasks';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className='-mt-8 bg-rose-500 h-7 w-screen -ml-8'>
          <ul className='flex flex-row'>
            <li className="ml-10  text-rose-100"><Link to="/">Home</Link></li>
            <li className="ml-10  text-rose-100"><Link to="/about">About</Link></li>
            <li className="ml-10  text-rose-100"><Link to="/login">Login</Link></li>
            <li className="ml-10  text-rose-100"><Link to="/register">Register</Link></li>
            <li className="ml-10  text-rose-100"><Link to="/projects">Projects</Link></li>
            <li className="ml-10  text-rose-100"><Link to="/tasks">Tasks</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
