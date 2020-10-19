import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactFormPage from "./pages/ContactFormPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactFormPage />
      <Footer />
    </div>
  );
}

export default App;
