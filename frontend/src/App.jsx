import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Landing from "./component/Landing";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Main from "./component/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
