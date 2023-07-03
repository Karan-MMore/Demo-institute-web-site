import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Fullstack from "./cources/Fullstack";
import Cloud from "./cources/Cloud";
import Footer from "./components/Footer";
import Azure from "./cources/Azure";
import Ccna from "./cources/Ccna";
import Ccnp from "./cources/Ccnp";
import Linux from "./cources/Linux";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/Azure" element={<Azure />} />
        <Route path="/Ccna" element={<Ccna />} />
        <Route path="/Ccnp" element={<Ccnp />} />
        <Route path="/Linux" element={<Linux/>} />
        {/* <Route path="/CyberHacking" element={<CyberHacking/>} /> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
