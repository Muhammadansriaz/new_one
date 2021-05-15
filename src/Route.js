import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'
import Trasaction from './Trasaction'

const AppRouter = () => {
  return (
    <div className="AppRouter">
      <Router>
        <Routes>
            
          <Route element={<Home />} path="/" />
          <Route element={<Trasaction />} path="/Trasaction" />
          
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;