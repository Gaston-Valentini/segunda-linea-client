import React, { useState } from "react";
import style from "./ArrowsCarousel.module.css";
import image1 from "../../assets/images/carousel1.jpg";
import image2 from "../../assets/images/carousel2.jpg";
import image3 from "../../assets/images/carousel3.jpg";
import image4 from "../../assets/images/carousel4.jpg";
import image5 from "../../assets/images/carousel5.jpg";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function ArrowsCarousel() {
    const [position, setPosition] = useState(1);

    const onLeft = () => {
        setPosition((prevPosition) => (prevPosition === 1 ? 5 : prevPosition - 1));
    };

    const onRight = () => {
        setPosition((prevPosition) => (prevPosition === 5 ? 1 : prevPosition + 1));
    };

    const getTranslateValue = () => {
        switch (position) {
            case 1:
                return "0%";
            case 2:
                return "calc(-100% / 5)";
            case 3:
                return "calc(-100% / 5 * 2)";
            case 4:
                return "calc(-100% / 5 * 3)";
            case 5:
                return "calc(-100% / 5 * 4)";
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
                <img src={image4} alt="fourth" />
                <img src={image5} alt="fifth" />
            </div>
            <div className={style.containerArrows} style={{ justifyContent: position === 1 ? "flex-end" : "space-between" }}>
                <div className={style.containerArrowsButton} onClick={onLeft} style={{ display: position === 1 ? "none" : "flex" }}>
                    <MdOutlineKeyboardArrowLeft className={style.containerArrowsButtonIcon} />
                </div>
                <div className={style.containerArrowsButton} onClick={onRight} style={{ display: position === 5 ? "none" : "flex" }}>
                    <MdOutlineKeyboardArrowRight className={style.containerArrowsButtonIcon} />
                </div>
            </div>
        </div>
    );
}
