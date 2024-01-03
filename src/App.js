import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login'
import Protectedroute from './components/Protectedroute';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Protectedroute path='/home' Component={<Home />} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
