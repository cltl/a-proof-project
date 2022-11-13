import { useState } from 'react'
import './App.css'
import Nav from './nav'
import About from './about'
import Team from './team'
import Publications from './publications'
import Contact from './contact'
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/publications' element={<Publications />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/team' element={<Team />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<About />} />
        </Routes>
        <div className="footer">footer</div>
      </div>
    </BrowserRouter >

  );
}

export default App;
