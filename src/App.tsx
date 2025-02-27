import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Main from './pages/Main/Main';

import './index.scss';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
