import style from "./HomeView.module.css";
import HomeHeader from "../../sections/HomeHeader/HomeHeader";
import ImagesNavbar from "../../sections/ImagesNavbar/ImagesNavbar";

export default function HomeView() {
    return (
        <section className={style.container}>
            <HomeHeader />
            <ImagesNavbar />
        </section>
    );
}
