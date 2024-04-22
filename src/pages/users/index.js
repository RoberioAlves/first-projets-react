import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Avatar from '../../assests/avatar.svg'
import Arrow from '../../assests/arrow.svg'
import Trash from '../../assests/trash.svg'
import H1 from '../../components/Titles'
import ContainerItens from '../../components/pagesitens'

import { Container, Button, Imagen, User } from './styles'

//JSX
const Users = () => {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }

    fetchsers()

  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId);
    setUsers(newUsers)
  }

  function goBackPage() {
    navigate('/')
  }

  return (
    <Container>
      <Imagen alt='Logo-imagem' src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {
            users.map((user) => (
              <User key={user.id}>
                <p> {user.name}</p> <p>{user.age}</p>
                <button onClick={() => deleteUser(user.id)}><img alt="Lixeira(trash)" src={Trash} /></button>
              </User>
            ))

          }
        </ul>

        <Button onClick={goBackPage} > <img alt='Seta' src={Arrow} /> Voltar </Button>

      </ContainerItens>
    </Container>)
}

export default Users