import style from "./Menu.module.css";
import { menuStarters, menuSea, menuDirt, menuGrill, menuIndividuals, menuDesserts } from "../../data/data";
import DecoratorLeft from "../../components/DecoratorLeft/DecoratorLeft";
import DecoratorRight from "../../components/DecoratorRight/DecoratorRight";
import Plate from "../../components/Plate/Plate";
import { useEffect, useState } from "react";

export default function Menu() {
    const [starters, setStarters] = useState([]);
    const [sea, setSea] = useState([]);
    const [dirt, setDirt] = useState([]);
    const [grill, setGrill] = useState([]);
    const [individuals, setIndividuals] = useState([]);
    const [desserts, setDesserts] = useState([]);

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
        setSea(menuSea);
        setDirt(menuDirt);
        setGrill(menuGrill);
        setIndividuals(menuIndividuals);
        setDesserts(menuDesserts);
    }, []);

    return (
        <section className={style.container}>
            <ul className={style.navbar}>
                <li className={style.navbarElement}>
                    <p onClick={(e) => handleNavLinkClick(e, "starters")} className={style.navbarElementLink}>
                        PARA EMPEZAR
                    </p>
                </li>
                <li className={style.navbarElement}>
                    <p onClick={(e) => handleNavLinkClick(e, "sea")} className={style.navbarElementLink}>
                        DEL MAR
                    </p>
                </li>
                <li className={style.navbarElement}>
                    <p onClick={(e) => handleNavLinkClick(e, "dirt")} className={style.navbarElementLink}>
                        DE LA TIERRA
                    </p>
                </li>
                <li className={style.navbarElement}>
                    <p onClick={(e) => handleNavLinkClick(e, "grill")} className={style.navbarElementLink}>
                        A LA PARRILLA
                    </p>
                </li>
                <li className={style.navbarElement}>
                    <p onClick={(e) => handleNavLinkClick(e, "individuals")} className={style.navbarElementLink}>
                        INDIVIDUALES
                    </p>
                </li>
                <li className={style.navbarElement}>
                    <p onClick={(e) => handleNavLinkClick(e, "desserts")} className={style.navbarElementLink}>
                        POSTRES CASEROS
                    </p>
                </li>
            </ul>
            <div className={style.menu}>
                <div className={style.menuSection} id="starters">
                    <div className={style.menuSectionTitle}>
                        <DecoratorLeft />
                        <p className={style.menuSectionTitleText}>PARA EMPEZAR</p>
                        <DecoratorRight />
                    </div>
                    <div className={style.menuSectionPlates}>
                        {starters.map((plate) => (
                            <Plate key={plate.id} name={plate.name} description={plate.description} price={plate.price} image={"https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp"} />
                        ))}
                    </div>
                </div>
                <div className={style.menuSection} id="sea">
                    <div className={style.menuSectionTitle}>
                        <DecoratorLeft />
                        <p className={style.menuSectionTitleText}>DEL MAR</p>
                        <DecoratorRight />
                    </div>
                    <div className={style.menuSectionPlates}>
                        {sea.map((plate) => (
                            <Plate key={plate.id} name={plate.name} description={plate.description} price={plate.price} image={"https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp"} />
                        ))}
                    </div>
                </div>
                <div className={style.menuSection} id="dirt">
                    <div className={style.menuSectionTitle}>
                        <DecoratorLeft />
                        <p className={style.menuSectionTitleText}>DE LA TIERRA</p>
                        <DecoratorRight />
                    </div>
                    <div className={style.menuSectionPlates}>
                        {dirt.map((plate) => (
                            <Plate key={plate.id} name={plate.name} description={plate.description} price={plate.price} image={"https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp"} />
                        ))}
                    </div>
                </div>
                <div className={style.menuSection} id="grill">
                    <div className={style.menuSectionTitle}>
                        <DecoratorLeft />
                        <p className={style.menuSectionTitleText}>A LA PARRILLA</p>
                        <DecoratorRight />
                    </div>
                    <div className={style.menuSectionPlates}>
                        {grill.map((plate) => (
                            <Plate key={plate.id} name={plate.name} description={plate.description} price={plate.price} image={"https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp"} />
                        ))}
                    </div>
                </div>
                <div className={style.menuSection} id="individuals">
                    <div className={style.menuSectionTitle}>
                        <DecoratorLeft />
                        <p className={style.menuSectionTitleText}>INDIVIDUALES</p>
                        <DecoratorRight />
                    </div>
                    <div className={style.menuSectionPlates}>
                        {individuals.map((plate) => (
                            <Plate key={plate.id} name={plate.name} description={plate.description} price={plate.price} image={"https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp"} />
                        ))}
                    </div>
                </div>
                <div className={style.menuSection} id="desserts">
                    <div className={style.menuSectionTitle}>
                        <DecoratorLeft />
                        <p className={style.menuSectionTitleText}>POSTRES CASEROS</p>
                        <DecoratorRight />
                    </div>
                    <div className={style.menuSectionPlates}>
                        {desserts.map((plate) => (
                            <Plate key={plate.id} name={plate.name} description={plate.description} price={plate.price} image={"https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp"} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
