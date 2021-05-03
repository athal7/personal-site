import React, {Component} from 'react'
import s from './style.css'

export default class Contact extends Component {
  className() {
    return `${s.contact} fa fa-${this.props.icon} fa-2x`
  }

  render() {
    return (
      <a 
        target='_blank' 
        rel="noopener noreferrer"
        href={this.props.linkTo}>
        <i className={this.className()}></i>
      </a>
    )
  }
}
