import React from 'react'

/**
 * left-to-right oriented flex row. flexWrap is set to 'wrap'
 */
class Row extends React.Component {

    render() {
        return (
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                { this.props.children }
            </div>
        )
    }
}

export default Row
