import React from 'react'
import { Card, CardHeader, CardFooter, CardBody, Button, ButtonGroup, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Row, Col } from 'reactstrap'
import { Bar, Line } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import PropTypes from 'prop-types'

const cardChartData3 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
        data: [78, 81, 80, 45, 34, 12, 40],
      },
    ],
  };

  const cardChartOpts3 = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          display: false,
        }],
      yAxes: [
        {
          display: false,
        }],
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
  };



const getColorClass = color => {
    if (color === undefined) return ''
    const colors = {
        yellow: 'bg-warning',
        blue: 'bg-info',
        darkBlue: 'bg-primary',
        red: 'bg-danger'     
    }
    return colors[color]
}

class SkillCard extends React.Component {

    static propTypes = {
        category: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        color: PropTypes.oneOf(['yellow', 'blue', 'darkBlue', 'red'])
    }

    state = {
      menuOpen: false
    }

    toggleMenu = () => this.setState( {...this.state, menuOpen: !this.state.menuOpen} )
    
    render() {
        const { title, category, color } = this.props
        return (
            <Card className={`text-white ${getColorClass(color)}`}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown isOpen={this.state.menuOpen} toggle={ () => this.toggleMenu() }>
                  {/*<Dropdown id='card3' isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>*/}
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Edit</DropdownItem>
                      <DropdownItem>Delete</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">{title}</div>
                <div>{category}</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
              </div>
            </Card>
        )
    }
}


export default SkillCard
