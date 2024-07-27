import React from "react";
import {Link} from 'react-router-dom';
//style
import styles from './styles.module.css';
// import the logo
import Logo from '../../assets/logo1.png'
const Navbar = () => {
    return(
        <nav style={styles.nav}>
            <img src={Logo} alt="logo" id={styles.logo} />
             <div className={styles.links}>
                <Link to={'/'} className={styles.link}>Início</Link>
                <Link to={'/cadastrar'} className={styles.link}>Cadastrar</Link>
             </div>
        </nav>
    )
}
export default Navbar;