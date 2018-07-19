import React from 'react'
import { Card, CardHeader, CardFooter, CardBody } from 'reactstrap'
import { gallery } from 'assets'

const WorksGallery = props => (
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
)

export default WorksGallery
