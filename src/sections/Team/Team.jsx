import style from "./Team.module.css";
import DecoratorLeft from "../../components/DecoratorLeft/DecoratorLeft";
import DecoratorRight from "../../components/DecoratorRight/DecoratorRight";

export default function Team() {
    return (
        <section className={style.container}>
            <div className={style.title}>
                <DecoratorLeft />
                <p className={style.titleText}>NUESTRO EQUIPO</p>
                <DecoratorRight />
            </div>
            <div className={style.cards}>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardImage}>
                        <img src="https://www.shutterstock.com/image-photo/african-american-female-chef-having-600nw-2150289105.jpg" />
                    </div>
                    <p className={style.cardsCardName}>NOMBRE APELLIDO</p>
                    <p className={style.cardsCardOcupation}>CHEF</p>
                    <p className={style.cardsCardDescription}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident adipisci veritatis minima error possimus sunt!</p>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardImage}>
                        <img src="https://www.shutterstock.com/image-photo/african-american-female-chef-having-600nw-2150289105.jpg" />
                    </div>
                    <p className={style.cardsCardName}>NOMBRE APELLIDO</p>
                    <p className={style.cardsCardOcupation}>BARMAN</p>
                    <p className={style.cardsCardDescription}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident adipisci veritatis minima error possimus sunt!</p>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardImage}>
                        <img src="https://www.shutterstock.com/image-photo/african-american-female-chef-having-600nw-2150289105.jpg" />
                    </div>
                    <p className={style.cardsCardName}>NOMBRE APELLIDO</p>
                    <p className={style.cardsCardOcupation}>CAMARERO</p>
                    <p className={style.cardsCardDescription}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident adipisci veritatis minima error possimus sunt!</p>
                </div>
            </div>
        </section>
    );
}
