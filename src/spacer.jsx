import React from 'react'
import PropTypes from 'prop-types'

export default class Spacer extends React.PureComponent {
  static propTypes = {
    style: PropTypes.object,
  }

  static defaultProps = {
    style: {},
  }

  render() {
    return (
      <div style={{ flex: 1, ...this.props.style }} />
    )
  }
}
