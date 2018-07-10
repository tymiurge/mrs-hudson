import React from 'react'
import Loadable from 'react-loadable'
import LayoutedContainer from './Pages/LayoutedContainer'

function Loading() {
    return <div>Loading...</div>;
}

const Home = Loadable({
    loader: () => import('./Pages/Home'),
    loading: Loading
})

const Clients = Loadable({
    loader: () => import('./Pages/Clients'),
    loading: Loading
})

const routes = [
    { path: '/', exact: true, name: 'Home', component: DefaultLayout },
    { path: '/home', name: 'Home', component: Home },
    { path: '/clients', name: 'Clients', component: Home },
]

export default routes