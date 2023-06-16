import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./firebase/authProvider";
import "./index.css";
import Home from "./pages/home";
import Login from "./pages/login";
import ProfilePage from "./pages/profile";
import Offers from "./pages/offers";
import Sneakers from "./pages/sneakers";
import SneakerDetails from "./pages/sneakerDetails";
import Header from "./modules/header";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/offers" element={<Offers />} />
            <Route exact path="/sneakers" element={<Sneakers />} />
            <Route exact path="/sneakers/:id" element={<SneakerDetails />} />
            <Route exact path="/profile" element={<ProfilePage />} />
            <Route
              path="*"
              element={
                <p id="404text">
                  🤔 404 - The page you requested does not exist
                </p>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
