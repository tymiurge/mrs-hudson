import React from 'react'
import { CardGroup, Card, CardHeader, CardFooter, CardBody } from 'reactstrap'
import AvatarWizard from './AvatarWizard'
import MasterInfo from './MasterInfo'
import PerformanceInfo from './PerformanceInfo'
import WorksGallery from './WorksGallery'
import { gallery } from 'assets'

const Masters = props => (
    <React.Fragment>
        <CardGroup style={{marginTop: '10px'}}>
            <AvatarWizard />
            <MasterInfo />
            <PerformanceInfo />
        </CardGroup>
        <WorksGallery />
    </React.Fragment>
        
)

export default Masters
