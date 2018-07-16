import React from 'react'
import { CardGroup, Card, CardHeader } from 'reactstrap'
import AvatarWizard from './AvatarWizard'
import MasterInfo from './MasterInfo'

const Masters = props => (

    <CardGroup>
        <AvatarWizard />
        <MasterInfo />
        <Card>
            <CardHeader>Certificates</CardHeader>
        </Card>
        
    </CardGroup>
        
)

export default Masters
