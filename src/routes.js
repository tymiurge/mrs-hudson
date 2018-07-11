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

const Masters = Loadable({
    loader: () => import('./Pages/Masters'),
    loading: Loading
})

const Materials = Loadable({
    loader: () => import('./Pages/Materials'),
    loading: Loading
})

const Services = Loadable({
    loader: () => import('./Pages/Services'),
    loading: Loading
})

const Schedules = Loadable({
    loader: () => import('./Pages/Schedules'),
    loading: Loading
})

const routes = [
    { path: '/', exact: true, name: 'Home', component: LayoutedContainer },
    { path: '/home', name: 'Home', component: Home },
    { path: '/clients', name: 'Clients', component: Clients },
    { path: '/masters', name: 'Masters', component: Masters },
    { path: '/materials', name: 'Materials', component: Materials },
    { path: '/services', name: 'Services', component: Services },
    { path: '/schedules', name: 'Schedules', component: Schedules },
]


export default routes