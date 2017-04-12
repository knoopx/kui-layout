import React from 'react'
import PropTypes from 'prop-types'
import { theme } from 'kui-theme'

@theme('gutter', {
  size: PropTypes.number,
})
export default class Gutter extends React.PureComponent {
  static contextTypes = {
    flow: PropTypes.string.isRequired,
  }

  static propTypes = {
    size: PropTypes.number.isRequired,
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
