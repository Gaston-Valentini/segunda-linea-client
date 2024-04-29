import style from "./Navbar.module.css";
import logo from "../../assets/images/logo-gold.png";
import DecoratorDoble from "../DecoratorDoble/DecoratorDouble";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const location = useLocation();

    const [menuOpen, setMenuOpen] = useState(false);

    const switchMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={style.container}>
            <div className={style.menu} onClick={switchMenu}>
                <hr className={style.menuTop} />
                <hr className={style.menuMiddle} />
                <hr className={style.menuBottom} />
            </div>
            <div className={style.logo}>
                <img src={logo} />
            </div>
            <ul className={style.links}>
                <li className={style.linksElement}>
                    <Link to="/" className={location.pathname === "/" ? `${style.linksElementLink} ${style.linksElementLinkActive}` : style.linksElementLink}>
                        INICIO
                    </Link>
                </li>
                <li className={style.linksElement}>
                    <Link to="/about" className={location.pathname === "/about" ? `${style.linksElementLink} ${style.linksElementLinkActive}` : style.linksElementLink}>
                        SOBRE NOSOTROS
                    </Link>
                </li>
                <li className={style.linksElement}>
                    <Link to="/menu" className={location.pathname === "/menu" ? `${style.linksElementLink} ${style.linksElementLinkActive}` : style.linksElementLink}>
                        MENU
                    </Link>
                </li>
                <li className={style.linksElement}>
                    <Link to="/contact" className={location.pathname === "/contact" ? `${style.linksElementLink} ${style.linksElementLinkActive}` : style.linksElementLink}>
                        CONTACTO
                    </Link>
                </li>
            </ul>
            <div className={menuOpen ? style.menuMobileActive : style.menuMobile}>
                <div className={style.menuMobileClose} onClick={switchMenu}>
                    <hr className={style.menuMobileCloseOne} />
                    <hr className={style.menuMobileCloseTwo} />
                </div>
                <ul className={style.menuMobileLinks}>
                    <DecoratorDoble />
                    <li className={style.menuMobileLinksElement} onClick={switchMenu}>
                        <Link to="/" className={style.menuMobileLinksElementLink}>
                            INICIO
                        </Link>
                    </li>
                    <li className={style.menuMobileLinksElement} onClick={switchMenu}>
                        <Link to="/about" className={style.menuMobileLinksElementLink}>
                            SOBRE NOSOTROS
                        </Link>
                    </li>
                    <li className={style.menuMobileLinksElement} onClick={switchMenu}>
                        <Link to="/menu" className={style.menuMobileLinksElementLink}>
                            MENÚ
                        </Link>
                    </li>
                    <li className={style.menuMobileLinksElement} onClick={switchMenu}>
                        <Link to="/contact" className={style.menuMobileLinksElementLink}>
                            CONTACTO
                        </Link>
                    </li>
                    <DecoratorDoble />
                </ul>
            </div>
        </nav>
    );
}
