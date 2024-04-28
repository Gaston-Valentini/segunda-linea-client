import style from "./DecoratorLeft.module.css";

export default function DecoratorLeft() {
    return (
        <section className={style.container}>
            <div className={style.cube}></div>
            <hr className={style.line} />
        </section>
    );
}
