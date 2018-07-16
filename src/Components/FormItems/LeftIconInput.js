import React from 'react'
import { Button, Card, CardHeader, CardBody, CardFooter, Form, FormGroup, Col, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'

const LeftIconInput = props => {
    const iconName = props.iconName || 'fa-question-circle'
    const placeholder = props.placeholder || 'placeholder'
    return (
        <FormGroup row>
            <Col md='12'>
                <InputGroup>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <i className={`fa ${iconName}`}></i>
                    </InputGroupText>
                </InputGroupAddon>
                <Input type="text" name='input1-group1' placeholder={placeholder} />
                </InputGroup>
            </Col>
        </FormGroup>
    )
}

export default LeftIconInput
