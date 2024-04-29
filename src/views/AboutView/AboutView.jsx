import style from "./AboutView.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import headerImage from "../../assets/images/about.webp";
import Story from "../../sections/Story/Story";
import Team from "../../sections/Team/Team";

export default function AboutView() {
    return (
        <section className={style.container}>
            <SectionHeader title="NUESTRO RESTAURANTE" background={headerImage} />
            <div className={style.invisible}></div>
            <div className={style.content}>
                <Story />
                <Team />
            </div>
        </section>
    );
}
