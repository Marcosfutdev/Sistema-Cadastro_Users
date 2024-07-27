import React, { useEffect } from "react";
import { useState } from "react";
//style
import styles from './styles.module.css';

const FormCadastro = () => {

    const [data, setData] = useState({
        image:'',
        firstName:'',
        lastName:'',
        email:'',
        idade:'',
        mes_ano:'',
    });

    // deletar
  /*  const [showWarning, setShowWarning] = useState({
        image:false,
        firstName:false,
        lastName:false,
        email:false,
        idade:false,
        mes_ano:false,
    });*/

     // utilizei vários estados para cada campo
    //por conta que na forma de objetos, 
    //estava
    // tendo uma propragação de eventos,
    //dentro do useEffect, só a última
    // função de validação funcionava! 
    //validando apenas o campo de mes_ano
    const [visibleWarningImg, setWarningVisibleImg] = useState(false);
    const [visibleWarningFirstName, setWarningVisibleFirstName] = useState(false);
    const [visibleWarningLastName, setVisibleWarningLastName] = useState(false);
    const [visibleWarningEmail, setVisibleWarningEmail] = useState(false);
    const [visibleWarningIdade, setVisibleWarningIdade] = useState(false);
    const [visibleWarningMesAno, setVisibleWarningMesAno] = useState(false);
    const handleChange = (e) => {
        const {value, name} = e.target;
        setData({
            ...data,
            [name]:value
        })
    }

    const validacaoBotao = () => {
        if(data.image === '' || data.firstName === '' ||  data.lastName === '' ||
            data.email === '' || data.idade === '' || data.mes_ano === '') {
            return true;
        }
        return false;
    }

    const cadastrar = async (e) => {
        e.preventDefault();
        const confirmar = confirm('Deseja mesmo salvar esses dados?');

       if(confirmar === true && data.image !== '' && data.firstName !== '' && data.lastName !== ''
        && data.email !== '' && data.idade !== '' && data.mes_ano !== '' && data.mes_ano !== 'selecione') {
            const newObject = data;
           await fetch('http://localhost:5000/users', {
                method:"POST",
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify(newObject)            
            })
            .then((response) => response)
            .then((data) => data)
            .catch((error) => error)

            setData({
                image:'',
                firstName:'',
                lastName:'',
                email:'',
                idade:'',
                mes_ano:'',
            })
       }
       
       return;
    }      
        useEffect(() => {
        // validando o campo de image
        const validImg = () => {
            if(data.image === ''){
                setWarningVisibleImg(true);
            }
            else {
                 setWarningVisibleImg(false);
            }
        }
         // validando o campo de firstName
         const validFirstName = () => {
            if(data.firstName === ''){
                setWarningVisibleFirstName(true);
            }
            else{
                setWarningVisibleFirstName(false);
            }
         }
        // validando o campo de lastName
        const validLastName = () => {
            if(data.lastName === ''){
               setVisibleWarningLastName(true);
            }
            else {
               setVisibleWarningLastName(false);
            }
        }
        // validando o campo de email
        const validEmail = () => {
            if(data.email === ''){
                setVisibleWarningEmail(true);
            }
            else{
               setVisibleWarningEmail(false);
            }
        }
        // validando o campo de idade
       const validIdade = () => {
        if(data.idade === ''){
            setVisibleWarningIdade(true);
        }
        else{
           setVisibleWarningIdade(false);
        }
       }
        // validando o campo de meses || ano
      const validMesAno = () => {
        if(data.mes_ano === '' || data.mes_ano === 'selecione'){
            setVisibleWarningMesAno(true);
        }
        else{
            setVisibleWarningMesAno(false);
        }
      }
      validImg();
      validFirstName();
      validLastName();
      validEmail();
      validIdade();
      validMesAno();
    }, [data.image, data.firstName, data.lastName, data.email, data.idade, data.mes_ano]) 
      
        


    return(
        <form className={styles.formCadastro}>
            <label htmlFor="image">Link da foto do usuário</label>
            <input type="text" onChange={ handleChange } value={data.image} name="image"/>
            {visibleWarningImg &&  <p style={{color:"red"}} >Preencha este campo!*</p> }

            <label htmlFor="firstName">Primeiro nome</label>
            <input type="text" onChange={ handleChange } value={data.firstName} name="firstName"/>
            {visibleWarningFirstName && <p style={{color:"red"}}>Preencha este campo!*</p>}

            <label htmlFor="lastName">Último nome</label>
            <input type="text" onChange={ handleChange } value={data.lastName} name="lastName"/>
             {visibleWarningLastName &&  <p style={{color:"red"}}>Preencha este campo!*</p>}

            <label htmlFor="email">Email</label>
            <input type="text" onChange={ handleChange} value={data.email} name="email"/>
            {visibleWarningEmail && <p style={{color:"red"}}>Preencha este campo!*</p>}

            <label htmlFor="idade" >Idade</label>
            <input type="number" onChange={ handleChange } value={data.idade} name="idade"/>
            {visibleWarningIdade && <p style={{color:"red"}}>Preencha este campo!*</p>}

           <div className={styles.select}>
            {visibleWarningMesAno && <p  style={{color:"red"}}>Escolha se é meses ou anos</p>}
            <select onChange={ handleChange } value={data.mes_ano} required="required" name="mes_ano">
                <option value="selecione">Selecione</option>
                <option value="meses">Meses</option>
                <option value="anos">Anos</option>
            </select>
           </div>
            <button onClick={cadastrar} disabled={validacaoBotao()}>Cadastrar Usuário</button>
        </form>
    );
}
export default FormCadastro;