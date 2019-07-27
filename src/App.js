import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router/Router";
import Header from "./Header/Header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
