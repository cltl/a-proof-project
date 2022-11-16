import { useState } from 'react';
import './App.css';
import {motion, AnimatePresence} from "framer-motion";
import Nav from './nav';
import Footer from './footer';
import AnimatedRoutes from './AnimatedRoutes'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/a-proof-project">
      <div className="App">
        <Nav />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter >

  );
}

export default App;
