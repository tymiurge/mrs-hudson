import React from 'react'
import { CardGroup, Card, CardHeader, CardFooter, CardBody, Button, Table, Row, Col } from 'reactstrap'
import SkillCard from './SkillCard'

const MasterServices = props => (
    <Card style={{marginTop: '10px'}}>
        <CardHeader>Services by master</CardHeader>
        <CardBody>
            <Row>
                <Col xs="12" sm="6" lg="3">
                    <SkillCard title='Стрижка'  category='Волосся' color='yellow' />
                </Col>
                <Col xs="12" sm="6" lg="3">
                    <SkillCard title='Манікюр'  category='Ногті' color='red' />
                </Col>
                <Col xs="12" sm="6" lg="3">
                    <SkillCard title='Ламінація'  category='Брови' color='darkBlue' />
                </Col>

                <Col xs="12" sm="6" lg="3">
                    <SkillCard title='Манікюр'  category='Брови' color='darkBlue' />
                </Col>
            </Row>
        </CardBody>
        <CardFooter>
            <Button 
                size="sm" 
                color="success"
            >
                <i className="fa fa-pencil"></i> Edit
            </Button>
        </CardFooter>
    </Card>
)

export default MasterServices
