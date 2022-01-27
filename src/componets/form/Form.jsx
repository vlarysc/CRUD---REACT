import React, { Component } from 'react'
import "./style.css"

class Form extends Component {
  constructor(props) {
    super(props)
    this.name = ""
    this.nickName = ""
    this.users = []
  }
  modelName(e) {
    this.name = e.target.value
  }
  modelNickName(e) {
    this.nickName = e.target.value
  }
  submit(e) {
    e.preventDefault()
    this.props.submit(this.name, this.nickName)
    /*  let newUser = {
       "name": this.name,
       "nickName": this.nickName
     }
     this.users.push(newUser)
     console.log(this.users)
     /* return newUser */
  }
  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <input onChange={this.modelName.bind(this)} className="name" type="text" placeholder="Nome" />
        <input onChange={this.modelNickName.bind(this)} className="nickName" type="text" placeholder="Sobrenome" />
        <button>Novo Usuário</button>
      </form>
    )
  }
}

export default Form;