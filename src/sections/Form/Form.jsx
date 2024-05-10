import style from "./Form.module.css";
import DecoratorLeft from "../../components/DecoratorLeft/DecoratorLeft";
import DecoratorRight from "../../components/DecoratorRight/DecoratorRight";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [message, setMessage] = useState();

    const formRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result);
                    setMessage(200);
                    setTimeout(() => {
                        setConfirmMessage("");
                    }, 5000);
                },
                (error) => {
                    console.log(error);
                    setConfirmMessage(400);
                    setTimeout(() => {
                        setConfirmMessage("");
                    }, 5000);
                }
            );
    };

    return (
        <section className={style.container}>
            <div className={style.title}>
                <DecoratorLeft />
                <div className={style.titleText}>ESCRÍBENOS</div>
                <DecoratorRight />
            </div>
            <form className={style.form} ref={formRef} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    className={style.formInput}
                    onChange={(e) => handleChange(e)}
                />
                <input
                    type="email"
                    placeholder="Correo"
                    name="email"
                    className={style.formInput}
                    onChange={(e) => handleChange(e)}
                />
                <textarea placeholder="Mensaje" name="message" className={style.formTextarea} onChange={(e) => handleChange(e)} />
                <input
                    type="submit"
                    value="Enviar"
                    className={style.formSend}
                    disabled={!Object.values(form).every((value) => value)}
                />
                {message && message === 200 ? <p className={style.formMessageOk}>Correo enviado correctamente</p> : <></>}
                {message && message !== 200 ? (
                    <p className={style.formMessageBad}>Ha ocurrido un error, porfavor inténtalo nuevamente más tarde</p>
                ) : (
                    <></>
                )}
            </form>
        </section>
    );
}
