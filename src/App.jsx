import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Menu from "./views/Menu";
import Contact from "./views/Contact";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}
