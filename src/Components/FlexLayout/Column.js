import React from 'react'
import PropTypes from 'prop-types'
import * as hAlg from './hAlignmenting'

/**
 * Flex right-to-left oriented column. 
 * Properties: 
 *      hAlign: one of 
 *          'center'    - will be transformed to alignItems: 'center'
 *          'left'      - --//-- to alignItems: 'flex-start'
 *          'right      - --//-- to alignItems: 'flex-end'
 */
class Column extends React.Component {

    static propTypes = Object.assign(
        {},
        hAlg.hAlignmentPropTypes
    )

    static defaultProps = Object.assign(
        {},
        hAlg.hAlignmentDefaultProps
    )

    render() {
        const _hAlign = hAlg.resolveHAlignment(this.props.hAlign)
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
