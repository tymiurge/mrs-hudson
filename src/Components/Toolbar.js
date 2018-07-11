import React from 'react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button
} from 'reactstrap'

const Toolbar = () => (
    <div className={'__toolbar'}>
    <Button color="primary">
      <i className="fa fa-search"></i>
    </Button>
    <Button color="danger" style={{marginLeft: '5px'}}>
      <i className="fa fa-plus"></i>
    </Button>

    {/*
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="fa fa-user"></i>
          </InputGroupText>
        </InputGroupAddon>
        <Input type="text" placeholder="Search" />
      </InputGroup>        
    */}
    </div>
)

/*

*/

export default Toolbar
