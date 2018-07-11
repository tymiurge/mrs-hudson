import React from 'react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button
} from 'reactstrap'

class Toolbar extends React.Component {

  state = {
    buttonsState: true
  }

  toggleToolbarState = () => this.setState({...this.state, buttonsState: !this.state.buttonsState})

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
      <Input type="text" placeholder="Search" />
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
