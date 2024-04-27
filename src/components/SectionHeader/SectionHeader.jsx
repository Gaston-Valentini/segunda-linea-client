import style from "./SectionHeader.module.css";
import Navbar from "../Navbar/Navbar";

export default function SectionHeader({ title, background }) {
    return (
        <section className={style.container} style={{ backgroundImage: `url(${background})` }}>
            <div className={style.overlay}>
                <Navbar />
                <p className={style.title}>{title}</p>
            </div>
        </section>
    );
}
