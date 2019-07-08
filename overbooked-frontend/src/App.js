import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router/Router";
import Header from "./Header/Header";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
