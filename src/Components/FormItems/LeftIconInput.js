import React from 'react'
import { FormGroup, Col } from 'reactstrap'
import PrependedInput from './PrependedInput'

const LeftIconInput = props => {
    return (
        <FormGroup row>
            <Col md='12'>
                <PrependedInput {...props} />
            </Col>
        </FormGroup>
    )
}

export default LeftIconInput
