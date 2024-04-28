import style from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/HomeView/HomeView";
import About from "./views/AboutView/AboutView";
import Menu from "./views/MenuView/MenuView";
import Contact from "./views/ContactView/ContactView";

export default function App() {
    return (
        <div className={style.app}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}
