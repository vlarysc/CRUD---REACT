import React, { Component } from 'react'
import "./style.css"
import Notify from 'simple-notify'
import 'simple-notify/dist/simple-notify.min.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.id = 0
    this.name = ""
    this.nickName = ""
    this.email = ""
    this.phone = ""
    this.vocation = false
    this.users = []
  }
  modelName(e) {
    this.name = e.target.value
  }
  modelNickName(e) {
    this.nickName = e.target.value
  }
  modelEmail(e) {
    this.email = e.target.value
  }
  modelPhone(e) {
    this.phone = e.target.value
  }
  modelVocation(e) {
    this.vocation = e.target.checked
    console.log(this.vocation)
  }
  submit(e) {
    if (this.name == "" || this.nickName == "") {
      this.pushNotify("error", "Campos Obrigatórios", "Necessário preencher todos os campos!")
      e.preventDefault()
    } else {
      e.preventDefault()
      this.id = this.id + 1
      if (this.vocation === true) {
        this.vocation = "On"
      } else {
        this.vocation = "Off"
      }
      console.log(this.vocation)
      this.props.submit(this.id, this.name, this.nickName, this.email, this.phone, this.vocation)
    }
  }
  pushNotify(status, title, text) {
    new Notify({
      status: status,
      title: title,
      text: text,
      effect: 'fade',
      speed: 300,
      customClass: null,
      customIcon: null,
      showIcon: true,
      showCloseButton: true,
      autoclose: true,
      autotimeout: 3000,
      gap: 20,
      distance: 20,
      type: 1,
      position: 'right top'
    })
  }
  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <input onChange={this.modelName.bind(this)} className="name" type="text" placeholder="Nome" />
        <input onChange={this.modelNickName.bind(this)} className="nickName" type="text" placeholder="Sobrenome" />

        <input onChange={this.modelEmail.bind(this)} className="email" type="text" placeholder="E-mail" />
        <input onChange={this.modelPhone.bind(this)} className="phone" type="text" placeholder="Telefone" />

        <label className="switch" >
          <input onChange={this.modelVocation.bind(this)} type="checkbox" id="checkbox" placeholder="Vocation" />
          <div className="slider round"></div>
        </label>
        <label className="toggle-label">Ferias ?</label>
        <button>Novo Usuário</button>
      </form>
    )
  }
}

export default Form;