import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { Tendencias } from "./components/tendencias/Tendencias";
import { Footer } from "./components/footer/Footer";
import { Blog } from "./components/blog/Blog";
import { Menu } from "./components/navbar/Menu";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Tendencias />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
