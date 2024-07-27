import React from "react";
// import components
import BannerCadastro from "../../components/bannnerCadastro/bannerCadastro";
import FormCadastro from "../../components/form/formCadastro";
// style
import styles from './styles.module.css';
const Cadastrar = () => {
    return(
        <main className={styles.cadastro}>
         <BannerCadastro/>
         <FormCadastro/>
        </main>
    );
}
export default Cadastrar;