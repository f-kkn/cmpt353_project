import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Landing from "./Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
