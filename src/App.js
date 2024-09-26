import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Cart from './pages/Cart/Cart';
import Shop from './pages/Shop/Shop';
import Contact from './pages/Contact/Contact';
import Legal from './pages/Legal/Legal';
import Footer from './components/Footer';
import { ShopContextProvider } from './providers/shop-context';

/* creating logic for the web-app */
/* rendering the necessary components and setting routing paths */
function App() {

  return (
    <div className="App" data-testid='div-test'>
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element= { <Shop/>} />
            <Route path='/cart' element= { <Cart/>} />
            <Route path='/legal' element= { <Legal/>} />
            <Route path='/contact' element= { <Contact/>} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
