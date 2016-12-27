import React, {Component} from 'react'

export default class Filter extends Component {
  className() {
    return `filter fa fa-${this.props.icon} fa-2x`
  }

  render() {
    return <i className={this.className()} data-filter={this.props.category}></i>
  }
}
