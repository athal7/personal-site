import React, {Component} from 'react'

export default class Contact extends Component {
  className() {
    return `fa fa-${this.props.icon} fa-2x`
  }

  render() {
    return (
      <a target='_blank' href={this.props.linkTo}>
        <i className={this.className()}></i>
      </a>
    )
  }
}
