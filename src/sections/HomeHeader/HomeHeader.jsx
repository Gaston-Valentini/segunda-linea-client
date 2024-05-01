import style from "./HomeHeader.module.css";
import Navbar from "../../components/Navbar/Navbar";
import video from "../../assets/videos/home-header-background.mp4";
import logo from "../../assets/images/logo-gold.png";
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";

export default function HomeHeader() {
    const onWhatsapp = () => {
        const phone = "+34680827925";
        const message = "!Hola!, mi nombre es:";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url);
    };

    return (
        <header className={style.container}>
            <video className={style.video} autoPlay loop muted>
                <source src={video} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>
            <div className={style.content}>
                <div className={style.navbar}>
                    <Navbar />
                </div>
                <div className={style.data}>
                    <div className={style.dataImage}>
                        <img src={logo} />
                    </div>
                    <ul className={style.dataSocial}>
                        <li className={style.dataSocialElement}>
                            <a href="https://www.instagram.com/explore/locations/167720516435617/segundalinea-gastrobar/" target="blank" className={style.dataSocialElementLink}>
                                <FaInstagram className={style.dataSocialElementLinkIcon} />
                            </a>
                        </li>
                        <li className={style.dataSocialElement}>
                            <div className={style.dataSocialElementLink} onClick={onWhatsapp}>
                                <FaWhatsapp className={style.dataSocialElementLinkIcon} />
                            </div>
                        </li>
                        <li className={style.dataSocialElement}>
                            <a href="#" className={style.dataSocialElementLink}>
                                <FaFacebookF className={style.dataSocialElementLinkIcon} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
