import style from "./DecoratorRight.module.css";

export default function DecoratorRight() {
    return (
        <section className={style.container}>
            <hr className={style.line} />
            <div className={style.cube}></div>
        </section>
    );
}
