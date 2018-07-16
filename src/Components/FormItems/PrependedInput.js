import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'

const PrependedInput = props => (
    <InputGroup> 
        <InputGroupAddon addonType='prepend'>
            <InputGroupText>
            <i className={`fa ${props.iconName}`}></i>
            </InputGroupText>
        </InputGroupAddon>
        <Input type="text" name='input1-group1' placeholder={props.placeholder} />
    </InputGroup>    
)

export default PrependedInput
