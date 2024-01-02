import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/movie" element={<Navigate replace to="/" />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
