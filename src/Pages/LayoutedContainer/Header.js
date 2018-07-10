import React from 'react'
import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react'
import HeaderMenu from './HeaderMenu'
import HeaderNotifications from './HeaderNotifications'
import sygnet from './../../assets/img/brand/sygnet.svg'
import logo from './../../assets/img/brand/logo.svg'

export default class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <AppSidebarToggler className="d-lg-none" display="md" mobile />
                <AppNavbarBrand
                    full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
                    minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
                />
                <AppSidebarToggler className="d-md-down-none" display="lg" />
                <HeaderMenu />
                <HeaderNotifications />
                <AppAsideToggler className="d-md-down-none" />
            </React.Fragment>
        )
    }
}
