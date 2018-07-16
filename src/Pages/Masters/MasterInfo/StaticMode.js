import React from 'react'
import { Badge, Card, CardBody, CardHeader, CardFooter, Button, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap'
import PropTypes from 'prop-types'

const data = [
  {field: 'Username', value: 'shrek'},
  {field: 'Mail', value: 'shrek@try2myt.com'},
  {field: 'Phone', value: '095591191191'},
  {field: 'Experience', value: '2 years'},
]

class StaticMode extends React.Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
    onEditClick: PropTypes.func.isRequired
  }

  renderData = () => data.map(item => (
    <tr key={`${item.field}_${item.value}`}>
      <th>{item.field}</th>
      <td>{item.value}</td>
    </tr>
  ))

  render() {
        return (
          <Card>
                <CardHeader>Info</CardHeader>
                <CardBody>
                  <Table responsive size="sm">
                    <tbody>
                      { this.renderData() }
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter>
                  <Button 
                    size="sm" 
                    color="success"
                    onClick={ () => this.props.onEditClick() }
                  >
                    <i className="fa fa-pencil"></i> Edit
                  </Button>
                </CardFooter>
            </Card>
        )
    }
}

export default StaticMode
