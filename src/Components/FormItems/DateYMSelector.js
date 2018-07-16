import React from 'react'
import PrependedInput from './PrependedInput'
import { Row, Label, FormGroup, Col } from 'reactstrap'

const DateYMSelector = props => {
    const title = props.title || 'Year and Month selector'
    return (
        <FormGroup>
            <Label>
                { title }
                <Row>
                    <Col>
                        <PrependedInput iconName='fa-calendar-o' placeholder='Year' />
                    </Col>
                    <Col>
                        <PrependedInput iconName='fa-calendar-o' placeholder='Month' />
                    </Col>
                </Row>
            </Label>
        </FormGroup>
    )
}

export default DateYMSelector
