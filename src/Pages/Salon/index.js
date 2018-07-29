import React from 'react'
import {
    Col,
    Row,
  } from 'reactstrap'
import LogoWidget from './LogoWidget'

class SalonProfile extends React.Component {

    render() {
        return (
            <React.Fragment>
                <React.Fragment>
                    <Row>
                        <Col md={4}>
                            <LogoWidget />
                        </Col>
                        <Col md={8}>
sdf
                        </Col>
                    </Row>

                </React.Fragment>
                <React.Fragment>
                    logo
                    <div>
                        <h2>info</h2>
                        <p>address</p>
                        <p>contacts</p>
                    </div>
                    <h2>services</h2>
                    <p>services</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                </React.Fragment>
            </React.Fragment>
        )
    }
}

export default SalonProfile
