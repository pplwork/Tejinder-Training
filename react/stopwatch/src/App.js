import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Stopwatch from './pages/stopwatch';
import './sass/main.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/stopwatch' element={<Stopwatch />} />
          <Route path="*" element={<>404</>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
