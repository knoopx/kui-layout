import React from 'react'
import PropTypes from 'prop-types'

export default class View extends React.PureComponent {
  static propTypes = {
    flow: PropTypes.oneOf(['row', 'column']).isRequired,
    style: PropTypes.object,
  }

  static defaultProps = {
    flow: 'row',
  }

  static childContextTypes = {
    flow: PropTypes.oneOf(['row', 'column']).isRequired,
  }

  getChildContext() {
    return {
      flow: this.props.flow,
    }
  }

  render() {
    const { flow, style, ...otherProps } = this.props
    return <div {...otherProps} style={{ ...style, display: 'flex', flexDirection: flow }} />
  }
}
