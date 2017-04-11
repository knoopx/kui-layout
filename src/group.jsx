import React from 'react'
import View from './view'
import Gutter from './gutter'

export default class Group extends React.PureComponent {
  static propTypes = {
    separator: React.PropTypes.element.isRequired,
  }

  static defaultProps = {
    separator: <Gutter />,
  }

  render() {
    const { children, separator, ...props } = this.props
    return <View {...props}>{this.renderChildren(children, separator)}</View>
  }

  renderChildren = (children, separator) => {
    if (children.length > 1) {
      const [first, ...rest] = children
      const items = [first]
      rest.forEach((item, index) => {
        const key = `separator-${item.key || index}`
        items.push(React.cloneElement(separator, { key }), item)
      })
      return items
    }

    return children
  }
}
