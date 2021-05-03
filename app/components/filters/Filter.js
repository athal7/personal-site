import React, {Component} from 'react'
import s from './style.css'

export default class Filter extends Component {
  className() {
    return `${s.filter} fa fa-${this.props.icon} fa-2x ${this.props.current ? s.filtering : ''}`
  }

  render() {
    return <i className={this.className()} data-filter={this.props.category} onClick={this.props.onClick}></i>
  }
}
