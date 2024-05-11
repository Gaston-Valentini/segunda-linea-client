import style from "./Gallery.module.css";
import image1 from "../../assets/images/gallery1.jpg";
import image2 from "../../assets/images/gallery2.jpg";
import image3 from "../../assets/images/gallery3.jpg";
import image4 from "../../assets/images/gallery4.jpg";
import { FaInstagram } from "react-icons/fa";

export default function Gallery() {
    return (
        <section className={style.container}>
            <div className={style.image} style={{ backgroundImage: `url(${image1})` }}>
                <a href="https://www.instagram.com/explore/locations/167720516435617/segundalinea-gastrobar/" target="blank" className={style.overlay}>
                    <FaInstagram className={style.icon} />
                </a>
            </div>
            <div className={style.image} style={{ backgroundImage: `url(${image2})` }}>
                <a href="https://www.instagram.com/explore/locations/167720516435617/segundalinea-gastrobar/" target="blank" className={style.overlay}>
                    <FaInstagram className={style.icon} />
                </a>
            </div>
            <div className={style.image} style={{ backgroundImage: `url(${image3})` }}>
                <a href="https://www.instagram.com/explore/locations/167720516435617/segundalinea-gastrobar/" target="blank" className={style.overlay}>
                    <FaInstagram className={style.icon} />
                </a>
            </div>
            <div className={style.image} style={{ backgroundImage: `url(${image4})` }}>
                <a href="https://www.instagram.com/explore/locations/167720516435617/segundalinea-gastrobar/" target="blank" className={style.overlay}>
                    <FaInstagram className={style.icon} />
                </a>
            </div>
        </section>
    );
}
