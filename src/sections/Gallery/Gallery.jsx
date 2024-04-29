import style from "./Gallery.module.css";
import { FaInstagram } from "react-icons/fa";

export default function Gallery() {
    return (
        <section className={style.container}>
            <div className={style.image} style={{ backgroundImage: "url('https://framerusercontent.com/images/vxv0b6kr0qVZBW6QfrjLyYEHfxQ.webp')" }}>
                <a href="#" className={style.overlay}>
                    <FaInstagram className={style.icon} />
                </a>
            </div>
            <div className={style.image} style={{ backgroundImage: "url('https://framerusercontent.com/images/ZM8uTOLkdF1KBhpdRUj3MFzkCIM.webp')" }}>
                <a href="#" className={style.overlay}>
                    <FaInstagram className={style.icon} />
                </a>
            </div>
            <div className={style.image} style={{ backgroundImage: "url('https://framerusercontent.com/images/5MZ021glbQW94mvUOxalCyrZkY.webp')" }}>
                <a href="#" className={style.overlay}>
                    <FaInstagram className={style.icon} />
                </a>
            </div>
            <div className={style.image} style={{ backgroundImage: "url('https://framerusercontent.com/images/Rh7B5c6lHXPxmiGfzpWOdSYW5M.webp')" }}>
                <a href="#" className={style.overlay}>
                    <FaInstagram className={style.icon} />
                </a>
            </div>
        </section>
    );
}
