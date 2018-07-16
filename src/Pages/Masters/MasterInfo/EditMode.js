import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, CardHeader, CardBody, CardFooter, Form } from 'reactstrap'
import { FormItems } from 'components'

class EditMode extends React.Component {

    static propTypes = {
        onResetClick: PropTypes.func.isRequired
    }

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
                    <Button size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                    <Button
                        size="sm"
                        color="danger"
                        onClick={ () => this.props.onResetClick() }
                    >
                        <i className="fa fa-ban"></i> Reset
                    </Button>
                </CardFooter>
            </Card>
        )
    }
}

export default EditMode
