import React from 'react'
import { Button } from 'reactstrap'
import { PageContainer, PageFooter, Toolbar } from 'components'
import { Card, CardBody, Table } from 'reactstrap'

class MastersList extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Toolbar />
                <PageContainer>
                <Card style={{marginTop: '10px'}}>
                    <CardBody>
                        <Table responsive bordered size="sm">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Specialization</th>
                                    <th>Operations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Shrek Ogre</td>
                                    <td>Паріхмахер</td>
                                    <td>E D</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Fiona Ogre</td>
                                    <td>Паріхмахер</td>
                                    <td>E D</td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
                </PageContainer>
                
            </React.Fragment>
        )
    }

}

export default MastersList
