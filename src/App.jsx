import Form from "./componets/form/Form";
import Table from "./componets/Table";
import React, { Component } from 'react';
import "./App.css"


class App extends Component {
  constructor() {
    super()

    this.state = {
      users: []
    }
  }

  submit(name, nickName) {
    const newUser = {
      name,
      nickName
    }
    const newArray = [...this.state.users, newUser]
    const newState = {
      users: newArray
    }
    /* this.users.push(newUser)
    console.log(this.users) */
    this.setState(newState)
    /* return newUser */
  }

  render() {
    return (
      <section>
        <Form submit={this.submit.bind(this)} />
        <Table className="table" users={this.state.users} />
      </section>
    );
  }
}

export default App;
