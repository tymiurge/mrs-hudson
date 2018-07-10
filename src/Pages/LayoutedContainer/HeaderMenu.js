import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

const HeaderMenu = props => (
    <Nav className="d-md-down-none" navbar>
        <NavItem className="px-3">
            <NavLink href="/">Dashboard</NavLink>
        </NavItem>
        <NavItem className="px-3">
            <NavLink href="#/users">Users</NavLink>
        </NavItem>
        <NavItem className="px-3">
            <NavLink href="#">Settings</NavLink>
        </NavItem>
    </Nav>
)

export default HeaderMenu
