import './App.css';
import Header from "./components/Header";
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Cart from "./components/Cart";
import Checkout from './components/Checkout';
import Product from './components/ProductPage';
import { Routes, Route } from "react-router-dom";
import { NumProvider } from './components/NumContext';

function App() {
  return (
    <div className="App">
      <NumProvider>
        <Header />
          <Routes>
            <Route path='/*' element={<HomePage />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/cart/checkout' element={<Checkout />}></Route>
            <Route path='/product' element={<Product />}></Route>
          </Routes>
        <Footer />
      </NumProvider>
    </div>
  );
}

export default App;
