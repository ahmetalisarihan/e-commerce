import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
