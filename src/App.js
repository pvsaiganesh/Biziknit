import "./App.scss";
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
          <Route element={<Home />} path="/"></Route>
          <Route element={<Register />} path="/register"></Route>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<AboutUs />} path="/aboutus"></Route>
          <Route element={<BlogsPage />} path="/blogs">
            {/* <Route element={<BlogPage1 />}></Route>
            <Route element={<BlogPage2 />}></Route>
            <Route element={<BlogPage3 />}></Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
