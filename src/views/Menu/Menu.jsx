import style from "./Menu.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import headerImage from "../../assets/images/menu-header.webp";

export default function Menu() {
    return (
        <section className={style.container}>
            <SectionHeader title="MENÚ" background={headerImage} />
        </section>
    );
}
