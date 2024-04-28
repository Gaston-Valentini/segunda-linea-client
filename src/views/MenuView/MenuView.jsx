import style from "./MenuView.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import headerImage from "../../assets/images/menu-header.webp";
import Menu from "../../sections/Menu/Menu";

export default function MenuView() {
    return (
        <section className={style.container}>
            <SectionHeader title="MENÚ" background={headerImage} />
            <div className={style.invisible}></div>
            <Menu />
        </section>
    );
}
