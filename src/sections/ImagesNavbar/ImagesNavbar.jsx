import style from "./ImagesNavbar.module.css";
import { Link } from "react-router-dom";
import menuImage from "../../assets/images/home-menu.jpg";
import aboutImage from "../../assets/images/home-about.jpg";
import contactImage from "../../assets/images/home-contact.jpg";
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
                        <p className={style.elementTagText}>CONTACTO</p>
                        <IoArrowForwardSharp className={style.elementTagIcon} />
                    </div>
                </div>
            </Link>
        </section>
    );
}
