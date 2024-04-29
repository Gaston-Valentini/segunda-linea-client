import style from "./ContactData.module.css";
import DecoratorLeft from "../../components/DecoratorLeft/DecoratorLeft";
import DecoratorRight from "../../components/DecoratorRight/DecoratorRight";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function ContactData() {
    return (
        <section className={style.container}>
            <div className={style.hours}>
                <div className={style.title}>
                    <DecoratorLeft />
                    <p className={style.titleText}>HORARIOS</p>
                    <DecoratorRight />
                </div>
                <div className={style.hoursDays}>
                    <div className={style.hoursDaysDay}>
                        <p className={style.hoursDaysDayText}>Lunes</p>
                        <hr className={style.hoursDaysDayDivisor} />
                        <p className={style.hoursDaysDayNumber}>10:00 - 23:00</p>
                    </div>
                    <div className={style.hoursDaysDay}>
                        <p className={style.hoursDaysDayText}>Martes</p>
                        <hr className={style.hoursDaysDayDivisor} />
                        <p className={style.hoursDaysDayNumber}>10:00 - 23:00</p>
                    </div>
                    <div className={style.hoursDaysDay}>
                        <p className={style.hoursDaysDayText}>Miércoles</p>
                        <hr className={style.hoursDaysDayDivisor} />
                        <p className={style.hoursDaysDayNumber}>10:00 - 23:00</p>
                    </div>
                    <div className={style.hoursDaysDay}>
                        <p className={style.hoursDaysDayText}>Jueves</p>
                        <hr className={style.hoursDaysDayDivisor} />
                        <p className={style.hoursDaysDayNumber}>10:00 - 23:00</p>
                    </div>
                    <div className={style.hoursDaysDay}>
                        <p className={style.hoursDaysDayText}>Viernes</p>
                        <hr className={style.hoursDaysDayDivisor} />
                        <p className={style.hoursDaysDayNumber}>10:00 - 23:00</p>
                    </div>
                    <div className={style.hoursDaysDay}>
                        <p className={style.hoursDaysDayText}>Sábado</p>
                        <hr className={style.hoursDaysDayDivisor} />
                        <p className={style.hoursDaysDayNumber}>10:00 - 23:00</p>
                    </div>
                    <div className={style.hoursDaysDay}>
                        <p className={style.hoursDaysDayText}>Domingo</p>
                        <hr className={style.hoursDaysDayDivisor} />
                        <p className={style.hoursDaysDayNumber}>10:00 - 23:00</p>
                    </div>
                </div>
            </div>
            <div className={style.data}>
                <div className={style.title}>
                    <DecoratorLeft />
                    <p className={style.titleText}>CONTÁCTANOS</p>
                    <DecoratorRight />
                </div>
                <div className={style.dataInfo}>
                    <div className={style.dataInfoElement}>
                        <p className={style.dataInfoElementInput}>DIRECCIÓN</p>
                        <p className={style.dataInfoElementOutput}>C. Santander, 2, 03502 Benidorm, Alicante</p>
                    </div>
                    <div className={style.dataInfoElement}>
                        <p className={style.dataInfoElementInput}>TELÉFONO</p>
                        <p className={style.dataInfoElementOutput}>680827925</p>
                    </div>
                    <div className={style.dataInfoElement}>
                        <p className={style.dataInfoElementInput}>EMAIL</p>
                        <p className={style.dataInfoElementOutput}>segundalinea@gmail.com</p>
                    </div>
                    <div className={style.dataInfoElement}>
                        <p className={style.dataInfoElementInput}>SÍGUENOS</p>
                        <div className={style.dataInfoElementSocial}>
                            <a href="#">
                                <FaInstagram />
                            </a>
                            <a href="#">
                                <FaWhatsapp />
                            </a>
                            <a href="#">
                                <FaFacebookF />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
