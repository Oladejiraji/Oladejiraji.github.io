import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
import Product from "./components/pages/Product";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <>
          <Header />
          <Route exact path="/" component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={Product} />
          <Footer />
        </>
      </Router>
    </GlobalProvider>
  );
}

export default App;
