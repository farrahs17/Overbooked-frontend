import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router/Router";
import FooterPage from "../src/Header/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ToastContainer />
          <Router />
          <FooterPage />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
