import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import KibanaPage from "./components/KibanaPage"; // Assurez-vous que ce composant existe

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Route avec paramètre dynamique */}
        <Route path="/datacenter/:datacenterId" element={<KibanaPage />} />
      </Routes>
    </Router>
  );
};

export default App;


