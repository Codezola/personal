import About from "./Componnent/About";
import Contact from "./Componnent/Contact";
import Footers from "./Componnent/Footer";
import Home from "./Componnent/Home";
import Navbar from "./Componnent/Navbar";
import Skills from "./Componnent/Skills";
import Work from "./Componnent/Work";


function App() {
  return (
    <div>
    
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footers />
    </div>
  );
}

export default App;