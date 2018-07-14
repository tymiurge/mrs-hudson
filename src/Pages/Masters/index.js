import React from 'react'
import { CardGroup, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import AvatarWizard from './AvatarWizard'

const Masters = props => (
    
    <CardGroup>
        <AvatarWizard />
        <Card>
            <CardHeader>Info</CardHeader>
        </Card>
        <Card>
            <CardHeader>Certificates</CardHeader>
        </Card>
        
    </CardGroup>
        
)

export default Masters
