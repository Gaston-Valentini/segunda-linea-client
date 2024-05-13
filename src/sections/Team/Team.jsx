import style from "./Team.module.css";
import DecoratorLeft from "../../components/DecoratorLeft/DecoratorLeft";
import DecoratorRight from "../../components/DecoratorRight/DecoratorRight";
import tiramisu from "../../assets/images/menu/desserts-tiramisu.jpg";
import empanadas from "../../assets/images/menu/starters-empanadas.jpg";
import calamar from "../../assets/images/menu/sea-calamar-plancha.jpg";

export default function Team() {
    return (
        <section className={style.container}>
            <div className={style.title}>
                <DecoratorLeft />
                <p className={style.titleText}>NUESTRAS ESPECIALIDADES</p>
                <DecoratorRight />
            </div>
            <div className={style.cards}>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardImage}>
                        <img src={tiramisu} />
                    </div>
                    <p className={style.cardsCardName}>TIRAMISÚ</p>
                    <p className={style.cardsCardDescription}>Tiramisú tradicional con capas de bizcocho empapadas en café y una crema suave de mascarpone.</p>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardImage}>
                        <img src={empanadas} />
                    </div>
                    <p className={style.cardsCardName}>EMPANADA ARGENTINA</p>
                    <p className={style.cardsCardDescription}>Una empanada típica argentina, rellena de carne picada y sazonada con especias. Un bocado delicioso con un toque internacional.</p>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardImage}>
                        <img src={calamar} />
                    </div>
                    <p className={style.cardsCardName}>CALAMAR NACIONAL A LA PLANCHA</p>
                    <p className={style.cardsCardDescription}>Calamar fresco cocinado a la plancha con ajo y aceite de oliva. Un plato ligero pero con un sabor profundo.</p>
                </div>
            </div>
        </section>
    );
}
