import style from "./Story.module.css";
import DecoratorLeft from "../../components/DecoratorLeft/DecoratorLeft";
import DecoratorRight from "../../components/DecoratorRight/DecoratorRight";
import ArouwsCarousel from "../../components/ArrowsCarousel/ArrowsCarousel";

export default function Story() {
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
            <ArouwsCarousel />
        </section>
    );
}
