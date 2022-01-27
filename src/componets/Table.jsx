import React, { Component } from 'react'
import Users from './Users'

class Table extends Component {

  render() {
    return (
      <table border="1">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
          </tr>
          {this.props.users.map((user, index) => {
            return (

              <Users key={index} name={user.name} nickName={user.nickName} />

            )
          })}
        </thead>

      </table>
    )
  }
}

export default Table;