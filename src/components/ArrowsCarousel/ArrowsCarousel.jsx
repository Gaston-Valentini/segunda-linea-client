import style from "./ArrowsCarousel.module.css";
import image1 from "../../assets/images/about.webp";
import image2 from "../../assets/images/contact.webp";
import image3 from "../../assets/images/menu.webp";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

export default function ArouwsCarousel() {
    const [position, setPosition] = useState(1);

    const onLeft = () => {
        switch (position) {
            case 1:
                setPosition(3);
                break;
            case 2:
                setPosition(1);
                break;
            case 3:
                setPosition(2);
                break;
            default:
                break;
        }
    };

    const onRight = () => {
        switch (position) {
            case 1:
                setPosition(2);
                break;
            case 2:
                setPosition(3);
                break;
            case 3:
                setPosition(1);
                break;
            default:
                break;
        }
    };

    const getTranslateValue = () => {
        switch (position) {
            case 1:
                return "0%";
            case 2:
                return "calc(-100% / 3)";
            case 3:
                return "calc(-100% / 3 * 2)";
            default:
                return "0%";
        }
    };
    return (
        <div className={style.container}>
            <div className={style.containerBig} style={{ transform: `translateX(${getTranslateValue()})` }}>
                <img src={image1} alt="about" />
                <img src={image2} alt="contact" />
                <img src={image3} alt="menu" />
            </div>
            <div className={style.containerArrows} style={{ justifyContent: position === 1 ? "flex-end" : "space-between" }}>
                <div className={style.containerArrowsButton} onClick={onLeft} style={{ display: position === 1 ? "none" : "flex" }}>
                    <MdOutlineKeyboardArrowLeft className={style.containerArrowsButtonIcon} />
                </div>
                <div className={style.containerArrowsButton} onClick={onRight} style={{ display: position === 3 ? "none" : "flex" }}>
                    <MdOutlineKeyboardArrowRight className={style.containerArrowsButtonIcon} />
                </div>
            </div>
        </div>
    );
}
