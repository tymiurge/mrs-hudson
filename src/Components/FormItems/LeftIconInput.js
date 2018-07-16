import React from 'react'
import { Button, Card, CardHeader, CardBody, CardFooter, Form, FormGroup, Col, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'
import _PrependedInput from './_PrependedInput'

const LeftIconInput = props => {
    const iconName = props.iconName || 'fa-question-circle'
    const placeholder = props.placeholder || 'placeholder'
    return (
        <FormGroup row>
            <Col md='12'>
                <_PrependedInput {...props} />
            </Col>
        </FormGroup>
    )
}

export default LeftIconInput
