import "./App.scss";
import Navbar from "./components/home-components/navbar";
import Home from "./components/home";
import Register from "./components/register";
import Login from "./components/login";
import AboutUs from "./components/aboutus";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogsPage from "./components/blogs";
import Scrolltotop from "./components/scrolltotop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Scrolltotop />
        <Routes>
          <Route
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
            path="/"
          ></Route>
          <Route element={<Register />} path="/register"></Route>
          <Route element={<Login />} path="/login"></Route>
          <Route
            element={
              <>
                <Navbar />
                <AboutUs />
              </>
            }
            path="/aboutus"
          ></Route>
          <Route
            element={
              <>
                <Navbar />
                <BlogsPage />
              </>
            }
            path="/blogs"
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
