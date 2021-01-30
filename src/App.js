import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import SideCart from './components/SideCart'

// pages
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Error from "./pages/ErrorPage";
import Products from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProductPage";
import Contact from "./pages/ContactPage";
import Cart from "./pages/CartPage";

function App() {
  return <Router>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <SideCart></SideCart>
    <Switch>
      <Route exact path="/" ><Home></Home></Route>
      <Route exact path="/about" ><About></About></Route>
      <Route exact path="/contact" ><Contact></Contact></Route>
      <Route exact path="/products" ><Products></Products></Route>
      <Route exact path="/products/:id" ><SingleProduct></SingleProduct></Route>
      <Route exact path="/cart" ><Cart></Cart></Route>
      <Route><Error></Error></Route>
    </Switch>
    <Footer></Footer>
  </Router>;
}

export default App;
