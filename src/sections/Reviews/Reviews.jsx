import style from "./Reviews.module.css";
import DecoratorLeft from "../../components/DecoratorLeft/DecoratorLeft";
import DecoratorRight from "../../components/DecoratorRight/DecoratorRight";
import { IoStarSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [position, setPosition] = useState(1);

    const getReviews = async () => {
        await fetch("https://segunda-linea-server.vercel.app/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data.data))
            .catch((error) => console.log(error));
    };

    const moveReview = (index) => {
        switch (index) {
            case 1:
                setPosition(1);
                break;
            case 2:
                setPosition(2);
                break;
            case 3:
                setPosition(3);
                break;
            case 4:
                setPosition(4);
                break;
            case 5:
                setPosition(5);
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
                return "calc(-100%)";
            case 3:
                return "calc(-200%)";
            case 4:
                return "calc(-300%)";
            case 5:
                return "calc(-400%)";
            default:
                return "0%";
        }
    };

    useEffect(() => {
        getReviews();
    }, []);

    return (
        <section className={style.container}>
            <div className={style.title}>
                <DecoratorLeft />
                <p className={style.titleText}>NUESTROS CLIENTES</p>
                <DecoratorRight />
            </div>
            <div className={style.reviews}>
                <div className={style.reviewsBig}>
                    {reviews.map((review, index) => (
                        <div key={index} className={style.reviewsBigCard} style={{ transform: `translateX(${getTranslateValue()})` }}>
                            <p className={style.reviewsBigCardName}>{review.author_name}</p>
                            <div className={style.reviewsBigCardRating}>
                                {Array.from({ length: review.rating }, (_, index) => (
                                    <IoStarSharp key={index} />
                                ))}
                            </div>
                            <p className={style.reviewsBigCardText}>{review.text}</p>
                            <p className={style.reviewsBigCardTime}>{review.relative_time_description}</p>
                        </div>
                    ))}
                </div>
                <div className={style.reviewsDots}>
                    {reviews.map((review, index) => (
                        <div key={index} className={style.reviewsDotsDot} style={position === index + 1 ? { backgroundColor: "var(--white)" } : {}} onClick={() => moveReview(index + 1)}></div>
                    ))}
                </div>
            </div>
        </section>
    );
}
