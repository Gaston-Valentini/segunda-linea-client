import style from "./Home.module.css";
import HomeHeader from "../../sections/HomeHeader/HomeHeader";
import ImagesNavbar from "../../sections/ImagesNavbar/ImagesNavbar";

export default function Home() {
    return (
        <section className={style.container}>
            <HomeHeader />
            <ImagesNavbar />
        </section>
    );
}
