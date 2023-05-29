import React from "react";
import "./App.css";
import ProductList from "./components/products/ProductList";
import CountryList from "./components/countries/CountryList";

function App() {
  return (
    <div className="App">
      <h1> React assignment</h1>
      <CountryList/>
      <ProductList/>
    </div>
  );
}

export default App;
