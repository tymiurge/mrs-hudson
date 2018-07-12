import React from 'react'
import PropTypes from 'prop-types'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button
} from 'reactstrap'

class Toolbar extends React.Component {

  static propTypes = {
    onSearchChange: PropTypes.func
  }

  static defaultProps = {
    onSearchChange: () => {}
  }

  state = {
    buttonsState: true,
    inputValue: '',
  }

  toggleToolbarState = () => this.setState({...this.state, buttonsState: !this.state.buttonsState})

  onSearchChange = newValue => this.setState(
    {...this.state, inputValue: newValue},
    this.props.onSearchChange(newValue)
  )

  renderButtonsState = () => (
    <React.Fragment>
      <Button color="primary" onClick={ () => this.toggleToolbarState() }>
        <i className="fa fa-search"></i>
      </Button>
      <Button color="danger" style={{marginLeft: '5px'}}>
        <i className="fa fa-plus"></i>
      </Button>
    </React.Fragment>
  )

  renderSearchState = () => (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <i className="fa fa-user"></i>
        </InputGroupText>
      </InputGroupAddon>
      <Input
        type="text"
        placeholder="Search"
        value={this.state.inputValue}
        onChange={ e => this.onSearchChange(e.target.value) }
      />
      <InputGroupAddon addonType="append">
        <Button type="button" color="danger" onClick={ () => this.toggleToolbarState() }>
          <i className="fa fa-times"></i>
        </Button>
      </InputGroupAddon>
    </InputGroup>        
  )

  render() {
    return (
      <div className={'__toolbar'}>
      {
        this.state.buttonsState ? this.renderButtonsState() : this.renderSearchState()
      }  

    {/*
      
    */}
    </div>
    )
  }
}

export default Toolbar
