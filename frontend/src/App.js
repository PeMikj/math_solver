import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PingTest from './PingTest';
import Register from './Register';
import Login from './Login';
import NewProblem from './NewProblem';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/new-problem' element={<NewProblem />} />
          <Route path='/' element={<PingTest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
