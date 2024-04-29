import style from "./Form.module.css";
import DecoratorLeft from "../../components/DecoratorLeft/DecoratorLeft";
import DecoratorRight from "../../components/DecoratorRight/DecoratorRight";

export default function Form() {
    return (
        <section className={style.container}>
            <div className={style.title}>
                <DecoratorLeft />
                <div className={style.titleText}>ESCRÍBENOS</div>
                <DecoratorRight />
            </div>
            <div className={style.form}>
                <input type="text" placeholder="Nombre" className={style.formInput} />
                <input type="email" placeholder="Correo" className={style.formInput} />
                <textarea placeholder="Mensaje" className={style.formTextarea} />
                <input type="submit" value="Enviar" className={style.formSend} />
            </div>
        </section>
    );
}
