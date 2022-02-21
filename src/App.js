import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductsList from "./pages/ProductsList";
import Register from "./pages/Register";
import Product from "./pages/Product";
import { Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/success";
import Cancle from "./pages/cancel";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state => state.user.user)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<ProductsList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/payment/success" element={<Success />}/>
      <Route path="/payment/cancel" element={<Cancle />}/>
    </Routes>    
  )
}

export default App;
 