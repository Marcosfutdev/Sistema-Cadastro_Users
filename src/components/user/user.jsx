import React, { useState } from "react";
import styles from './styles.module.css';
import FormAlterar from "../formAlterar/formAlterar";
const User = ({item}) => {
    const [visibleForm, setVisibleForm] = useState(false);
    const visibleFormModif = () => {
        setVisibleForm(!visibleForm);
    }
    const deletar = async () => {
    const confirmarDelecao = confirm("Deseja mesmo deletar o registro?");
    if(confirmarDelecao){
        let firstNome = prompt('Digite o primeiro nome para deletar!')
        if(firstNome === item.firstName){
            await fetch(`http://localhost:5000/users/${item._id}`, {
                method:"DELETE",
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then((response) => response)
            .then((data) => data)
            .catch((error) => error)
        }
        else {
            alert("Tente novamente!")
        }
    }
    return;
    }
    return(
        <div key={item._id} className={styles.user}>
            <div className={styles.content}>
                <img src={item.image} alt={item.firstName}/>
                <div className={styles.texts}>
                <h2> Primeiro nome: {item.firstName} </h2>
                 <h2> Último nome: {item.lastName} </h2>
                 <h2> Email: {item.email} </h2>
                 <h2> Idade: {item.idade} {item.mes_ano}</h2>
                </div>
            </div>
            <div className={styles.buttons}>
                <button id={styles.alterar} onClick={visibleFormModif}>{visibleForm ? 'Voltar' : 'Alterar registro' }</button>
                <button id={styles.deletar} onClick={deletar}>Deletar registro</button>
            </div>
            <FormAlterar item={item} visible={visibleForm}/>
        </div>
    );
}
export default User;