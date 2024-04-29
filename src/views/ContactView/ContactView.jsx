import style from "./ContactView.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import headerImage from "../../assets/images/contact.webp";
import Form from "../../sections/Form/Form";

export default function ContactView() {
    return (
        <section className={style.container}>
            <SectionHeader title="CONTACTO" background={headerImage} />
            <div className={style.invisible}></div>
            <div className={style.content}>
                <Form />
            </div>
        </section>
    );
}
