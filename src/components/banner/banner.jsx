import React from "react";
import People from '../../assets/people.png';
// style
import styles from './styles.module.css';
const Banner = () => {
    return(
        <div id={styles.banner}>
            <div className={styles.content_banner}>
                <h1 id={styles.text_banner}>Cadastro de Usuários!</h1>
                <img src={People} alt="img_banner" id={styles.logo_people}/>
            </div>
        </div>
    )
}
export default Banner;