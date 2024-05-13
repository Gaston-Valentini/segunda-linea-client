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
                    En nuestro compromiso por brindar una experiencia gastronómica excepcional, en Segunda Línea Gastrobar nos esforzamos por crear un ambiente acogedor donde nuestros clientes puedan disfrutar de momentos memorables. Nos enorgullece ofrecer un servicio ameno y cordial, respaldado por una cuidadosa selección de los mejores productos del mercado.
                    <br />
                    <br />
                    Nuestra pasión por la calidad se refleja en cada plato que servimos. Desde los ingredientes más frescos hasta las selecciones más exclusivas, nos comprometemos a superar las expectativas culinarias de quienes nos visitan. A pesar de nuestra dedicación a la excelencia, mantenemos precios accesibles sin comprometer la calidad, asegurando que cada experiencia sea verdaderamente gratificante.
                    <br />
                    <br />
                    En un mundo cada vez más digital, reconocemos el valor del boca a boca como la forma más poderosa de publicidad. Por eso, nos esforzamos por ofrecer no solo una comida deliciosa, sino también un servicio que inspire a nuestros clientes a compartir sus experiencias con amigos, familiares y colegas. Creemos en la importancia de cultivar relaciones sólidas con nuestra comunidad, y trabajamos diligentemente para garantizar que cada visita a nuestro establecimiento sea una
                    experiencia memorable digna de recomendar.
                </p>
            </div>
            <ArouwsCarousel />
        </section>
    );
}
