import PropTypes from 'prop-types'

const hAlignmentPropTypes = {
    hAlign: PropTypes.oneOf(['left', 'right', 'center'])
}

const hAlignmentDefaultProps = {
    hAlign: 'center',
}

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

export {
    resolveHAlignment, hAlignmentPropTypes, hAlignmentDefaultProps
}
