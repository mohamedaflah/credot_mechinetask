import { Header } from "./components/common/Header";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingePage";
import Footer from "./components/common/Footer";
import "./App.css";
import Login from "./pages/Login";
import Detail from "./pages/Details";
import Cart from "./pages/Cart";
import WhishList from "./pages/Whishlist";
import { AdminLayout } from "./pages/Admin/Layout/AdminLayout";
import { ProductList } from "./pages/Admin/ProductList";
function App() {
  
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />   {/* Route for Landing page */}
        <Route path="/login" element={<Login />} />  {/*  Login and Register */}
        <Route path="/product/:id" element={<Detail />} />  {/* Product detail page  */}
        <Route path='/cart' element={<Cart/>} />  {/*  Cart page */}
        <Route path='/whishlist' element={<WhishList/>}/>  {/* Whish list page */}
        <Route path="/admin/" element={<AdminLayout/>}>
          <Route index element={<ProductList/>}/>
        </Route>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
