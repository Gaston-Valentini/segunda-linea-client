import style from "./Story.module.css";
import DecoratorLeft from "../../components/DecoratorLeft/DecoratorLeft";
import DecoratorRight from "../../components/DecoratorRight/DecoratorRight";
import image1 from "../../assets/images/about.webp";
import image2 from "../../assets/images/contact.webp";
import image3 from "../../assets/images/menu.webp";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState, useRef } from "react";

export default function Story() {
    const [position, setPosition] = useState(1);

    const carousel = useRef(null);
    const leftButton = useRef(null);
    const rightButton = useRef(null);

    const onLeft = () => {
        switch (position) {
            case 1:
                carousel.current.style.translate = "-66.6%";
                setPosition(3);
                break;
            case 2:
                carousel.current.style.translate = "0%";
                setPosition(1);
                break;
            case 3:
                carousel.current.style.translate = "-33.3%";
                setPosition(2);
                break;
            default:
                break;
        }
    };

    const onRight = () => {
        switch (position) {
            case 1:
                carousel.current.style.translate = "-33.3%";
                setPosition(2);
                break;
            case 2:
                carousel.current.style.translate = "-66.6%";
                setPosition(3);
                break;
            case 3:
                carousel.current.style.translate = "0%";
                setPosition(1);
                break;
            default:
                break;
        }
    };

    return (
        <section className={style.container}>
            <div className={style.text}>
                <div className={style.textTitle}>
                    <DecoratorLeft />
                    <p className={style.textTitleText}>NUESTRA HISTORIA</p>
                    <DecoratorRight />
                </div>
                <p className={style.textParagraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae nisi velit. Aliquid nostrum delectus odit repellat nihil ea amet suscipit magni nobis vel maiores nesciunt sit, aperiam ex officia!
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sunt perferendis inventore ullam? Unde veniam magni error culpa. Quidem inventore commodi aut consequuntur nam soluta dicta doloribus eum reiciendis obcaecati?
                    <br />
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores saepe doloribus explicabo aliquid laboriosam. Tempore, tempora officiis! Quo deserunt dolorem exercitationem quaerat illo nemo? Deleniti amet dolores accusantium officiis quisquam.
                </p>
            </div>
            <div className={style.carousel}>
                <div className={style.carouselBig} ref={carousel}>
                    <img src={image1} />
                    <img src={image2} />
                    <img src={image3} />
                </div>
                <div className={style.carouselArrows} style={position === 1 ? { justifyContent: "flex-end" } : {}}>
                    <div className={style.carouselArrowsButton} ref={leftButton} onClick={onLeft} style={position === 1 ? { display: "none" } : {}}>
                        <MdOutlineKeyboardArrowLeft className={style.carouselArrowsButtonIcon} />
                    </div>
                    <div className={style.carouselArrowsButton} ref={rightButton} onClick={onRight} style={position === 3 ? { display: "none" } : {}}>
                        <MdOutlineKeyboardArrowRight className={style.carouselArrowsButtonIcon} />
                    </div>
                </div>
            </div>
        </section>
    );
}
