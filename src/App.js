import './App.css';
import Header from "./components/Header";
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Cart from "./pages/Cart";
import Checkout from './pages/Checkout';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path='/*' element={<HomePage />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/cart/checkout' element={<Checkout />}></Route>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
