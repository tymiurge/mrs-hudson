import React from 'react'
import PropTypes from 'prop-types'

const hAlignments = {
    left: 'flex-start',
    right: 'flex-end',
    center: 'center'
}

const resolveHAlignment = hAlign => {
    if (!hAlignments.hasOwnProperty(hAlign)) {
        return `flex column does not support ${hAlign} value for the alignItems property`
    }
    return hAlignments[hAlign]
} 
/**
 * Flex right-to-left oriented column 
 */
class Column extends React.Component {

    static propTypes = {
        hAlign: PropTypes.oneOf(['left', 'right', 'center'])
    }

    static defaultProps = {
        hAlign: 'center',
    }

    render() {
        const _hAlign = resolveHAlignment(this.props.hAlign)
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: _hAlign
            }}>
                { this.props.children }
            </div>
        )
    }
}

export default Column
