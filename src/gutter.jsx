import React from 'react'
import { theme } from 'kui-theme'

@theme('gutter', {
  size: React.PropTypes.number.isRequired,
})
export default class Gutter extends React.PureComponent {
  static contextTypes = {
    flow: React.PropTypes.string.isRequired,
  }

  static propTypes = {
    size: React.PropTypes.number.isRequired,
  }

  render() {
    const { size } = this.props

    const styles = {
      row: { width: size },
      column: { height: size },
    }

    return (
      <div style={styles[this.context.flow]} />
    )
  }
}
