import React, { Component } from "react";
import axios from 'axios'
import Main from "../components/template/Main";
import './Register.css'

const headerProps = {
    valor: 'valor',
    title: 'Cadastar Aluno'
}

const baseUrl = 'http://localhost:8080/client'

const initialState = {
    client: {
        id: 0,
        name: '',
        numero: '',
        datePagament: 0,
        lastMouthPaid: 0,
        pay: ''
    }
}


export default class Register extends Component {

    state = { ...initialState }
    stateConsultado = { ...initialState }

    getClient() {
        
        const client = this.state.client

        this.stateConsultado = this.state
        this.idconsultado = client.id
        const url = `${baseUrl}/${client.id}`
        axios(url).then(resp => {
                this.setState({ client: resp.data})
            })
    }


    renderUsuario(){
        return(
            
        <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Numero</th>
                        <th>Data de Pagamento</th>
                        <th>Ultimo mês pago</th>
                        <th>Mes de vencimento</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                
            </table>
            )
    }

    pagou(){
        return(
            <div className="pagou">
                    pagamento em dia
            </div>
        )
    } 

    naopagou(){
        return(
            <div className="naopagou">
                    atrasado
            </div>
        )
    }

    renderRows(){
        const client ={...this.stateConsultado.client}
            return(
                <tr key={client.id}>
                    <td>{client.id }</td>
                    <td>{client.name}</td>
                    <td>{client.numero}</td>
                    <td>{client.datePagament}</td>
                    <td>{client.lastMouthPaid +1}</td>
                    <td>{client.pay? (this.pagou()) :(this.naopagou())}</td>
                </tr>
            )
    }

    renderTela(){
        
        return( <div className="form">
                <div className="row">
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">

                    <button className="btn btn-warning"
                        onClick={e => this.pay(e)}>
                        <i className="fa fa-pen">Pagamento do mês</i>
                    </button>

                    <button className="btn btn-success"
                            onClick={e => this.getClient(this.state.client.id)}>{/** acho que se coloca só um e resolver testa */}
                            <i className="fa fa-pen">Buscar</i>
                        </button>

                        <button className="btn btn-primary"
                            onClick={e => this.reactivate(this.state.client.id)}>
                            <i className="fa fa-pen">Reativar</i>
                        </button>

                        <button className="btn btn-danger"
                            onClick={e => this.remove(this.state.client.id)}>
                            <i className="fa fa-pen">Deleta</i>
                        </button>
                    </div>
                </div>
            </div>
            )
    }

    updateField(event) {
        const client = { ...this.state.client }
        client[event.target.name] = event.target.value
        this.setState({ client })
    }

    clear() {
        this.setState({ client: this.state.client })
    }

    save() {//ver se ta certo
        const client = this.state.client
        const method = client.id ? 'put' : 'post'
        const url = client.id ? `${baseUrl}/${client.id}` : baseUrl
        axios[method](url, client)
            .then(resp => {
                this.setState({ client: initialState.client})
                
            }).then( resp => {
                alert("Salvar ou Atualizar com Sucesso")
            })
    }

    remove(event) {
        const client = { ...this.stateConsultado.client }
        axios.delete(`${baseUrl}/${client.id}`).then(resp => {
            this.setState({ client: initialState.client })
        }).then( resp => {
            alert("Apagado com sucesso")
        }).then( resp => {
            this.stateConsultado = { ...initialState }
        })
    }

    reactivate(event){
        const client = { ...this.stateConsultado.client }
        const method = client.id ? 'put' : 'post'
        const url = client.id ? `${baseUrl}/subscriptionReactivation` : `${baseUrl}/subscriptionReactivation`
        axios[method](url, { "id": client.id})
            .then(resp => {
                this.setState({ client: initialState.client })
            }).then( resp => {
                alert("Tudo Ok Reativação realizado com sucesso")
            }).then( resp => {
                this.stateConsultado = { ...initialState }
            })
    }

    pay(event) {//ver se ta certo
        
        const client = { ...this.stateConsultado.client }
        const method = client.id ? 'put' : 'post'
        const url = client.id ? `${baseUrl}/paymentmonth` : `${baseUrl}/paymentmonth`
        axios[method](url, { "id": client.id})
            .then(resp => {
                this.setState({ client: initialState.client })
            }).then( resp => {
                alert("Tudo Ok pagamento realizado com sucesso")
            }).then( resp => {
                this.stateConsultado = { ...initialState }
            })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>Id</label>
                        <input type="text" className="form-control" name="id"
                            value={this.state.client.id} onChange={e => this.updateField(e)}
                            placeholder="Digite o id..." />
                    </div>

                    <div className="col-12 col-md-6">
                        <label>Numero</label>
                        <input type="text" className="form-control" name="numero"
                            value={this.state.client.numero} onChange={e => this.updateField(e)}
                            placeholder="Digite o numero..." />
                    </div>
                    <div className="col-12 col-md-6">
                        <label>Nome</label>
                        <input type="text" className="form-control" name="name"
                            value={this.state.client.name} onChange={e => this.updateField(e)}
                            placeholder="Digite o nome..." />
                    </div>
                    
                    <div className="col-12 col-md-6">
                        <label>data de Pagamento</label>
                        <input type="text" className="form-control" name="datePagament"
                            value={this.state.client.datePagament} onChange={e => this.updateField(e)}
                            placeholder="Digite o data de Pagamento..." />
                    </div>

                    <button className="btn btn-success"
                        onClick={e => this.save(e)}>
                        <i className="fa fa-pen">Editar ou Salvar</i>
                    </button>


                </div>
            </div>

        )
    }


    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderUsuario()}
                {this.renderTela()}
            </Main>
        )
    }

}