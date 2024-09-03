import "./App.css";
import Navbar from "./components/home-components/navbar";
import Home from "./components/home";
import Register from "./components/register";

function App() {
  return (
    <div id="Home" className="App">
      <Navbar />
      <Home />
      <Register />
    </div>
  );
}

export default App;
