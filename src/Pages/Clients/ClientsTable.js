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
            <th>{client.id}</th>
            <th>{client.name}</th>
            <th>{client.phone}</th>
            <th>{unixtimeToString(client.lastVisit)}</th>
            <th>{unixtimeToString(client.nextVisit)}</th>
        </tr>
    ))

    render() {
        return (
            <Table hover bordered striped responsive size="sm">
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
