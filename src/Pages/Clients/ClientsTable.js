import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'reactstrap'
import { unixtimeToString } from './../../utils'



class ClientsTable extends React.Component {

    static propTypes = {
        data: PropTypes.array.isRequired
    }

    renderRows = () => this.props.data.map( (client, idx) => (
        <tr key={`_clients_table_row_${client.name}_${idx}`}>
            <td>{client.id}</td>
            <td>{client.name}</td>
            <td>{client.phone}</td>
            <td>{unixtimeToString(client.lastVisit)}</td>
            <td>{unixtimeToString(client.nextVisit)}</td>
        </tr>
    ))

    render() {
        return (
            <Table hover bordered responsive size="sm">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Client Name</th>
                        <th>Phone</th>
                        <th>Last Visit</th>
                        <th>Next Visit</th>
                    </tr>
                </thead>
                <tbody>
                    { this.renderRows() }
                </tbody>
            </Table>
        )
    }
}

export default ClientsTable
