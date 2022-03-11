import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { Tendencias } from "./components/tendencias/Tendencias";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Tendencias />
      <Footer />
    </div>
  );
}

export default App;
