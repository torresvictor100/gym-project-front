import React, { Component } from "react";
import axios from 'axios'
import Main from "../components/template/Main";

const headerProps = {
    valor: 'valor',
    title: 'Cadastra de aluno'
}

const baseUrl = 'http://localhost:8080/cashdesk'

const initialState = {
    client: { name: '', amount: 0 },
    list: []
}

export default class Register extends Component {

    updateField(event) {
        const client = { ...this.state.client }
        client[event.target.name] = event.target.value
        this.setState({ client })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>Nome</label>
                        <input type="text" className="form-control" name="name"
                                value={this.state.client.name} onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                    </div>
                </div>
            </div>
        )
    }


    render() {
        return (
            <Main {...headerProps}>
                
            </Main>
        )
    }

}