import React from 'react'
import { CardGroup } from 'reactstrap'
import AvatarWizard from './AvatarWizard'
import MasterInfo from './MasterInfo'
import PerformanceInfo from './PerformanceInfo'
import WorksGallery from './WorksGallery'
import MasterServices from './MasterServices'

const MasterProfile = props => (
    <React.Fragment>
        <CardGroup style={{marginTop: '10px'}}>
            <AvatarWizard />
            <MasterInfo />
            <PerformanceInfo />
        </CardGroup>
        <MasterServices />
        <WorksGallery />
    </React.Fragment>
        
)

export default MasterProfile
