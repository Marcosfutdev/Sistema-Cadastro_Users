import React from "react";
// import the img Banner Cadastro
import ImgCadastro from '../../assets/cadastrar_people.png';
import {ArrowDownOutline} from 'react-ionicons'
// style
import styles from './styles.module.css';
const BannerCadastro = () => {
    return(
        <div id={styles.bannerCadastro}>
            <img src={ImgCadastro} alt="img_cadastro" />
             <ArrowDownOutline color="white" height='40px'  width='100px'/>
        </div>
    )
}
export default BannerCadastro;