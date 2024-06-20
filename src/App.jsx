import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavMenu from "./components/Nav"
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <NavMenu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productDetails/:productId" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
