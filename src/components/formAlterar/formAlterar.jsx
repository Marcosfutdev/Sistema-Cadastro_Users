import React from "react";
import { useState } from "react";
import styles from './styles.module.css';
const FormAlterar = ({item, visible}) => {
    const [data, setData] = useState({
        image:item.image,
        firstName:item.firstName,
        lastName:item.lastName,
        email:item.email,
        idade:item.idade,
        mes_ano:item.mes_ano,
    });
    

    const handleChangeModif = (e) => {
       const {name, value} = e.target;
       setData({
        ...data,
         [name]:value
       })
    }
    const alterar = async (e) => {
        e.preventDefault();
        const confirmarAlteracao = confirm("Deseja alterar mesmo?");
        if(confirmarAlteracao === true && data.image !== '' && data.firstName !== '' && data.lastName !== '' && data.email !== ''
            && data.idade !== '' && data.mes_ano !== ''){
                const newObject = data;
                await fetch(`http://localhost:5000/users/${item._id}`, {
                    method:"PATCH",
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(newObject)
                })
                .then((response) => response)
                .then((data) => data) 
                .catch((error) => error)
        }
        return;
    }   
    return(
        <form style={visible ? {display:"block"} : {display:"none"}} className={styles.form}>
        <label htmlFor="image">Link da foto do usuário</label>
        <input type="text" value={data.image} name="image" onChange={handleChangeModif} />
        <label htmlFor="firstName">Primeiro nome</label>
        <input type="text" value={data.firstName} name="firstName" onChange={handleChangeModif}/>
        <br />
        <label htmlFor="lastName">Último nome</label>
        <input type="text" value={data.lastName} name="lastName" onChange={handleChangeModif}/>
        <label htmlFor="email">Email</label>
        <input type="text"  value={data.email} name="email" onChange={handleChangeModif} />
        <label htmlFor="idade" >Idade</label>
        <input type="number" value={data.idade} name="idade" onChange={handleChangeModif} />
        <select className={styles.selectAlt} value={data.mes_ano} name="mes_ano" onChange={handleChangeModif}>
            <option value="meses">meses</option>
            <option value="anos">anos</option>
        </select>
        <div className={styles.divbutton}>
        <button onClick={alterar}>Alterar Registro</button>
        </div>
    </form>
    )
}
export default FormAlterar;