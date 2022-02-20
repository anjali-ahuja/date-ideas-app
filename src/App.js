import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import About from "./components/pages/AboutPage/About";
import Footer from "./components/Footer";
import Contact from "./components/pages/ContactPage/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Routes></Routes>
      <Footer />
    </Router>
  );
}

export default App;
