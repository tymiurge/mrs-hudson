import React from 'react'

const PhotoHolder = props => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'centers',
        alignItems: 'center',
        backgroundColor: '#dfe6e9',
        width: `${props.width}px`,
        height: `${props.height}px`,
    }}>
        <span style={{color: '#b2bec3', fontSize: '18px'}}>{props.title}</span>
    </div>
)

export default PhotoHolder
