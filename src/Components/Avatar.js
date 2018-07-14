import React from 'react'

const Avatar = props => (
    <div style={{
        display: 'flex',
        justifyContent: 'center'
    }}>
        <img src={props.src} width={props.width || 150} alt='master' />
    </div>
)

export default Avatar
