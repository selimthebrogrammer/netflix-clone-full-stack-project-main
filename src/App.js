import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

// Bileşenleri içe aktar
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AnaSayfa from "./components/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import NetflixPanel from "./pages/FilmPanel";

// AnaSayfa bileşenini içe aktar

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AnaSayfa />} />
        <Route
          path="/film-panel"
          element={
            <PrivateRoute>
              <NetflixPanel />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
