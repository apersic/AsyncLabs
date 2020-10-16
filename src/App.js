import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./pages/ContactFormPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
