import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, Label } from 'reactstrap'
import Rating from 'react-rating'

import { brands } from 'assets'

const PerformanceInfo = props => (
    <Card>
            <CardHeader>Certificates</CardHeader>
            <CardBody>
                <Label>Clients rating:</Label>
                <div>
                <Rating
                    emptySymbol='fa fa-star-o'
                    fullSymbol='fa fa-star'
                    initialRating={4}
                    readonly={true}
                />
                </div>

                <Label style={{marginTop: '10px'}}>Certificated by:</Label>
                <div>
                    <img src={brands.artnaturals} width={75} />
                    <img src={brands.loreal} width={75} style={{marginLeft: '10px'}}/>
                </div>

            </CardBody>
            <CardFooter>
                  <Button 
                    size="sm" 
                    color="primary"
                    //onClick={ () => this.props.onEditClick() }
                  >
                    <i className="fa fa-info-circle"></i> Details
                  </Button>
                </CardFooter>
        </Card>
    
)

export default PerformanceInfo
