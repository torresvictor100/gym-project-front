import './Login.css'
import React, { Component } from "react";
import axios from 'axios'
import Main from "../components/template/Main";


const baseUrl = 'http://localhost:8080/login'


const headerProps = {
    valor: 'Login',
    title: 'Login Adm'
}
const initialState = {
    client: { userName: '', password: '' },
    token: ''
}



export default class Login extends Component {

    state = { ...initialState }


    criarCooker(token){
        const name = "authorization"
        const validade = ''
        const local = '/'
        document.cookie = name + "=" + (token || "") + validade + ";" + local;
    }

    clear() {
        this.setState({ client: initialState.client })
    }

    loging() {
        const client = this.state.client
        const url = baseUrl

        
        axios.post(url, client).then((resp) => {
            const token = resp.headers.authorization
            this.criarCooker(token)

        }).then(resp => {
            this.setState({ client: initialState.client })
        })


    }

    updateField(event) {
        const client = { ...this.state.client }
        client[event.target.name] = event.target.value
        this.setState({ client })
    }

    renderLogin() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="form-grup">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="userName"
                                value={this.state.client.userName} onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="form-grup">

                            <label>Senha</label>
                            <input type="text" className="form-control" name="password"
                                value={this.state.client.password} onChange={e => this.updateField(e)}
                                placeholder="Digite o password..." />

                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e => this.loging(e)}>
                            Conectar
                        </button>
                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <Main {...headerProps}>
                {this.renderLogin()}
            </Main>
        )
    }

}