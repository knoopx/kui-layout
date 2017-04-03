import React from 'react'

export default class Spacer extends React.PureComponent {
  static propTypes = {
    style: React.PropTypes.object,
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
