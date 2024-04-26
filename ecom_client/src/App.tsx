import { Header } from "./components/common/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingePage";
import Footer from "./components/common/Footer";
import "./App.css";
import Login from "./pages/Login";
import Detail from "./pages/Details";
import Cart from "./pages/Cart";
import WhishList from "./pages/Whishlist";
import { AdminLayout } from "./pages/Admin/Layout/AdminLayout";
import { ProductList } from "./pages/Admin/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import Signup from "./pages/Signup";
import { useEffect } from "react";
import { getUser } from "./redux/actions/users/getUserAction";
import { CategoryPage } from "./pages/Admin/Categories";
import { BrandPage } from "./pages/Admin/Brands";
import { UsersPage } from "./pages/Admin/Users";
import { AddProduct } from "./pages/Admin/AddProduct";
function App() {
  const { user, role } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <main>
      {role !== "admin" && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            role !== "admin" ? <LandingPage /> : <Navigate to={"/admin/"} />
          }
        />
        {/* Route for Landing page */}
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to={"/"} />}
        />{" "}
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to={"/"} />}
        />
        {/*  Login and Register */}
        <Route path="/product/:id" element={<Detail />} />{" "}
        {/* Product detail page  */}
        <Route
          path="/cart"
          element={user ? <Cart /> : <Navigate to={"/"} />}
        />{" "}
        {/*  Cart page */}
        <Route
          path="/whishlist"
          element={user ? <WhishList /> : <Navigate to={"/"} />}
        />{" "}
        {/* Whish list page */}
        <Route
          path="/admin/"
          element={
            user && role === "admin" ? <AdminLayout /> : <Navigate to={"/"} />
          }
        >
          <Route index element={<ProductList />} />
          <Route path="categories" element={<CategoryPage/>} />
          <Route path="brands" element={<BrandPage/>} />
          <Route path="users" element={<UsersPage/>}/>
          <Route path="addproduct" element={<AddProduct/>}/>
        </Route>
      </Routes>
      {role!=="admin"&&<Footer />}
      
    </main>
  );
}

export default App;
