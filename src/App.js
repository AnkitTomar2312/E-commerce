import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/nav";
import Footer from "./components/Footer/footer";
import Register from "./components/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Product listing component</h1>} />
          <Route path="/add-product" element={<h1>Add product component</h1>} />
          <Route
            path="/update-product"
            element={<h1>Update Product component</h1>}
          />
          <Route path="/logout" element={<h1>logout component</h1>} />
          <Route path="/profile" element={<h1>profile component</h1>} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
