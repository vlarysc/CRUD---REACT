import React, { Component } from 'react';

class Users extends Component {

  render() {
    return (
      <tr>
        <td> {this.props.id} </td>
        <td> {this.props.name} </td>
        <td> {this.props.nickName} </td>
        <td> {this.props.email} </td>
        <td> {this.props.phone} </td>
        <td> {this.props.vocation} </td>
      </tr>
    );
  }
}

export default Users;