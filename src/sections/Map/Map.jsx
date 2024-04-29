import style from "./Map.module.css";
import MapComponent from "../../components/Map/Map";
import { IoArrowForwardSharp } from "react-icons/io5";

export default function Map() {
    return (
        <section className={style.container}>
            <div className={style.map}>
                <MapComponent />
            </div>
            <a href="https://www.google.com/maps/place/SegundaLinea+GastroBar/@38.5340578,-0.1565518,19z/data=!4m7!3m6!1s0xd621b0061aa3399:0x4d5e550c257d3734!4b1!8m2!3d38.5344894!4d-0.1561758!16s%2Fg%2F11vs2f1nw2?hl=es-ES&entry=ttu" target="_blank" className={style.tag}>
                <p className={style.tagText}>VER RUTA</p>
                <IoArrowForwardSharp className={style.tagIcon} />
            </a>
        </section>
    );
}
