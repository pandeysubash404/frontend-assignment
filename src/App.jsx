import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import MainComponent from "./MainComponent";
import ProductDetailComponent from "./ProductDetailComponent";
import Search from "./Search";

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/product/:id" element={<ProductDetailComponent />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
