import { useState } from 'react';
import './App.css';
import { motion, AnimatePresence } from "framer-motion";
import Nav from './nav';
import AnimatedRoutes from './AnimatedRoutes'
import { BrowserRouter } from "react-router-dom";
import Footer from "./footer";

function App() {
  return (
    <>
      <BrowserRouter basename="/a-proof-project">
        <div className="App">
          <Nav />
          <AnimatedRoutes />
          <div class="footer">
            <Footer />
          </div>
        </div>
       
      </BrowserRouter >  
    </>
  );
}

export default App;
