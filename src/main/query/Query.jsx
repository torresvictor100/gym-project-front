import React, { Component } from "react";
import Main from "../components/template/Main";
import axios from 'axios'
import './Query.css'

const headerProps = {
    valor: 'valor',
    title: 'Consultar aluna'
}

const baseUrl = 'http://localhost:8080/client'

const initialState = {
    client: { id: 0 ,
            name: '', 
            numero: '',
            datePagament: 0,
            lastMouthPaid: 0,
            pay:'' }
}

const idconsultado = 0



export default class Query extends Component {

    state = { ...initialState }

    idconsultado = idconsultado

    getClient() {
        
        const client = this.state.client
        this.idconsultado = client.id
        const url = `${baseUrl}/${client.id}`
        axios(url).then(resp => {
                this.setState({ client: resp.data})
            })
    }

    updateField(event) {
        const client = { ...this.state.client }
        client[event.target.name] = +event.target.value
        this.setState({ client })
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


    renderTela(){
        return( <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-grup">
                            <label>ID</label>
                            <input type="value" className="form-control" name="id"
                                value={this.state.client.id} onChange={e => this.updateField(e)}
                                placeholder="Digite o id" />
                        </div>
                        <div></div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-success"
                            onClick={e => this.getClient(e)}>
                            <i className="fa fa-pen">Buscar</i>
                        </button>
                    </div>
                </div>
                <div >
                    {this.state.client.pay? this.pagou(): this.naopagou()}

                </div>
            </div>
            )
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
                        <th>situação de pagamento</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                
            </table>
            )
    }

    renderRows(){
        const client ={...this.state.client}
            return(
                <tr key={client.id}>
                    <td>{this.idconsultado}</td>
                    <td>{client.name}</td>
                    <td>{client.numero}</td>
                    <td>{client.datePagament}</td>
                    <td>{client.lastMouthPaid}</td>
                    <td>{client.pay? "pagamento em dia":"atrasado"}</td>
                </tr>
            )
    }

    render() {
        return (
            <Main {...headerProps}>
            {this.renderTela()}
            {this.renderUsuario()}
            </Main>
        )
    }
}