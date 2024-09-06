import "./App.scss";
import Navbar from "./components/home-components/navbar";
import Home from "./components/home";
import Register from "./components/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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
        <Route
          element={
            <div className="App">
              <Navbar />
              <Register />
            </div>
          }
          path="/register"
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
