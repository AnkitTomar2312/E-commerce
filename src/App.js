import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/nav";
import Footer from "./components/Footer/footer";
import Register from "./components/register";
import Login from "./components/LogIn";
import AddProduct from "./components/AddProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateComponent from "./components/PrivateComponent";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Product listing component</h1>} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route
              path="/update-product"
              element={<h1>Update Product component</h1>}
            />
            <Route path="/logout" element={<h1>logout component</h1>} />
            <Route path="/profile" element={<h1>profile component</h1>} />
          </Route>
          {/* Not Private Components */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
