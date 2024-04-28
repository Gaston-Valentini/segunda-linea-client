import style from "./Plate.module.css";

export default function Plate({ name, description, price, image }) {
    return (
        <section className={style.container}>
            <div className={style.image}>
                <img src={image} />
            </div>
            <div className={style.data}>
                <div className={style.dataPrincipal}>
                    <p className={style.dataPrincipalName}>{name}</p>
                    <hr className={style.dataPrincipalDivisor} />
                    <p className={style.dataPrincipalPrice}>{price}€</p>
                </div>
                <p className={style.dataDescription}>{description}</p>
            </div>
        </section>
    );
}
