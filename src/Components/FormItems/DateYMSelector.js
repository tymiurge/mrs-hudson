import React from 'react'
import _PrependedInput from './_PrependedInput'
import { Button, Card, Row, CardHeader, Label, CardBody, CardFooter, Form, FormGroup, Col, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'

const DateYMSelector = props => {
    const title = props.title || 'Year and Month selector'
    return (
        <FormGroup>
            <Label>
                { title }
                <Row>
                    <Col>
                        <_PrependedInput iconName='fa-calendar-o' placeholder='Year' />
                    </Col>
                    <Col>
                        <_PrependedInput iconName='fa-calendar-o' placeholder='Month' />
                    </Col>
                </Row>
            </Label>
        </FormGroup>
    )
}

export default DateYMSelector
