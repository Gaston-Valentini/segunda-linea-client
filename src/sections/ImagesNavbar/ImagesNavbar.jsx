import style from "./ImagesNavbar.module.css";
import { Link } from "react-router-dom";
import menuImage from "../../assets/images/menu.webp";
import aboutImage from "../../assets/images/about.webp";
import contactImage from "../../assets/images/contact.webp";
import { IoArrowForwardSharp } from "react-icons/io5";

export default function ImagesNavbar() {
    return (
        <section className={style.container}>
            <Link to="/menu" className={style.element} style={{ backgroundImage: `url(${menuImage})` }}>
                <div className={style.overlay}>
                    <div className={style.elementTag}>
                        <p className={style.elementTagText}>MENÚ</p>
                        <IoArrowForwardSharp className={style.elementTagIcon} />
                    </div>
                </div>
            </Link>
            <Link to="/about" className={style.element} style={{ backgroundImage: `url(${aboutImage})` }}>
                <div className={style.overlay}>
                    <div className={style.elementTag}>
                        <p className={style.elementTagText}>NUESTRO RESTAURANTE</p>
                        <IoArrowForwardSharp className={style.elementTagIcon} />
                    </div>
                </div>
            </Link>
            <Link to="/contact" className={style.element} style={{ backgroundImage: `url(${contactImage})` }}>
                <div className={style.overlay}>
                    <div className={style.elementTag}>
                        <p className={style.elementTagText}>CONTACT</p>
                        <IoArrowForwardSharp className={style.elementTagIcon} />
                    </div>
                </div>
            </Link>
        </section>
    );
}
