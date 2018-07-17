import React from 'react'
import { CardGroup, Card, CardHeader, CardFooter, CardBody } from 'reactstrap'
import AvatarWizard from './AvatarWizard'
import MasterInfo from './MasterInfo'
import PerformanceInfo from './PerformanceInfo'
import { gallery } from 'assets'

const Masters = props => (
    <React.Fragment>
        <CardGroup style={{marginTop: '10px'}}>
            <AvatarWizard />
            <MasterInfo />
            <PerformanceInfo />
        </CardGroup>
        <Card style={{marginTop: '10px'}}>
            <CardHeader>Examples of work</CardHeader>
            <CardBody>
                <img src={gallery.g1} height={150} alt={''} />
                <img src={gallery.g2} height={150} alt={''} style={{marginLeft: '5px'}} />
                <img src={gallery.g3} height={150} alt={''} style={{marginLeft: '5px'}} />
                <img src={gallery.g4} height={150} alt={''} style={{marginLeft: '5px'}} />
                <img src={gallery.g5} height={150} alt={''} style={{marginLeft: '5px'}} />
                <img src={gallery.g6} height={150} alt={''} style={{marginLeft: '5px'}} />
            </CardBody>
            <CardFooter></CardFooter>
        </Card>
    </React.Fragment>
        
)

export default Masters
