import { useState } from 'react'
import './App.css'
import Nav from './nav'
import Footer from './footer'
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
    <BrowserRouter basename="/a-proof-project">
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/publications' element={<Publications />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/team' element={<Team />} />
          <Route path='/about' element={<About />} />
          <Route path='/a-proof-project/' element={<About />} />
          <Route path='/' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter >

  );
}

export default App;
