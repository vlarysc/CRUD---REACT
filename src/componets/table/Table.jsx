import React, { Component } from 'react'
import Users from '../Users'
import "./style.css"

class Table extends Component {

  render() {
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
          {this.props.users.map((user, index) => {
            return (
              <Users key={index} id={user.id} name={user.name} nickName={user.nickName} email={user.email} phone={user.phone} vocation={user.vocation} />
            )
          })}
        </thead>

      </table>
    )
  }
}

export default Table;