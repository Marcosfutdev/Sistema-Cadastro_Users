import React from "react";
import { useState, useEffect } from "react";
// style
import styles from './styles.module.css';
// import the component User
import User from '../../components/user/user'
const Users = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/users', {
        method:"GET",
        headers:{
          'Content-Type':'application/json'
        }
      })
      .then((response)=> response.json())
      .then((data) => setData(data))
      .catch((error) => error)
    }, [data])

    return(
        <div className={styles.componentuser}>
          <div id={styles.contentUsers}>
            <h1>Esses são os usuários cadastrados no sistema:</h1>
            <p>Você pode alterar ou remover um registro!</p>
          </div>
          <div className={styles.users}>
            {
               data.length > 0 ?  data.map((item) => (
                <User item={item} key={item.firstName}/>
            )) :
            <p style={{marginTop:"20px"}}>Sem usuários no sistema</p>
            }
          </div>
        </div>
    )
}
export default Users;