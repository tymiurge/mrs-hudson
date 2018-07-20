import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'
import {
    AppAside,
    AppFooter,
    AppHeader,
    AppSidebar,
    AppSidebarFooter,
    AppSidebarForm,
    AppSidebarHeader,
    AppSidebarMinimizer,
    AppSidebarNav,
} from '@coreui/react'
import navigationConfig from './../../navigationConfig'
import routesConfig from './../../routes'
import Header from './Header'
import Footer from './Footer'
import RightAside from './RightAside'

export default class LayoutedContainer extends React.Component {
    render() {
        return (
            <div className="app">
                <AppHeader fixed>
                    <Header />
                </AppHeader>
                <div className="app-body">
                    <AppSidebar fixed display="lg">
                        <AppSidebarHeader />
                        <AppSidebarForm />
                        <AppSidebarNav navConfig={navigationConfig} {...this.props} />
                        <AppSidebarFooter />
                        <AppSidebarMinimizer />
                    </AppSidebar>
                    <main className="main">
                        <Container fluid>
                            <Switch>
                                {routesConfig.map((route, idx) => {
                                    return route.component 
                                        ? (
                                            <Route 
                                                key={idx} 
                                                path={route.path} 
                                                exact={route.exact} 
                                                name={route.name} 
                                                render={props => (<route.component {...props} />)} 
                                            />
                                        )
                                        : (null);
                                },
                                )}
                                <Redirect from="/" to="/home" />
                            </Switch>
                        </Container>
                    </main>
                    <AppAside fixed hidden>
                        <RightAside />
                    </AppAside>
                </div>
                {/*
                <AppFooter fixed>
                    <Footer />
                </AppFooter>
                */}
            </div>
        )
    }
}
