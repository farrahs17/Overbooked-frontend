import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router/Router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ToastContainer />
          <Router />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
