import React from 'react'
import { Button, Card, CardHeader, CardBody, CardFooter, Form } from 'reactstrap'
import { FormItems } from './../../Components'
import StaticMode from './Modes/StaticMode'



class MasterInfo extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader>Info</CardHeader>
                <CardBody>
                  <Form action="" method="post" className="form-horizontal">
                    <FormItems.LeftIconInput iconName='fa-user' placeholder='Username' />
                    <FormItems.LeftIconInput iconName='fa-envelope' placeholder='Email' />
                    <FormItems.LeftIconInput iconName='fa-phone' placeholder='Phone' />
                    <FormItems.DateYMSelector title='In industry from' />
                  </Form>
                </CardBody>
               
                <CardFooter>
                  <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                  <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                </CardFooter>
            </Card>
        )
    }
}

export default MasterInfo
