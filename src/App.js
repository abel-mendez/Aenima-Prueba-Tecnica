import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { Tendencias } from "./components/tendencias/Tendencias";
import { Footer } from "./components/footer/Footer";
import { Blog } from "./components/blog/Blog";

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
