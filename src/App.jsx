import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import Productos from "./pages/Productos/Productos";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Carrito from "./pages/Carrito/Carrito";

const App = () => {
  return (
    <Router>
      {/* Header global */}
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </Router>
  );
};

export default App;
