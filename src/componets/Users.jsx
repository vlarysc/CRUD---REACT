import React, { Component } from 'react';

class Users extends Component {

  render() {
    return (
      <tr>
        <td> {this.props.name} </td>
        <td> {this.props.nickName} </td>
      </tr>
    );
  }
}

export default Users;