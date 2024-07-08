import './App.css';
import Header from "./components/Header"
import Main from './components/Main';
import Footer from './components/Footer';
import Cart from "./components/Cart"
import Checkout from './components/Checkout';
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter basename='/'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/cart/checkout' element={<Checkout />}></Route>
        </Routes>
      <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
