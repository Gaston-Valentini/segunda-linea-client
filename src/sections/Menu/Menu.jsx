import style from "./Menu.module.css";
import { menuStarters } from "../../data/data";
import DecoratorLeft from "../../components/DecoratorLeft/DecoratorLeft";
import DecoratorRight from "../../components/DecoratorRight/DecoratorRight";
import Plate from "../../components/Plate/Plate";
import { useEffect, useState } from "react";

export default function Menu() {
    const [starters, setStarters] = useState([]);

    const SCROLL_OFFSET = 30;

    const handleNavLinkClick = (event, targetId) => {
        event.preventDefault();

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const adjustedPosition = targetPosition - SCROLL_OFFSET;

            window.scrollTo({
                top: adjustedPosition,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        setStarters(menuStarters);
    }, []);

    return (
        <section className={style.container}>
            <ul className={style.navbar}>
                <li className={style.navbarElement}>
                    <p onClick={(e) => handleNavLinkClick(e, "starters")} className={style.navbarElementLink}>
                        ENTRANTES
                    </p>
                </li>
                <li className={style.navbarElement}>
                    <p onClick={(e) => handleNavLinkClick(e, "mains")} className={style.navbarElementLink}>
                        PRINCIPALES
                    </p>
                </li>
                <li className={style.navbarElement}>
                    <p onClick={(e) => handleNavLinkClick(e, "desserts")} className={style.navbarElementLink}>
                        POSTRES
                    </p>
                </li>
                <li className={style.navbarElement}>
                    <p onClick={(e) => handleNavLinkClick(e, "cocktails")} className={style.navbarElementLink}>
                        CÓCTELES
                    </p>
                </li>
            </ul>
            <div className={style.menu}>
                <div className={style.menuSection} id="starters">
                    <div className={style.menuSectionTitle}>
                        <DecoratorLeft />
                        <p className={style.menuSectionTitleText}>ENTRANTES</p>
                        <DecoratorRight />
                    </div>
                    <div className={style.menuSectionPlates}>
                        {starters.map((plate) => (
                            <Plate key={plate.id} name={plate.name} description={plate.description} price={plate.price} image={"https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp"} />
                        ))}
                    </div>
                </div>
                <div className={style.menuSection} id="mains">
                    <div className={style.menuSectionTitle}>
                        <DecoratorLeft />
                        <p className={style.menuSectionTitleText}>PRINCIPALES</p>
                        <DecoratorRight />
                    </div>
                    <div className={style.menuSectionPlates}>
                        {starters.map((plate) => (
                            <Plate key={plate.id} name={plate.name} description={plate.description} price={plate.price} image={"https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp"} />
                        ))}
                    </div>
                </div>
                <div className={style.menuSection} id="desserts">
                    <div className={style.menuSectionTitle}>
                        <DecoratorLeft />
                        <p className={style.menuSectionTitleText}>POSTRES</p>
                        <DecoratorRight />
                    </div>
                    <div className={style.menuSectionPlates}>
                        {starters.map((plate) => (
                            <Plate key={plate.id} name={plate.name} description={plate.description} price={plate.price} image={"https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp"} />
                        ))}
                    </div>
                </div>
                <div className={style.menuSection} id="cocktails">
                    <div className={style.menuSectionTitle}>
                        <DecoratorLeft />
                        <p className={style.menuSectionTitleText}>CÓCTELES</p>
                        <DecoratorRight />
                    </div>
                    <div className={style.menuSectionPlates}>
                        {starters.map((plate) => (
                            <Plate key={plate.id} name={plate.name} description={plate.description} price={plate.price} image={"https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp"} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
