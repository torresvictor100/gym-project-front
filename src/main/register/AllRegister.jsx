import React, { Component } from "react";
import Main from "../components/template/Main";
import axios from 'axios'

const headerProps = {
    title: 'todos os Registro',
    Subtitle: 'Consulta a todos os alunos registrandos'
}

const baseUrl = 'http://localhost:8080/client'

const initialState = {
    list: []
}



export default class AllRegister extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Numero</th>
                        <th>Data de Pagamento</th>
                        <th>Mês de vencimento</th>
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
        return this.state.list.map(client => {
            return(
                <tr key={client.id}>
                    <td>{client.id}</td>
                    <td>{client.name}</td>
                    <td>{client.numero}</td>
                    <td>{client.datePagament}</td>
                    <td>{(client.lastMouthPaid+1)}</td>
                    <td>{client.pay? "pagamento em dia":"atrasado"}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderTable()}
            </Main>
        )
    }

}