import React, {useContext} from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
import Product from "./components/pages/Product";
import Modal from './components/Modal';
import { GlobalContext } from './context/GlobalState';

function App() {
  const { isModal } = useContext(GlobalContext);
  return (
        <div className='app'>
          <Header />
          {isModal && <Modal />}
            <Route exact path="/" component={Shop} />
            <Route path="/cart" component={Cart} />
            <Route path="/product/:id" component={Product} />
          <Footer />
        </div>
  );
}

export default App;
