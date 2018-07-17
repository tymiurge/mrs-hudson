import React from 'react'
import { CardGroup, Card, CardHeader } from 'reactstrap'
import AvatarWizard from './AvatarWizard'
import MasterInfo from './MasterInfo'
import PerformanceInfo from './PerformanceInfo'

const Masters = props => (

    <CardGroup>
        <AvatarWizard />
        <MasterInfo />
        <PerformanceInfo />
    </CardGroup>
        
)

export default Masters
