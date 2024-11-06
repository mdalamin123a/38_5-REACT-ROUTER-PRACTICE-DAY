import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import NoMatch from './components/NotMatch/NotMatch';

function App() {
  return (
    <div>
      {/* self closing tag */}
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route exact path='/' Component={Home}></Route>
          <Route path='*' Component={NoMatch}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
