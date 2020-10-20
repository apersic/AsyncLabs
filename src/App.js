import React from "react";
import "./sass/main.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactFormPage from "./pages/ContactFormPage";
import ServicesPage from "./pages/ServicesPage";
import SingleServicePage from "./pages/SingleServicePage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Main-content">
        <Switch>
          <Route path="/" exact component={ContactFormPage} />
          <Route path="/services" exact component={ServicesPage} />
          <Route
            path="/single-service/:id"
            component={SingleServicePage}
          ></Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
