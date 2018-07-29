import React from 'react'

const WrappedRow = props => (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {props.children}
    </div>
)

export default WrappedRow
