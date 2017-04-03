import React from 'react'
import { theme } from 'kui-theme'

@theme('divider', {
  color: React.PropTypes.string.isRequired,
  size: React.PropTypes.number.isRequired,
})
export default class Divider extends React.PureComponent {
  static contextTypes = {
    flow: React.PropTypes.string.isRequired,
  }

  static propTypes = {
    color: React.PropTypes.string.isRequired,
    size: React.PropTypes.number.isRequired,
  }

  render() {
    const { color, size } = this.props

    const styles = {
      row: { width: size },
      column: { height: size },
    }

    return (
      <div style={{ backgroundColor: color, ...styles[this.context.flow] }} />
    )
  }
}
