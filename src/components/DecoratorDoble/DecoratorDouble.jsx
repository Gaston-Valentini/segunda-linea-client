import style from "./DecoratorDouble.module.css";

export default function DecoratorDoble() {
    return (
        <section className={style.container}>
            <div className={style.cube}></div>
            <hr className={style.line} />
            <div className={style.cube}></div>
        </section>
    );
}
