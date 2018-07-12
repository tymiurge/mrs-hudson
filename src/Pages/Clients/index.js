import React from 'react'
import ClientsTable from './ClientsTable'
import { Toolbar, PageContainer } from './../../Components'
import { Card, CardBody } from 'reactstrap'

const Clients = props => (
    <div>
        <Toolbar />
        <PageContainer>
            <Card>
                <CardBody>
                    <ClientsTable />
                </CardBody>
            </Card>
        </PageContainer>
    </div>
)

export default Clients