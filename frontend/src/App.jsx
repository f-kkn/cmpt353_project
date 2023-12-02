import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Landing from "./Landing";
import Login from "./Login";
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
