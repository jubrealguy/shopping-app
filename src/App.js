import './App.css';
import Header from "./components/Header"
import Main from './components/Main';
import Footer from './components/Footer';
import Cart from "./components/Cart"

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
