import React from 'react'
import StaticMode from './StaticMode'
import EditMode from './EditMode'

const data = [
    {field: 'Username', value: 'shrek'},
    {field: 'Mail', value: 'shrek@try2myt.com'},
    {field: 'Phone', value: '095591191191'},
    {field: 'Experience', value: '2 years'},
  ]

class MasterInfo extends React.Component {
    state = {
        staticMode: true
    }

    toggleMode = () => this.setState({...this.state, staticMode: !this.state.staticMode})

    render() {
        const { staticMode } = this.state
        return staticMode
            ? (<StaticMode data={data} onEditClick={ () => this.toggleMode() } />)
            : (<EditMode onResetClick={ () => this.toggleMode() }/>)
    }
}

export default MasterInfo
