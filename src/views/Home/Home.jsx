import style from "./Home.module.css";
import HomeHeader from "../../sections/HomeHeader/HomeHeader";

export default function Home() {
    return (
        <section className={style.container}>
            <HomeHeader />
            <div style={{ backgroundColor: "red" }}>Element</div>
        </section>
    );
}
