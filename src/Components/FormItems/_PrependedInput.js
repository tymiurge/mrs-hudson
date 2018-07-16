import React from 'react'
import { Button, Card, Row, CardHeader, Label, CardBody, CardFooter, Form, FormGroup, Col, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'

const _PrependedInput = props => (
    <InputGroup> 
        <InputGroupAddon addonType='prepend'>
            <InputGroupText>
            <i className={`fa ${props.iconName}`}></i>
            </InputGroupText>
        </InputGroupAddon>
        <Input type="text" name='input1-group1' placeholder={props.placeholder} />
    </InputGroup>    
)

export default _PrependedInput
