import Form from "./componets/form/Form";
import Table from "./componets/table/Table";
import React, { Component } from 'react';
import "./App.css";



class App extends Component {
  constructor() {
    super()

    this.state = {
      users: []
    }
  }



  submit(id, name, nickName, email, phone, vocation) {
    const newUser = {
      id,
      name,
      nickName,
      email,
      phone,
      vocation
    }
    const newArray = [...this.state.users, newUser]
    const newState = {
      users: newArray
    }
    this.setState(newState)
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
