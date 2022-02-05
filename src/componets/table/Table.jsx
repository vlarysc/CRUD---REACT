import React, { Component } from 'react'
import Users from '../Users'
import "./style.css"
import axios from 'axios';

class Table extends Component {
  state = {
    users: []
  }
  async componentDidMount() {
    const get = await axios.get("https://m322v8qtfj.execute-api.us-east-1.amazonaws.com/dev/users")
      .then((res) => res)
      .catch((err) => err)
    this.setState({ users: get.data })
  }
  render() {
    const { users } = this.state;
    return (
      <table border="1">
        <thead>
          <tr>
            <th className="id">ID</th>
            <th className="name">Nome</th>
            <th className="nickName">Sobrenome</th>
            <th className="email">E-mail</th>
            <th className="phone">Telefone</th>
            <th className="vacation">Ferias</th>
          </tr>
          {users.map((user, index) => {
            if (user.vocation === true) {
              user.vocation = "On"
            } else {
              user.vocation = "Off"
            }
            return (
              <Users key={index} id={user.userId} name={user.name} nickName={user.nickName} email={user.email} phone={user.phone} vocation={user.vocation} />
            )
          })}
        </thead>

      </table>
    )
  }
}

export default Table;