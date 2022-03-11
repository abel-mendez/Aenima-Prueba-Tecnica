import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { Tendencias } from "./components/tendencias/Tendencias";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Tendencias />
    </div>
  );
}

export default App;
