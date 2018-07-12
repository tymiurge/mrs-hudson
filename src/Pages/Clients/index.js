import React from 'react'
import ClientsTable from './ClientsTable'
import { Toolbar, PageContainer } from './../../Components'
import { Card, CardBody } from 'reactstrap'

const clientsList = [
    {id: 1, name: 'Shrek', phone: '00999667788', lastVisit: 1465720946, nextVisit: 1534063346},
    {id: 2, name: 'Fiona', phone: '00999667788', lastVisit: 1465720946, nextVisit: 1534063346},
    {id: 3, name: 'Donkey chatterbox', phone: '00999667788', lastVisit: 1465720946, nextVisit: 1534063346},
    {id: 4, name: 'Evil Queen', phone: '00999667788', lastVisit: 1465720946, nextVisit: 1534063346},
    {id: 5, name: 'Scroodge MacDuck', phone: '00999667788', lastVisit: 1465720946, nextVisit: 1534063346},
    {id: 6, name: 'Kotygoroshko', phone: '00999667788', lastVisit: 1465720946, nextVisit: 1534063346},
    {id: 7, name: 'Black Coat', phone: '00999667788', lastVisit: 1465720946, nextVisit: 1534063346},
    {id: 8, name: 'Godot', phone: '00999667788', lastVisit: 1465720946, nextVisit: 1534063346},
    {id: 9, name: 'Henk Chinasky', phone: '00999667788', lastVisit: 1465720946, nextVisit: 1734063346},
    {id: 10, name: 'Fedor Raskolnikov', phone: '00999667788', lastVisit: 1465720946, nextVisit: 1634063346},
    {id: 11, name: 'ms Holms', phone: '00999667788', lastVisit: 1465720946, nextVisit: 1634063346},
    {id: 12, name: 'mrs Hudson', phone: '00999667788', lastVisit: 1465720946, nextVisit: 1634063346},
    {id: 13, name: 'ms Watson', phone: '00999667788', lastVisit: 1465720946, nextVisit: 1634063346},
    {id: 14, name: 'Artur Dent', phone: '00999667788', lastVisit: 1465720946, nextVisit: 1634063346},
    {id: 15, name: 'Moloy', phone: '00999667788', lastVisit: 1465720946, nextVisit: 1634063346},
    {id: 16, name: 'Shveik', phone: '00999667788', lastVisit: 1465720946, nextVisit: 1634063346},
    {id: 17, name: 'Frodo', phone: '00999667788', lastVisit: 1465720946, nextVisit: 1634063346},
    {id: 18, name: 'Gendalf', phone: '00999667788', lastVisit: 1465720946, nextVisit: 1634063346},
]

class Clients extends React.Component {

    state={
        clients: clientsList
    }

    onSearchChange = value => this.setState({
        ...this.state,
        clients: clientsList.filter(client => client.name.includes(value))
    })

    render() {
        return (
            <div>
                <Toolbar onSearchChange={ value => this.onSearchChange(value) }/>
                <PageContainer>
                    <Card>
                        <CardBody>
                            <ClientsTable data={this.state.clients}/>
                        </CardBody>
                    </Card>
                </PageContainer>
            </div>
        )
    }
}

export default Clients
